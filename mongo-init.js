// MongoDB initialization script
db = db.getSiblingDB('portfolio_db');

// Create collections
db.createCollection('portfolio_views');
db.createCollection('resume_downloads');
db.createCollection('contact_messages');

// Create indexes for better performance
db.portfolio_views.createIndex({ "visited_at": 1 });
db.portfolio_views.createIndex({ "ip_address": 1 });

db.resume_downloads.createIndex({ "downloaded_at": 1 });
db.resume_downloads.createIndex({ "ip_address": 1 });

db.contact_messages.createIndex({ "created_at": 1 });
db.contact_messages.createIndex({ "email": 1 });
db.contact_messages.createIndex({ "is_read": 1 });

// Insert initial data (optional)
db.portfolio_views.insertOne({
  id: "init-view-001",
  ip_address: "127.0.0.1",
  user_agent: "MongoDB Init Script",
  visited_at: new Date(),
  page_viewed: "portfolio"
});

print('Portfolio database initialized successfully!');