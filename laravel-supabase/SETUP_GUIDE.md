# Laravel + Supabase Integration Guide

## Complete Setup Guide for Travel Website Backend

This guide will help you set up Laravel backend connected to Supabase (PostgreSQL) database.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Supabase Setup](#step-1-supabase-setup)
3. [Laravel Setup](#step-2-laravel-setup)
4. [Copy Files](#step-3-copy-files)
5. [Configuration](#step-4-configuration)
6. [Email Setup](#step-5-email-setup)
7. [Testing](#step-6-testing)
8. [Frontend Connection](#step-7-frontend-connection)
9. [Deployment](#step-8-deployment)

---

## Prerequisites

- PHP 8.1 or higher
- Composer installed
- Node.js (for frontend)
- A Supabase account (free)
- Gmail account (for sending emails)

---

## Step 1: Supabase Setup

### 1.1 Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub or email

### 1.2 Create New Project

1. Click "New Project"
2. Enter project name: `travel-website`
3. Enter a strong database password (SAVE THIS!)
4. Select region closest to you
5. Click "Create new project"
6. Wait 2 minutes for setup

### 1.3 Create Database Tables

1. Go to **SQL Editor** in left sidebar
2. Click "New query"
3. Copy and paste the SQL from `supabase-setup.sql` file
4. Click "Run" (or press Ctrl+Enter)
5. You should see "Success. No rows returned"

### 1.4 Get Connection Details

1. Go to **Settings** (gear icon) → **Database**
2. Scroll to "Connection string" section
3. Copy these details:
   - **Host**: `db.xxxxxxxxxxxx.supabase.co`
   - **Database name**: `postgres`
   - **Port**: `5432`
   - **User**: `postgres`
   - **Password**: (the password you set earlier)

---

## Step 2: Laravel Setup

### 2.1 Create Laravel Project

Open terminal and run:

```bash
composer create-project laravel/laravel travel-api
cd travel-api
```

### 2.2 Install Required Packages

```bash
composer require guzzlehttp/guzzle
```

---

## Step 3: Copy Files

Copy all files from this `laravel-supabase` folder to your Laravel project:

### Files to Copy:

| From (this folder) | To (Laravel project) |
|-------------------|---------------------|
| `routes/api.php` | `routes/api.php` (replace) |
| `app/Models/*` | `app/Models/` |
| `app/Http/Controllers/Api/*` | `app/Http/Controllers/Api/` (create Api folder) |
| `app/Http/Middleware/Cors.php` | `app/Http/Middleware/` |
| `app/Mail/*` | `app/Mail/` (create Mail folder) |
| `database/migrations/*` | `database/migrations/` |
| `resources/views/emails/*` | `resources/views/emails/` (create emails folder) |

### Create Required Folders:

```bash
mkdir -p app/Http/Controllers/Api
mkdir -p app/Mail
mkdir -p resources/views/emails
```

---

## Step 4: Configuration

### 4.1 Update .env File

Open `.env` file in your Laravel project and update:

```env
APP_NAME="Travel Website API"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database - Supabase PostgreSQL
DB_CONNECTION=pgsql
DB_HOST=db.xxxxxxxxxxxx.supabase.co
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your-supabase-password

# Email Configuration (Gmail)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="Travel Website"

# Admin Email (receives notifications)
ADMIN_EMAIL=admin@yourcompany.com
ADMIN_NAME="Admin"
```

### 4.2 Register CORS Middleware

Open `app/Http/Kernel.php` and add the CORS middleware:

```php
protected $middleware = [
    // ... existing middleware
    \App\Http\Middleware\Cors::class,
];
```

### 4.3 Clear Config Cache

```bash
php artisan config:clear
php artisan cache:clear
```

---

## Step 5: Email Setup

### 5.1 Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security**
3. Enable **2-Step Verification** (if not enabled)
4. Go to **App passwords**
5. Select app: "Mail", Select device: "Other (Custom name)"
6. Enter name: "Laravel Travel Website"
7. Click **Generate**
8. Copy the 16-character password
9. Use this in `MAIL_PASSWORD` in .env

### 5.2 Test Email

```bash
php artisan tinker
```

Then type:
```php
Mail::raw('Test email', function($msg) { $msg->to('jibebi4984@paylaar.com')->subject('Test'); });
```

---

## Step 6: Testing

### 6.1 Start Laravel Server

```bash
php artisan serve
```

Server runs at: `http://localhost:8000`

### 6.2 Test API Endpoints

**Test Inquiry Submission:**
```bash
curl -X POST http://localhost:8000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 98765 43210",
    "destination": "Kashmir",
    "inquiry_type": "tour",
    "travel_date": "2024-03-15",
    "travelers": 4,
    "message": "We want to visit Kashmir"
  }'
```

**Test Contact Form:**
```bash
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+91 98765 43210",
    "subject": "General Inquiry",
    "message": "I have some questions"
  }'
```

**Test Newsletter:**
```bash
curl -X POST http://localhost:8000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "email": "subscriber@example.com"
  }'
```

### 6.3 Check Supabase Dashboard

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. You should see data in `inquiries`, `contacts`, `newsletter` tables

---

## Step 7: Frontend Connection

### 7.1 Update Frontend Config

Edit `static-site/js/config.js`:

```javascript
const CONFIG = {
    // ... other config
    
    api: {
        baseUrl: 'http://localhost:8000/api',  // Development
        // baseUrl: 'https://your-api-domain.com/api',  // Production
        endpoints: {
            inquiry: '/inquiries',
            contact: '/contact',
            newsletter: '/newsletter'
        }
    }
};
```

### 7.2 Test Forms

1. Open `static-site/index.html` in browser
2. Fill out inquiry form
3. Submit
4. Check:
   - Success message appears
   - Data in Supabase dashboard
   - Email received

---

## Step 8: Deployment

### Option A: Deploy to Railway (Free)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your Laravel repository
5. Add environment variables (same as .env)
6. Deploy!

### Option B: Deploy to Render (Free)

1. Go to [render.com](https://render.com)
2. Sign up
3. New → Web Service
4. Connect GitHub repo
5. Configure:
   - Build Command: `composer install --no-dev && php artisan config:cache`
   - Start Command: `php artisan serve --host=0.0.0.0 --port=$PORT`
6. Add environment variables
7. Deploy!

### Option C: Deploy to Shared Hosting

1. Upload Laravel files via FTP
2. Point domain to `public` folder
3. Update `.env` with production values
4. Run `php artisan migrate`

### Option D: Deploy to VPS (DigitalOcean, AWS, etc.)

```bash
# On server
git clone your-repo
cd travel-api
composer install --no-dev
cp .env.example .env
# Edit .env with production values
php artisan key:generate
php artisan migrate
php artisan config:cache
php artisan route:cache
```

---

## 🔧 API Reference

### Inquiries

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/inquiries` | Create new inquiry |
| GET | `/api/inquiries` | List all inquiries |
| GET | `/api/inquiries/{id}` | Get single inquiry |
| PUT | `/api/inquiries/{id}/status` | Update status |
| DELETE | `/api/inquiries/{id}` | Delete inquiry |

### Contacts

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contacts` | List all contacts |
| GET | `/api/contacts/{id}` | Get single contact |
| PUT | `/api/contacts/{id}/status` | Update status |
| DELETE | `/api/contacts/{id}` | Delete contact |

### Newsletter

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/newsletter` | Subscribe |
| GET | `/api/newsletter` | List subscribers |
| DELETE | `/api/newsletter/{id}` | Unsubscribe |

---

## 🔒 Security (Production)

### Add API Authentication (Optional)

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### Rate Limiting

Already configured in `routes/api.php` with `throttle:60,1`

### HTTPS

Always use HTTPS in production. Update `.env`:
```env
APP_URL=https://your-api-domain.com
```

---

## 📊 View Data in Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Click **Table Editor** in sidebar
4. View/edit data in:
   - `inquiries` - Tour inquiries
   - `contacts` - Contact form submissions
   - `newsletter` - Email subscribers

---

## 🆘 Troubleshooting

### Database Connection Error

- Check Supabase password is correct
- Ensure host is `db.xxxxx.supabase.co` (not just `xxxxx.supabase.co`)
- Try port `6543` if `5432` doesn't work

### CORS Error

- Ensure Cors middleware is registered in Kernel.php
- Check allowed origins in `app/Http/Middleware/Cors.php`

### Email Not Sending

- Verify Gmail App Password is correct
- Check spam folder
- Test with `php artisan tinker`

### 500 Server Error

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

---

## 📞 Support

If you need help:
1. Check Laravel logs: `storage/logs/laravel.log`
2. Check Supabase logs in Dashboard
3. Enable debug mode: `APP_DEBUG=true`

---

## ✅ Checklist

- [ ] Supabase project created
- [ ] Database tables created (run SQL)
- [ ] Laravel project created
- [ ] Files copied from this folder
- [ ] .env configured with Supabase credentials
- [ ] .env configured with email settings
- [ ] CORS middleware registered
- [ ] API tested with curl
- [ ] Data appears in Supabase dashboard
- [ ] Email notifications working
- [ ] Frontend connected
- [ ] Deployed to production

---

**Congratulations! Your Laravel + Supabase backend is ready!** 🎉
