# TravelEase - Travel Website

A complete travel website frontend with domestic tours, international tours, visa services, and Laravel backend integration.

---

## 📁 File Structure for Easy Editing

```
src/
├── config/
│   └── company.ts          # ⭐ MAIN CONFIG FILE - Edit company info here
├── data/
│   ├── domesticDestinations.ts    # Edit domestic tour packages
│   ├── internationalDestinations.ts # Edit international packages
│   └── visaServices.ts     # Edit visa services
├── services/
│   └── api.ts             # Backend API connection
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── InquiryModal.tsx
│   └── DestinationCard.tsx
└── pages/
    ├── HomePage.tsx
    ├── DomesticToursPage.tsx
    ├── InternationalToursPage.tsx
    ├── DestinationDetailPage.tsx
    ├── VisaServicesPage.tsx
    └── ContactPage.tsx
```

---

## 🔧 How to Change Company Information

### Edit `src/config/company.ts`:

```typescript
export const companyConfig = {
  // Company Name
  name: "Your Company Name",
  tagline: "Your Tagline Here",
  
  // Contact Information
  contact: {
    phone: "+91 12345 67890",
    email: "your@email.com",
    
    // WhatsApp - IMPORTANT!
    whatsapp: {
      number: "911234567890", // Country code + number (no + or spaces)
      defaultMessage: "Hi! I'm interested in your travel packages.",
    },
  },
  
  // Office Address
  address: {
    street: "Your Street Address",
    city: "Your City",
    state: "Your State",
    pincode: "123456",
    fullAddress: "Complete Address Here",
    googleMapsEmbed: "YOUR_GOOGLE_MAPS_EMBED_URL",
  },
  
  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    youtube: "https://youtube.com/yourchannel",
  },
  
  // Stats shown on homepage
  stats: {
    packages: "100+",
    destinations: "25+",
    happyClients: "5,000+",
    yearsExperience: "10+",
  },
  
  // API Configuration
  api: {
    baseUrl: "https://yourdomain.com/api/v1", // Your Laravel API URL
  },
};
```

---

## 📍 How to Edit Destinations & Itineraries

### Edit `src/data/domesticDestinations.ts` or `src/data/internationalDestinations.ts`:

```typescript
{
  id: "kashmir",              // Unique ID (used in URL)
  name: "Kashmir Paradise",   // Display name
  location: "Jammu & Kashmir, India",
  
  // Images - Replace with your own URLs
  image: "https://your-image-url.com/kashmir.jpg",
  gallery: [
    "https://your-image-url.com/kashmir-1.jpg",
    "https://your-image-url.com/kashmir-2.jpg",
  ],
  
  duration: "6 Days / 5 Nights",
  groupSize: "2-15 People",
  bestTime: "March - October",
  
  highlights: [
    "Shikara Ride on Dal Lake",
    "Gulmarg Gondola Ride",
    // Add more...
  ],
  
  overview: "Your detailed package description...",
  
  inclusions: [
    "Hotel accommodation",
    "Daily breakfast",
    // Add more...
  ],
  
  exclusions: [
    "Airfare",
    "Personal expenses",
    // Add more...
  ],
  
  // Day-wise Itinerary
  itinerary: [
    {
      day: 1,
      title: "Arrival Day",
      description: "Welcome to Kashmir...",
      activities: [
        "Airport pickup",
        "Hotel check-in",
        "Evening at leisure",
      ],
      meals: "Dinner",
      accommodation: "Hotel Name, Location"
    },
    // Add more days...
  ],
  
  type: "domestic"  // or "international"
}
```

---

## 🖼️ How to Change Images

### Option 1: Use Unsplash (Free)
```
https://images.unsplash.com/photo-ID?w=800
```

### Option 2: Use Your Own Images
1. Upload images to your server or CDN
2. Replace the URL in the data files:
```typescript
image: "https://yourdomain.com/images/kashmir-hero.jpg",
```

### Option 3: Use Local Images
1. Place images in `public/images/` folder
2. Reference them as:
```typescript
image: "/images/kashmir-hero.jpg",
```

---

## 📱 WhatsApp Integration

The WhatsApp button is already integrated. To customize:

