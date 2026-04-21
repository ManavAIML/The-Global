# Laravel Backend Integration Guide

This guide explains how to connect the TravelEase React frontend with a Laravel backend.

## 1. Laravel Project Setup

```bash
# Create new Laravel project
composer create-project laravel/laravel travelease-backend

# Install required packages
composer require laravel/sanctum
composer require fruitcake/laravel-cors

cd travelease-backend
php artisan install:api
```

## 2. Database Migrations

### Create migrations:

```bash
php artisan make:migration create_destinations_table
php artisan make:migration create_inquiries_table
php artisan make:migration create_visa_services_table
```

### destinations migration:
```php
// database/migrations/xxxx_create_destinations_table.php
public function up()
{
    Schema::create('destinations', function (Blueprint $table) {
        $table->id();
        $table->string('slug')->unique();
        $table->string('name');
        $table->string('location');
        $table->string('image');
        $table->string('duration');
        $table->enum('type', ['domestic', 'international']);
        $table->json('highlights');
        $table->text('overview');
        $table->json('inclusions');
        $table->json('exclusions');
        $table->json('itinerary');
        $table->string('best_time');
        $table->string('group_size');
        $table->boolean('is_active')->default(true);
        $table->integer('sort_order')->default(0);
        $table->timestamps();
    });
}
```

### inquiries migration:
```php
// database/migrations/xxxx_create_inquiries_table.php
public function up()
{
    Schema::create('inquiries', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email');
        $table->string('phone');
        $table->string('destination'); // Important: stores the destination name
        $table->enum('inquiry_type', ['tour', 'visa', 'other']);
        $table->date('travel_date')->nullable();
        $table->string('travelers')->nullable();
        $table->text('message')->nullable();
        $table->enum('status', ['new', 'contacted', 'converted', 'closed'])->default('new');
        $table->text('admin_notes')->nullable();
        $table->timestamps();
    });
}
```

### visa_services migration:
```php
// database/migrations/xxxx_create_visa_services_table.php
public function up()
{
    Schema::create('visa_services', function (Blueprint $table) {
        $table->id();
        $table->string('slug')->unique();
        $table->string('country');
        $table->string('flag');
        $table->string('processing_time');
        $table->string('validity');
        $table->string('visa_type');
        $table->string('fees')->nullable();
        $table->text('description');
        $table->json('documents_required');
        $table->boolean('is_active')->default(true);
        $table->integer('sort_order')->default(0);
        $table->timestamps();
    });
}
```

## 3. Models

### Destination Model:
```php
// app/Models/Destination.php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    protected $fillable = [
        'slug', 'name', 'location', 'image', 'duration', 'type',
        'highlights', 'overview', 'inclusions', 'exclusions',
        'itinerary', 'best_time', 'group_size', 'is_active', 'sort_order'
    ];

    protected $casts = [
        'highlights' => 'array',
        'inclusions' => 'array',
        'exclusions' => 'array',
        'itinerary' => 'array',
        'is_active' => 'boolean',
    ];

    public function scopeDomestic($query)
    {
        return $query->where('type', 'domestic');
    }

    public function scopeInternational($query)
    {
        return $query->where('type', 'international');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
```

### Inquiry Model:
```php
// app/Models/Inquiry.php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'destination', 'inquiry_type',
        'travel_date', 'travelers', 'message', 'status', 'admin_notes'
    ];

    protected $casts = [
        'travel_date' => 'date',
    ];
}
```

### VisaService Model:
```php
// app/Models/VisaService.php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisaService extends Model
{
    protected $fillable = [
        'slug', 'country', 'flag', 'processing_time', 'validity',
        'visa_type', 'fees', 'description', 'documents_required',
        'is_active', 'sort_order'
    ];

    protected $casts = [
        'documents_required' => 'array',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
```

## 4. API Controllers

### DestinationController:
```php
// app/Http/Controllers/Api/DestinationController.php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    public function index()
    {
        $destinations = Destination::active()
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $destinations
        ]);
    }

    public function domestic()
    {
        $destinations = Destination::active()
            ->domestic()
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $destinations
        ]);
    }

    public function international()
    {
        $destinations = Destination::active()
            ->international()
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $destinations
        ]);
    }

    public function show($slug)
    {
        $destination = Destination::where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $destination
        ]);
    }
}
```

### InquiryController:
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
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'destination' => 'required|string|max:255', // Captures the destination
            'inquiry_type' => 'required|in:tour,visa,other',
            'travel_date' => 'nullable|date',
            'travelers' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        $inquiry = Inquiry::create($validated);

        // Send email notification to admin
        // Mail::to('admin@travelease.com')->send(new NewInquiryMail($inquiry));

        // Send confirmation email to customer
        // Mail::to($inquiry->email)->send(new InquiryConfirmationMail($inquiry));

        return response()->json([
            'success' => true,
            'message' => 'Your inquiry has been submitted successfully. We will contact you shortly.',
            'data' => $inquiry
        ], 201);
    }
}
```

### VisaServiceController:
```php
// app/Http/Controllers/Api/VisaServiceController.php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\VisaService;

class VisaServiceController extends Controller
{
    public function index()
    {
        $visaServices = VisaService::active()
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $visaServices
        ]);
    }

    public function show($slug)
    {
        $visaService = VisaService::where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $visaService
        ]);
    }
}
```

## 5. API Routes

```php
// routes/api.php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\InquiryController;
use App\Http\Controllers\Api\VisaServiceController;

