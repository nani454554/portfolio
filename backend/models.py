from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Contact form model
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_read: bool = False

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    subject: str
    message: str

# Portfolio view tracking
class PortfolioView(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    ip_address: str
    user_agent: Optional[str] = None
    visited_at: datetime = Field(default_factory=datetime.utcnow)
    page_viewed: str = "portfolio"

# Resume download tracking
class ResumeDownload(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    ip_address: str
    user_agent: Optional[str] = None
    downloaded_at: datetime = Field(default_factory=datetime.utcnow)
    download_type: str = "pdf"  # pdf, doc, etc.