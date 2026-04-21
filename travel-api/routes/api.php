<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\InquiryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\NewsletterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// ===========================================
// PUBLIC ROUTES (No authentication required)
// ===========================================

// Inquiries - Tour inquiries from website
Route::post('/inquiries', [InquiryController::class, 'store']);

// Contact - Contact form submissions
Route::post('/contact', [ContactController::class, 'store']);

// Newsletter - Email subscriptions
Route::post('/newsletter/subscribe', [NewsletterController::class, 'store']);

// ===========================================
// ADMIN ROUTES (Add authentication middleware for production)
// ===========================================

Route::prefix('admin')->group(function () {
    
    // Inquiries Management
    Route::get('/inquiries', [InquiryController::class, 'index']);
    Route::get('/inquiries/{id}', [InquiryController::class, 'show']);
    Route::put('/inquiries/{id}/status', [InquiryController::class, 'updateStatus']);
    Route::delete('/inquiries/{id}', [InquiryController::class, 'destroy']);
    
    // Contacts Management
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::get('/contacts/{id}', [ContactController::class, 'show']);
    Route::put('/contacts/{id}/status', [ContactController::class, 'updateStatus']);
    Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);
    
    // Newsletter Management
    Route::get('/newsletter', [NewsletterController::class, 'index']);
    Route::delete('/newsletter/{id}', [NewsletterController::class, 'destroy']);
    
    // Dashboard Stats
    Route::get('/stats', function () {
        return response()->json([
            'inquiries' => [
                'total' => \App\Models\Inquiry::count(),
                'new' => \App\Models\Inquiry::where('status', 'new')->count(),
                'contacted' => \App\Models\Inquiry::where('status', 'contacted')->count(),
                'converted' => \App\Models\Inquiry::where('status', 'converted')->count(),
            ],
            'contacts' => [
                'total' => \App\Models\Contact::count(),
                'new' => \App\Models\Contact::where('status', 'new')->count(),
            ],
            'newsletter' => [
                'total' => \App\Models\Newsletter::count(),
                'active' => \App\Models\Newsletter::where('is_active', true)->count(),
            ],
        ]);
    });
});

// Health check endpoint
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
});