Route::prefix('v1')->group(function () {
    // Destinations
    Route::get('/destinations', [DestinationController::class, 'index']);
    Route::get('/destinations/domestic', [DestinationController::class, 'domestic']);
    Route::get('/destinations/international', [DestinationController::class, 'international']);
    Route::get('/destinations/{slug}', [DestinationController::class, 'show']);

    // Inquiries
    Route::post('/inquiries', [InquiryController::class, 'store']);

    // Visa Services
    Route::get('/visa-services', [VisaServiceController::class, 'index']);
    Route::get('/visa-services/{slug}', [VisaServiceController::class, 'show']);
});
```

## 6. CORS Configuration

```php
// config/cors.php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:5173',  // Vite dev server
        'http://localhost:3000',
        'https://your-production-domain.com'
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

## 7. React Frontend API Integration

### Create API service file:
```typescript
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

// Destinations
export const getDestinations = () => fetchApi('/destinations');
export const getDomesticDestinations = () => fetchApi('/destinations/domestic');
export const getInternationalDestinations = () => fetchApi('/destinations/international');
export const getDestination = (slug: string) => fetchApi(`/destinations/${slug}`);

// Inquiries
export const submitInquiry = (data: InquiryData) => 
  fetchApi('/inquiries', {
    method: 'POST',
    body: JSON.stringify(data),
  });

// Visa Services
export const getVisaServices = () => fetchApi('/visa-services');
export const getVisaService = (slug: string) => fetchApi(`/visa-services/${slug}`);

interface InquiryData {
  name: string;
  email: string;
  phone: string;
  destination: string;  // Required field
  inquiry_type: 'tour' | 'visa' | 'other';
  travel_date?: string;
  travelers?: string;
  message?: string;
}
```

### Update InquiryModal to use API:
```typescript
// In InquiryModal.tsx, update handleSubmit:
import { submitInquiry } from '../services/api';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await submitInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,  // Destination is now included
      inquiry_type: formData.inquiryType,
      travel_date: formData.travelDate,
      travelers: formData.travelers,
      message: formData.message,
    });

    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    alert('Failed to submit inquiry. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 8. Environment Variables

### Laravel (.env):
```env
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173

# Mail configuration for inquiry notifications
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
MAIL_FROM_ADDRESS=noreply@travelease.com
MAIL_FROM_NAME="TravelEase"
```

### React (.env):
```env
VITE_API_URL=http://localhost:8000/api/v1
```

## 9. Database Seeder (Sample Data)

```php
// database/seeders/DestinationSeeder.php
<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Seeder;

class DestinationSeeder extends Seeder
{
    public function run()
    {
        $destinations = [
            [
                'slug' => 'kashmir',
                'name' => 'Kashmir Paradise',
                'location' => 'Srinagar, Gulmarg, Pahalgam',
                'image' => 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800',
                'duration' => '6 Days / 5 Nights',
                'type' => 'domestic',
                'highlights' => ['Dal Lake Shikara Ride', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens'],
                'overview' => 'Experience the breathtaking beauty of Kashmir...',
                'inclusions' => ['Accommodation in 3-star/4-star hotels', 'Daily breakfast and dinner', ...],
                'exclusions' => ['Airfare/Train tickets', 'Lunch and personal expenses', ...],
                'itinerary' => [
                    [
                        'day' => 1,
                        'title' => 'Arrival in Srinagar',
                        'description' => 'Arrive at Srinagar Airport...',
                        'activities' => ['Airport pickup', 'Check-in to Houseboat', ...],
                        'meals' => ['Dinner'],
                        'accommodation' => 'Deluxe Houseboat on Dal Lake'
                    ],
                    // ... more days
                ],
                'best_time' => 'March to October',
                'group_size' => '2-15 People',
                'is_active' => true,
                'sort_order' => 1
            ],
            // Add more destinations...
        ];

        foreach ($destinations as $destination) {
            Destination::create($destination);
        }
    }
}
```

## 10. Running the Application

### Backend (Laravel):
```bash
cd travelease-backend
php artisan migrate
php artisan db:seed
php artisan serve
```

### Frontend (React):
```bash
cd travelease-frontend
npm install
npm run dev
```

## 11. Production Deployment

### Laravel:
1. Set up your production database
2. Update `.env` with production values
3. Run `php artisan config:cache`
4. Run `php artisan route:cache`
5. Set up queue worker for email notifications

### React:
1. Update `.env.production` with production API URL
2. Run `npm run build`
3. Deploy the `dist` folder to your hosting

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/destinations` | Get all active destinations |
| GET | `/api/v1/destinations/domestic` | Get domestic destinations only |
| GET | `/api/v1/destinations/international` | Get international destinations only |
| GET | `/api/v1/destinations/{slug}` | Get single destination details |
| POST | `/api/v1/inquiries` | Submit a new inquiry (includes destination field) |
| GET | `/api/v1/visa-services` | Get all visa services |
| GET | `/api/v1/visa-services/{slug}` | Get single visa service details |

## Inquiry Form Data Structure

When submitting an inquiry, the following data is sent:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "destination": "Kashmir Paradise",  // Now properly captured
  "inquiry_type": "tour",
  "travel_date": "2024-03-15",
  "travelers": "4",
  "message": "We want a customized package..."
}
```
