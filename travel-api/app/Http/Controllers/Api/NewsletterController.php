<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Newsletter;
use App\Mail\NewNewsletter;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    /**
     * Display a listing of subscribers.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Newsletter::query();

        // Filter by active status
        if ($request->has('active')) {
            $query->where('is_active', $request->boolean('active'));
        }

        // Search
        if ($request->has('search')) {
            $query->where('email', 'ilike', "%{$request->search}%");
        }

        $subscribers = $query->orderBy('created_at', 'desc')->paginate(50);

        return response()->json($subscribers);
    }

    /**
     * Store a new subscriber.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please enter a valid email address',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            // Check if already subscribed
            $existing = Newsletter::where('email', $request->email)->first();

            if ($existing) {
                if ($existing->is_active) {
                    return response()->json([
                        'success' => false,
                        'message' => 'This email is already subscribed to our newsletter.',
                    ], 409);
                } else {
                    // Reactivate subscription
                    $existing->update([
                        'is_active' => true,
                        'subscribed_at' => now(),
                    ]);

                    return response()->json([
                        'success' => true,
                        'message' => 'Welcome back! Your subscription has been reactivated.',
                        'data' => $existing,
                    ]);
                }
            }

            $subscriber = Newsletter::create([
                'email' => $request->email,
                'is_active' => true,
                'subscribed_at' => now(),
            ]);

            // Send notification to admin
            try {
                Mail::to(config('mail.admin_email', env('ADMIN_EMAIL')))
                    ->send(new NewNewsletter($subscriber));
            } catch (\Exception $e) {
                \Log::error('Failed to send newsletter notification: ' . $e->getMessage());
            }

            return response()->json([
                'success' => true,
                'message' => 'Thank you for subscribing! You will receive our latest travel deals and updates.',
                'data' => $subscriber,
            ], 201);

        } catch (\Exception $e) {
            \Log::error('Failed to create newsletter subscription: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Sorry, something went wrong. Please try again later.',
            ], 500);
        }
    }

    /**
     * Unsubscribe (soft delete by setting is_active to false).
     */
    public function destroy(string $id): JsonResponse
    {
        $subscriber = Newsletter::find($id);

        if (!$subscriber) {
            return response()->json([
                'success' => false,
                'message' => 'Subscriber not found',
            ], 404);
        }

        $subscriber->update(['is_active' => false]);

        return response()->json([
            'success' => true,
            'message' => 'Successfully unsubscribed',
        ]);
    }

    /**
     * Unsubscribe by email (for unsubscribe links).
     */
    public function unsubscribeByEmail(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email address',
            ], 422);
        }

        $subscriber = Newsletter::where('email', $request->email)->first();

        if (!$subscriber) {
            return response()->json([
                'success' => false,
                'message' => 'Email not found in our mailing list',
            ], 404);
        }

        $subscriber->update(['is_active' => false]);

        return response()->json([
            'success' => true,
            'message' => 'You have been successfully unsubscribed',
        ]);
    }
}