### In `src/config/company.ts`:
```typescript
whatsapp: {
  number: "919876543210",  // Your WhatsApp number with country code
  defaultMessage: "Hi! I'm interested in your travel packages.",
}
```

### The floating WhatsApp button appears on all pages
### When clicking "WhatsApp Us" on destination pages, it sends:
```
"Hi! I'm interested in the 'Kashmir Paradise' package. Please share details."
```

---

## 🔗 Laravel Backend Integration

### Step 1: Create Laravel Project
```bash
composer create-project laravel/laravel travel-api
cd travel-api
```

### Step 2: Configure Database (`.env`)
```
DB_DATABASE=travel_website
DB_USERNAME=root
DB_PASSWORD=yourpassword
```

### Step 3: Create Migrations

**Create Inquiries Table:**
```bash
php artisan make:migration create_inquiries_table
```

```php
// database/migrations/xxxx_create_inquiries_table.php
Schema::create('inquiries', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email');
    $table->string('phone');
    $table->string('destination')->nullable();
    $table->enum('inquiry_type', ['tour', 'visa', 'general'])->default('tour');
    $table->date('travel_date')->nullable();
    $table->string('travelers')->nullable();
    $table->text('message')->nullable();
    $table->enum('status', ['new', 'contacted', 'converted', 'closed'])->default('new');
    $table->timestamps();
});
```

### Step 4: Create Model
```bash
php artisan make:model Inquiry
```

```php
// app/Models/Inquiry.php
class Inquiry extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'destination', 
        'inquiry_type', 'travel_date', 'travelers', 'message'
    ];
}
```

### Step 5: Create Controller
```bash
php artisan make:controller Api/InquiryController
```

```php
// app/Http/Controllers/Api/InquiryController.php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class InquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string',
            'destination' => 'nullable|string',
            'inquiry_type' => 'required|in:tour,visa,general',
            'travel_date' => 'nullable|date',
            'travelers' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        $inquiry = Inquiry::create($validated);

        // Send email notification
        $this->sendEmailNotification($inquiry);

        return response()->json([
            'success' => true,
            'message' => 'Inquiry submitted successfully!',
            'data' => ['id' => $inquiry->id]
        ], 201);
    }

    private function sendEmailNotification($inquiry)
    {
        // Send email to admin
        Mail::raw("
New Inquiry Received!

Name: {$inquiry->name}
Email: {$inquiry->email}
Phone: {$inquiry->phone}
Destination: {$inquiry->destination}
Type: {$inquiry->inquiry_type}
Travel Date: {$inquiry->travel_date}
Travelers: {$inquiry->travelers}
Message: {$inquiry->message}
        ", function ($message) use ($inquiry) {
            $message->to('your-email@company.com')
                    ->subject("New {$inquiry->inquiry_type} Inquiry - {$inquiry->destination}");
        });
    }
}
```

### Step 6: Add API Routes
```php
// routes/api.php
Route::prefix('v1')->group(function () {
    Route::post('/inquiries', [InquiryController::class, 'store']);
    Route::post('/contact', [ContactController::class, 'store']);
    Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
});
```

### Step 7: Configure CORS
```bash
php artisan make:middleware Cors
```

```php
// app/Http/Middleware/Cors.php
public function handle($request, Closure $next)
{
    return $next($request)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}
```

### Step 8: Configure Email (`.env`)
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

### Step 9: Update React API URL
In `src/config/company.ts`:
```typescript
api: {
  baseUrl: "https://yourdomain.com/api/v1",
}
```

---

## 📧 Email Notifications

When someone submits an inquiry, you'll receive an email with:
- Customer name, email, phone
- Destination they're interested in
- Inquiry type (Tour/Visa/General)
- Travel date and number of travelers
- Their message

---

## 🚀 Deployment

### Frontend (This React App)
1. Build the project: `npm run build`
2. Upload `dist/` folder to your hosting
3. Configure your web server to serve `index.html` for all routes

### Backend (Laravel)
1. Upload Laravel project to server
2. Configure `.env` with production database and email settings
3. Run migrations: `php artisan migrate`
4. Set permissions: `chmod -R 775 storage bootstrap/cache`

---

## 📞 Support

For any questions or customizations, contact us at:
- Email: support@yourcompany.com
- WhatsApp: +91 98765 43210
