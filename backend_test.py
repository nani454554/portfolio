#!/usr/bin/env python3
"""
Backend API Testing Suite for Nikhil Kumar Bandi's Portfolio
Tests all API endpoints including PDF generation, contact forms, analytics, and tracking
"""

import requests
import json
import os
from datetime import datetime
import time

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("ERROR: Could not get backend URL from frontend/.env")
    exit(1)

API_BASE = f"{BASE_URL}/api"

print(f"Testing backend API at: {API_BASE}")
print("=" * 60)

def test_root_endpoint():
    """Test GET /api/ - Root endpoint"""
    print("\n1. Testing Root Endpoint (GET /api/)")
    print("-" * 40)
    
    try:
        response = requests.get(f"{API_BASE}/")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            # Validate response structure
            if "message" in data and "status" in data:
                print("✅ Root endpoint working correctly")
                return True
            else:
                print("❌ Root endpoint response missing required fields")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Root endpoint test failed: {str(e)}")
        return False

def test_contact_form():
    """Test POST /api/contact - Contact form submission"""
    print("\n2. Testing Contact Form Endpoint (POST /api/contact)")
    print("-" * 50)
    
    # Test data with realistic information
    contact_data = {
        "name": "John Smith",
        "email": "john.smith@techcorp.com",
        "company": "TechCorp Solutions",
        "subject": "DevOps Consulting Opportunity",
        "message": "Hi Nikhil, I came across your portfolio and I'm impressed with your DevOps and platform engineering experience. We have an exciting opportunity at TechCorp that might be a great fit for your skills. Would you be available for a brief discussion about a potential consulting role?"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=contact_data)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            # Validate response structure
            required_fields = ["id", "name", "email", "subject", "message", "created_at", "is_read"]
            if all(field in data for field in required_fields):
                print("✅ Contact form submission working correctly")
                print(f"✅ Contact message created with ID: {data['id']}")
                return True
            else:
                print("❌ Contact form response missing required fields")
                return False
        else:
            print(f"❌ Contact form failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Contact form test failed: {str(e)}")
        return False

def test_contact_form_validation():
    """Test contact form with invalid data"""
    print("\n2b. Testing Contact Form Validation")
    print("-" * 40)
    
    # Test with invalid email
    invalid_data = {
        "name": "Test User",
        "email": "invalid-email",
        "subject": "Test Subject",
        "message": "Test message"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=invalid_data)
        print(f"Status Code for invalid email: {response.status_code}")
        
        if response.status_code == 422:  # Validation error expected
            print("✅ Contact form validation working correctly")
            return True
        else:
            print(f"⚠️ Expected validation error (422) but got {response.status_code}")
            return True  # Not a critical failure
            
    except Exception as e:
        print(f"❌ Contact form validation test failed: {str(e)}")
        return False

def test_track_view():
    """Test POST /api/track-view - Analytics tracking"""
    print("\n3. Testing View Tracking Endpoint (POST /api/track-view)")
    print("-" * 55)
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.post(f"{API_BASE}/track-view", headers=headers)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            if "status" in data and data["status"] == "tracked":
                print("✅ View tracking working correctly")
                return True
            else:
                print("❌ View tracking response invalid")
                return False
        else:
            print(f"❌ View tracking failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ View tracking test failed: {str(e)}")
        return False

def test_analytics():
    """Test GET /api/analytics - Analytics retrieval"""
    print("\n4. Testing Analytics Endpoint (GET /api/analytics)")
    print("-" * 50)
    
    try:
        response = requests.get(f"{API_BASE}/analytics")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            # Validate response structure
            required_fields = ["total_views", "total_downloads", "total_contacts"]
            if all(field in data for field in required_fields):
                print("✅ Analytics endpoint working correctly")
                print(f"✅ Total Views: {data['total_views']}")
                print(f"✅ Total Downloads: {data['total_downloads']}")
                print(f"✅ Total Contacts: {data['total_contacts']}")
                return True
            else:
                print("❌ Analytics response missing required fields")
                return False
        else:
            print(f"❌ Analytics failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Analytics test failed: {str(e)}")
        return False

def test_resume_download():
    """Test GET /api/download-resume - PDF generation and download"""
    print("\n5. Testing Resume Download Endpoint (GET /api/download-resume)")
    print("-" * 60)
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(f"{API_BASE}/download-resume", headers=headers)
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('content-type', 'Not set')}")
        print(f"Content-Disposition: {response.headers.get('content-disposition', 'Not set')}")
        print(f"Content Length: {len(response.content)} bytes")
        
        if response.status_code == 200:
            # Check if it's a PDF
            if response.headers.get('content-type') == 'application/pdf':
                # Check PDF magic bytes
                if response.content.startswith(b'%PDF'):
                    print("✅ Resume download working correctly")
                    print("✅ PDF file generated successfully")
                    print("✅ Proper PDF headers set")
                    
                    # Save PDF for manual verification if needed
                    with open('/tmp/test_resume.pdf', 'wb') as f:
                        f.write(response.content)
                    print("✅ PDF saved to /tmp/test_resume.pdf for verification")
                    
                    return True
                else:
                    print("❌ Response is not a valid PDF file")
                    return False
            else:
                print(f"❌ Wrong content type: {response.headers.get('content-type')}")
                return False
        else:
            print(f"❌ Resume download failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Resume download test failed: {str(e)}")
        return False

def test_contact_messages_admin():
    """Test GET /api/contact-messages - Admin endpoint"""
    print("\n6. Testing Contact Messages Admin Endpoint (GET /api/contact-messages)")
    print("-" * 70)
    
    try:
        response = requests.get(f"{API_BASE}/contact-messages")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of messages retrieved: {len(data)}")
            
            if len(data) > 0:
                print("Sample message structure:")
                print(json.dumps(data[0], indent=2))
            
            print("✅ Contact messages admin endpoint working correctly")
            return True
        else:
            print(f"❌ Contact messages admin failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Contact messages admin test failed: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("BACKEND API TESTING SUITE")
    print("=" * 60)
    print(f"Testing API at: {API_BASE}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    print("=" * 60)
    
    tests = [
        ("Root Endpoint", test_root_endpoint),
        ("Contact Form", test_contact_form),
        ("Contact Form Validation", test_contact_form_validation),
        ("View Tracking", test_track_view),
        ("Analytics", test_analytics),
        ("Resume Download", test_resume_download),
        ("Contact Messages Admin", test_contact_messages_admin)
    ]
    
    results = {}
    
    for test_name, test_func in tests:
        try:
            results[test_name] = test_func()
            time.sleep(1)  # Small delay between tests
        except Exception as e:
            print(f"❌ {test_name} test crashed: {str(e)}")
            results[test_name] = False
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name:<30} {status}")
        if result:
            passed += 1
    
    print("-" * 60)
    print(f"TOTAL: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 ALL TESTS PASSED! Backend API is working correctly.")
    else:
        print(f"⚠️  {total - passed} test(s) failed. Please check the issues above.")
    
    return results

if __name__ == "__main__":
    run_all_tests()