# TravelEase - Static Travel Website

A complete static travel website that works by simply opening the HTML files in a browser. No npm, no build, no server required!

## 📁 Files Structure

```
static-site/
├── index.html          # Homepage
├── domestic.html       # Domestic tours page
├── international.html  # International tours page
├── destination.html    # Tour details page (with itinerary)
├── visa.html           # Visa services page
├── contact.html        # Contact page
├── js/
│   ├── config.js       # ⭐ Company settings (EDIT THIS)
│   └── data.js         # ⭐ Destinations & itineraries (EDIT THIS)
└── README.md
```

## 🚀 How to Use

1. Download the `static-site` folder
2. Open `index.html` in any browser
3. That's it! The website is ready.

## ✏️ How to Customize

### 1. Change Company Details

Edit `js/config.js`:

```javascript
const CONFIG = {
    company: {
        name: "Your Company Name",     // Change company name
    },
    contact: {
        phone: "+91 99999 88888",      // Your phone number
        email: "your@email.com",        // Your email
        address: "Your Address Here",   // Your address
    },
    whatsapp: {
        number: "919999988888",         // Your WhatsApp (no +, no spaces)
    }
};
```

### 2. Change Images

Edit `js/data.js`:

```javascript
kashmir: {
    image: "https://your-image-url.jpg",  // Change image URL
    // ... other details
}
```

### 3. Edit Itineraries

Edit `js/data.js`:

```javascript
itinerary: [
    {
        day: 1,
        title: "Arrival Day",
        activities: [
            "Activity 1",
            "Activity 2"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel Name"
    },
    // Add more days...
]
```

### 4. Add New Destination

In `js/data.js`, add a new destination object:

```javascript
newdestination: {
    id: "newdestination",
    name: "New Destination Name",
    location: "Location",
    duration: "X Days / Y Nights",
    groupSize: "2-15 People",
    bestTime: "Month - Month",
    image: "https://image-url.jpg",
    highlights: ["Highlight 1", "Highlight 2"],
    overview: "Description text...",
    inclusions: ["Inclusion 1", "Inclusion 2"],
    exclusions: ["Exclusion 1", "Exclusion 2"],
    itinerary: [
        // Day-wise itinerary
    ]
}
```

## 📱 WhatsApp Integration

WhatsApp is already integrated. Just update the number in `js/config.js`:

```javascript
whatsapp: {
    number: "919876543210",  // Your number (no +, no spaces)
}
```

## 🔧 Backend Integration (Laravel)

### Step 1: Create Laravel API

```bash
composer create-project laravel/laravel travel-backend
cd travel-backend
```

### Step 2: Create Migration

```php
// database/migrations/xxxx_create_inquiries_table.php
Schema::create('inquiries', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('phone');
    $table->string('email');
    $table->string('destination')->nullable();
    $table->string('inquiry_type')->default('tour');
    $table->date('travel_date')->nullable();
    $table->string('travelers')->nullable();
    $table->text('message')->nullable();
    $table->string('status')->default('pending');
    $table->timestamps();
});
```

### Step 3: Create Controller

```php
// app/Http/Controllers/InquiryController.php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string',
        'phone' => 'required|string',
        'email' => 'required|email',
        'destination' => 'nullable|string',
        'inquiry_type' => 'nullable|string',
        'travel_date' => 'nullable|date',
        'travelers' => 'nullable|string',
        'message' => 'nullable|string',
    ]);

    $inquiry = Inquiry::create($validated);

    // Send email notification
    Mail::to('your@email.com')->send(new NewInquiryMail($inquiry));

    return response()->json([
        'success' => true,
        'message' => 'Inquiry submitted successfully'
    ]);
}
```

### Step 4: API Routes

```php
// routes/api.php
Route::post('/inquiries', [InquiryController::class, 'store']);
```

### Step 5: Update Frontend

In `js/config.js`, update the API URL:

```javascript
api: {
    baseUrl: "https://your-domain.com/api",
}
```

### Step 6: Enable Form Submission

Add this to your form handling:

```javascript
fetch(CONFIG.api.baseUrl + '/inquiries', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('Inquiry submitted successfully!');
})
.catch(error => {
    console.error('Error:', error);
});
```

## 📧 Alternative: Using Formspree (No Backend Required)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Update form action in HTML:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🎨 Customizing Colors

The website uses Tailwind CSS via CDN. To change colors, modify the `tailwind.config` in each HTML file:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                teal: {
                    500: '#14b8a6',  // Your primary color
                    600: '#0d9488',
                }
            }
        }
    }
}
```

## 📝 Features

- ✅ Separate pages for Domestic & International tours
- ✅ Detailed day-wise itineraries
- ✅ Destination name included in inquiry form
- ✅ WhatsApp integration
- ✅ Visa services with document requirements
- ✅ Mobile responsive design
- ✅ No build process required
- ✅ Easy to customize

## 🆘 Support

If you need help, contact the developer or customize the website as per your needs.

---

Made with ❤️ for travel businesses
