from fastapi import FastAPI, APIRouter, HTTPException, Request, Response
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import ContactMessage, ContactMessageCreate, PortfolioView, ResumeDownload
from typing import List
import uuid
from datetime import datetime
import io
import base64
from reportlab.lib.pagesizes import letter, A4
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.colors import black, blue, gray
from reportlab.lib.units import inch

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(title="Nikhil Kumar Bandi - Portfolio API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def generate_resume_pdf():
    """Generate a professional resume PDF"""
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4, rightMargin=72, leftMargin=72, topMargin=72, bottomMargin=18)
    
    # Define styles
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=30,
        textColor=blue,
        alignment=1  # Center alignment
    )
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=14,
        spaceAfter=12,
        textColor=blue
    )
    normal_style = styles['Normal']
    
    # Build the resume content
    story = []
    
    # Header
    story.append(Paragraph("NIKHIL KUMAR BANDI", title_style))
    story.append(Paragraph("DevOps/SRE/Platform Engineer", styles['Heading3']))
    story.append(Spacer(1, 12))
    
    # Contact Information
    contact_info = """
    <b>Email:</b> bandinikhilgoud4545@gmail.com<br/>
    <b>Location:</b> Available Globally<br/>
    <b>Status:</b> Available for Freelance & Full-time Opportunities
    """
    story.append(Paragraph(contact_info, normal_style))
    story.append(Spacer(1, 20))
    
    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", heading_style))
    summary = """
    IT Professional with 3+ years of experience in Software Development, skilled at operating in a wide 
    range of platforms including DevOps/SRE/Platform engineering, AWS, GCP, and Linux environments. 
    Passionate about implementing modern DevOps practices, optimizing cloud infrastructure, and ensuring 
    high availability and performance of critical systems.
    """
    story.append(Paragraph(summary, normal_style))
    story.append(Spacer(1, 20))
    
    # Work Experience
    story.append(Paragraph("WORK EXPERIENCE", heading_style))
    
    # Current Role
    story.append(Paragraph("<b>Platform Engineer</b> - SIDGS DIGISOL Pvt Ltd", styles['Heading4']))
    story.append(Paragraph("Current Position | Full-time", normal_style))
    current_responsibilities = """
    • Leading DevOps initiatives and platform engineering for enterprise-scale applications<br/>
    • Utilized archetypes to establish structured development environments with dependencies and automation<br/>
    • Managed build and release processes, including dependency management and deployment strategies<br/>
    • Developed Helm charts to package and deploy applications on Kubernetes efficiently<br/>
    • Ensured zero-downtime deployments and efficiently troubleshot issues<br/>
    • Orchestrated CI/CD pipelines using GitLab for automated builds and deployments
    """
    story.append(Paragraph(current_responsibilities, normal_style))
    story.append(Spacer(1, 15))
    
    # Previous Role
    story.append(Paragraph("<b>System Administrator</b> - Anything 4 Home Ltd", styles['Heading4']))
    story.append(Paragraph("Previous Role | Full-time", normal_style))
    previous_responsibilities = """
    • Managed comprehensive system administration and monitoring infrastructure for e-commerce platform<br/>
    • Specialized in monitoring and troubleshooting, focusing on tracing, logging, and debugging microservices<br/>
    • Monitored and managed CD deployments using ArgoCD for seamless rollouts and quick failure recovery<br/>
    • Implemented real-time monitoring and alerting using Prometheus and Grafana<br/>
    • Diagnosed and resolved microservices issues leveraging CloudWatch and centralized logging tools
    """
    story.append(Paragraph(previous_responsibilities, normal_style))
    story.append(Spacer(1, 20))
    
    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    skills_text = """
    <b>Cloud Platforms:</b> Amazon Web Services (AWS), Google Cloud Platform (GCP)<br/>
    <b>Containerization:</b> Docker, Kubernetes, EKS, Helm<br/>
    <b>CI/CD Tools:</b> GitLab CI/CD, Jenkins, Maven<br/>
    <b>Monitoring:</b> CloudWatch, Prometheus, Grafana, Dynatrace<br/>
    <b>Infrastructure as Code:</b> Terraform<br/>
    <b>Security:</b> TLS/mTLS, Trivy, Co-sign<br/>
    <b>Operating Systems:</b> Linux, Windows
    """
    story.append(Paragraph(skills_text, normal_style))
    story.append(Spacer(1, 20))
    
    # Education
    story.append(Paragraph("EDUCATION", heading_style))
    story.append(Paragraph("<b>Bachelor of Science in Computer Science</b>", styles['Heading4']))
    story.append(Paragraph("Osmania University", normal_style))
    story.append(Spacer(1, 15))
    
    # Certifications
    story.append(Paragraph("CERTIFICATIONS", heading_style))
    story.append(Paragraph("• Google Cloud Platform Associate Cloud Engineer", normal_style))
    
    # Build the PDF
    doc.build(story)
    buffer.seek(0)
    return buffer

# API Routes
@api_router.get("/")
async def root():
    return {"message": "Nikhil Kumar Bandi - Portfolio API", "status": "active"}

@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact_form(contact_data: ContactMessageCreate, request: Request):
    """Submit contact form"""
    try:
        contact_message = ContactMessage(**contact_data.dict())
        
        # Save to database
        await db.contact_messages.insert_one(contact_message.dict())
        
        # Track the contact submission
        view = PortfolioView(
            ip_address=request.client.host,
            user_agent=request.headers.get('user-agent'),
            page_viewed="contact_form"
        )
        await db.portfolio_views.insert_one(view.dict())
        
        return contact_message
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error submitting contact form: {str(e)}")

@api_router.get("/contact-messages", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (for admin use)"""
    try:
        messages = await db.contact_messages.find().sort("created_at", -1).to_list(100)
        return [ContactMessage(**message) for message in messages]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching messages: {str(e)}")

@api_router.get("/download-resume")
async def download_resume(request: Request):
    """Download resume as PDF"""
    try:
        # Track the download
        download_record = ResumeDownload(
            ip_address=request.client.host,
            user_agent=request.headers.get('user-agent'),
            download_type="pdf"
        )
        await db.resume_downloads.insert_one(download_record.dict())
        
        # Generate PDF
        pdf_buffer = generate_resume_pdf()
        
        # Return as file response
        return Response(
            content=pdf_buffer.getvalue(),
            media_type="application/pdf",
            headers={
                "Content-Disposition": "attachment; filename=Nikhil_Kumar_Bandi_Resume.pdf"
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating resume: {str(e)}")

@api_router.post("/track-view")
async def track_portfolio_view(request: Request):
    """Track portfolio page views"""
    try:
        view = PortfolioView(
            ip_address=request.client.host,
            user_agent=request.headers.get('user-agent'),
            page_viewed="portfolio"
        )
        await db.portfolio_views.insert_one(view.dict())
        return {"status": "tracked"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error tracking view: {str(e)}")

@api_router.get("/analytics")
async def get_analytics():
    """Get basic analytics"""
    try:
        total_views = await db.portfolio_views.count_documents({})
        total_downloads = await db.resume_downloads.count_documents({})
        total_contacts = await db.contact_messages.count_documents({})
        
        return {
            "total_views": total_views,
            "total_downloads": total_downloads,
            "total_contacts": total_contacts
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching analytics: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)