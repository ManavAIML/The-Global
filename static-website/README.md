# TravelEase - Static Travel Website

A complete static travel website that works by simply opening `index.html` in your browser. No build process required!

## 🚀 How to Run

1. Download/extract all files
2. Open `index.html` in any web browser
3. That's it! The website will work immediately

## 📁 File Structure

```
static-website/
├── index.html          # Home page
├── domestic.html       # Domestic tours page
├── international.html  # International tours page
├── destination.html    # Destination detail page (dynamic)
├── visa.html           # Visa services page
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styles (edit colors here)
├── js/
│   ├── config.js       # Company info, contact details, WhatsApp
│   ├── data.js         # Destinations and visa data
│   └── main.js         # Main functionality
└── README.md           # This file
```

---

## 🎨 HOW TO CUSTOMIZE

### 1. Change Company Information

Edit `js/config.js`:

```javascript
const CONFIG = {
    company: {
        name: "Your Company Name",        // Change this
        tagline: "Your Tagline",          // Change this
        description: "Your description",  // Change this
    },
    
    contact: {
        phone: "+91 99999 99999",         // Your phone
        phoneLink: "919999999999",        // WhatsApp number (no +, no spaces)
        email: "your@email.com",          // Your email
        address: "Your full address",     // Your address
        workingHours: "Mon-Sat: 10AM-6PM" // Your hours
    },
    
    social: {
        facebook: "https://facebook.com/yourpage",
        instagram: "https://instagram.com/yourpage",
        // ... other social links
    }
};
```

### 2. Change Colors

Edit `css/style.css` (at the top):

```css
:root {
    --primary-color: #0891b2;    /* Main color */
    --primary-dark: #0e7490;     /* Darker shade */
    --primary-light: #06b6d4;    /* Lighter shade */
    --secondary-color: #f59e0b;  /* Accent color */
    /* ... other colors */
}
```

### 3. Add/Edit Destinations

Edit `js/data.js`:

```javascript
const DESTINATIONS = {
    // Add a new destination
    "your-destination-id": {
        id: "your-destination-id",
        name: "Destination Name",
        type: "domestic",  // or "international"
        location: "City, Country",
        duration: "5 Days / 4 Nights",
        bestTime: "October - March",
        groupSize: "2-15 People",
        image: "https://your-image-url.jpg",
        highlights: [
            "Highlight 1",
            "Highlight 2",
            "Highlight 3"
        ],
        overview: "Detailed description of the tour...",
        itinerary: [
            {
                day: 1,
                title: "Day 1 Title",
                activities: [
                    "Activity 1",
                    "Activity 2"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Hotel Name"
            },
            // ... more days
        ],
        inclusions: [
            "Item 1",
            "Item 2"
        ],
        exclusions: [
            "Item 1",
            "Item 2"
        ]
    }
};
```

### 4. Change Images

Replace image URLs in `js/data.js`:

```javascript
image: "https://your-new-image-url.jpg",
```

**Recommended free image sources:**
- [Unsplash](https://unsplash.com) - High quality free images
- [Pexels](https://pexels.com) - Free stock photos

### 5. Add/Edit Visa Services

Edit `js/data.js`:

```javascript
const VISA_SERVICES = {
    countryid: {
        id: "countryid",
        country: "Country Name",
        flag: "🇮🇳",  // Emoji flag
        processingTime: "3-5 days",
        validity: "30 days",
        type: "Tourist Visa",
        documents: [
            "Document 1",
            "Document 2"
        ]
    }
};
```

---

## 📱 WhatsApp Integration

WhatsApp is already integrated. When users click inquiry buttons:
1. Form data is collected
2. User is asked if they want to chat on WhatsApp
3. Pre-filled message with inquiry details opens in WhatsApp

**To change WhatsApp number:**
Edit `js/config.js`:
```javascript
contact: {
    phoneLink: "919876543210",  // Your WhatsApp number (no + or spaces)
}
```

---

## 🔧 Laravel Backend Integration

When you're ready to connect to Laravel backend:

### Step 1: Create Laravel API

```bash
composer create-project laravel/laravel travel-api
cd travel-api
```

### Step 2: Create Migration

```php
// database/migrations/create_inquiries_table.php
Schema::create('inquiries', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email');
    $table->string('phone');
    $table->string('destination')->nullable();
    $table->string('inquiry_type')->default('tour');
    $table->date('travel_date')->nullable();
    $table->integer('travelers')->default(2);
    $table->text('message')->nullable();
    $table->string('status')->default('new');
    $table->timestamps();
});
```

### Step 3: Create Controller

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
            'inquiry_type' => 'nullable|string',
            'travel_date' => 'nullable|date',
            'travelers' => 'nullable|integer',
            'message' => 'nullable|string',
        ]);

        $inquiry = Inquiry::create($validated);

        // Send email notification
        Mail::raw(
            "New Inquiry Received!\n\n" .
            "Name: {$inquiry->name}\n" .
            "Email: {$inquiry->email}\n" .
            "Phone: {$inquiry->phone}\n" .
            "Destination: {$inquiry->destination}\n" .
            "Type: {$inquiry->inquiry_type}\n" .
            "Travel Date: {$inquiry->travel_date}\n" .
            "Travelers: {$inquiry->travelers}\n" .
            "Message: {$inquiry->message}",
            function ($mail) {
                $mail->to('admin@travelease.com')
                     ->subject('New Travel Inquiry');
            }
        );

        return response()->json([
            'success' => true,
            'message' => 'Inquiry submitted successfully',
            'data' => $inquiry
        ], 201);
    }
}
```

### Step 4: Add Route

```php
// routes/api.php
Route::post('/inquiries', [InquiryController::class, 'store']);
```

### Step 5: Configure CORS

```php
// config/cors.php
'allowed_origins' => ['*'], // Or your domain
```

### Step 6: Update Frontend

In `js/main.js`, uncomment the API call:

```javascript
const response = await fetch('http://your-api-url.com/api/inquiries', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

### Step 7: Configure Email in Laravel

Edit `.env`:
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="TravelEase"
```

---

## 📧 Email Without Backend (Using EmailJS)

If you don't want to set up a backend, use EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add to your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

4. Update form submission in `js/main.js`:

```javascript
emailjs.send("service_id", "template_id", {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    destination: formData.destination,
    message: formData.message
});
```

---

## 🌐 Hosting Options

### Free Hosting:
1. **GitHub Pages** - Free, easy setup
2. **Netlify** - Free, drag & drop
3. **Vercel** - Free, fast

### Paid Hosting:
1. **Hostinger** - Cheap, good support
2. **SiteGround** - Reliable
3. **AWS S3** - Scalable

### Steps for Netlify (Easiest):
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your `static-website` folder
3. Get your live URL instantly!

---

## 📞 Support

For any questions or customization help:
- Email: support@travelease.com
- WhatsApp: +91 98765 43210

---

## ✅ Features Included

- ✅ Separate Domestic & International pages
- ✅ Detailed day-wise itineraries
- ✅ Destination name in inquiry form
- ✅ Visa services with requirements
- ✅ WhatsApp integration
- ✅ Mobile responsive design
- ✅ Easy customization
- ✅ No build process needed
- ✅ SEO friendly
- ✅ Fast loading

---

Made with ❤️ for travelers
