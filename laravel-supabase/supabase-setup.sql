-- ===========================================
-- SUPABASE DATABASE SETUP
-- ===========================================
-- Run this SQL in Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste → Run
-- ===========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===========================================
-- INQUIRIES TABLE (Tour Inquiries)
-- ===========================================
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    destination VARCHAR(255),
    inquiry_type VARCHAR(50) DEFAULT 'tour',
    travel_date DATE,
    travelers INTEGER DEFAULT 1,
    message TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===========================================
-- CONTACTS TABLE (Contact Form)
-- ===========================================
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===========================================
-- NEWSLETTER TABLE (Subscribers)
-- ===========================================
CREATE TABLE IF NOT EXISTS newsletter (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===========================================
-- INDEXES FOR BETTER PERFORMANCE
-- ===========================================
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);

CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_is_active ON newsletter(is_active);

-- ===========================================
-- ROW LEVEL SECURITY (Optional but Recommended)
-- ===========================================
-- Enable RLS
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

-- Allow insert from anyone (for public forms)
CREATE POLICY "Allow public insert on inquiries" ON inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert on contacts" ON contacts
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert on newsletter" ON newsletter
    FOR INSERT WITH CHECK (true);

-- Allow select only for authenticated users (admin)
CREATE POLICY "Allow authenticated select on inquiries" ON inquiries
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated select on contacts" ON contacts
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated select on newsletter" ON newsletter
    FOR SELECT USING (auth.role() = 'authenticated');

-- ===========================================
-- UPDATED_AT TRIGGER
-- ===========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_inquiries_updated_at
    BEFORE UPDATE ON inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contacts_updated_at
    BEFORE UPDATE ON contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_newsletter_updated_at
    BEFORE UPDATE ON newsletter
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- SAMPLE DATA (Optional - for testing)
-- ===========================================
-- Uncomment below to insert sample data

/*
INSERT INTO inquiries (name, email, phone, destination, inquiry_type, travel_date, travelers, message)
VALUES 
    ('John Doe', 'john@example.com', '+91 98765 43210', 'Kashmir', 'tour', '2024-03-15', 4, 'We are a family of 4 looking to visit Kashmir.'),
    ('Jane Smith', 'jane@example.com', '+91 87654 32109', 'Kerala', 'tour', '2024-04-20', 2, 'Honeymoon trip to Kerala backwaters.');

INSERT INTO contacts (name, email, phone, subject, message)
VALUES 
    ('Mike Johnson', 'mike@example.com', '+91 76543 21098', 'Partnership Inquiry', 'We are a hotel chain and would like to partner.');

INSERT INTO newsletter (email)
VALUES 
    ('subscriber1@example.com'),
    ('subscriber2@example.com');
*/

-- ===========================================
-- DONE! Your tables are ready.
-- ===========================================
