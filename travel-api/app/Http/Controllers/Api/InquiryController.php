<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use App\Mail\NewInquiry;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class InquiryController extends Controller
{
    /**
     * Display a listing of inquiries.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Inquiry::query();

        // Filter by status
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // Filter by inquiry type
        if ($request->has('type')) {
            $query->where('inquiry_type', $request->type);
        }

        // Filter by date range
        if ($request->has('from_date')) {
            $query->whereDate('created_at', '>=', $request->from_date);
        }
        if ($request->has('to_date')) {
            $query->whereDate('created_at', '<=', $request->to_date);
        }

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('destination', 'like', "%{$search}%");
            });
        }

        $inquiries = $query->orderBy('created_at', 'desc')->paginate(20);

        return response()->json($inquiries);
    }

    /**
     * Store a newly created inquiry.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'destination' => 'nullable|string|max:255',
            'inquiry_type' => 'nullable|string|in:tour,visa,other',
            'travel_date' => 'nullable|date',
            'travelers' => 'nullable|integer|min:1|max:100',
            'message' => 'nullable|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $inquiry = Inquiry::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'destination' => $request->destination,
                'inquiry_type' => $request->inquiry_type ?? 'tour',
                'travel_date' => $request->travel_date,
                'travelers' => $request->travelers ?? 1,
                'message' => $request->message,
                'status' => 'new',
            ]);

            // Send email notification to admin
            try {
                Mail::to(config('mail.admin_email', env('ADMIN_EMAIL')))
                    ->send(new NewInquiry($inquiry));
            } catch (\Exception $e) {
                // Log email error but don't fail the request
                \Log::error('Failed to send inquiry email: ' . $e->getMessage());
            }

            return response()->json([
                'success' => true,
                'message' => 'Thank you! Your inquiry has been submitted successfully. We will contact you soon.',
                'data' => $inquiry,
            ], 201);

        } catch (\Exception $e) {
            \Log::error('Failed to create inquiry: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Sorry, something went wrong. Please try again later.',
            ], 500);
        }
    }

    /**
     * Display the specified inquiry.
     */
    public function show(string $id): JsonResponse
    {
        $inquiry = Inquiry::find($id);

        if (!$inquiry) {
            return response()->json([
                'success' => false,
                'message' => 'Inquiry not found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $inquiry,
        ]);
    }

    /**
     * Update inquiry status.
     */
    public function updateStatus(Request $request, string $id): JsonResponse
    {
        $inquiry = Inquiry::find($id);

        if (!$inquiry) {
            return response()->json([
                'success' => false,
                'message' => 'Inquiry not found',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'status' => 'required|string|in:new,contacted,follow_up,converted,closed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $inquiry->update(['status' => $request->status]);

        return response()->json([
            'success' => true,
            'message' => 'Status updated successfully',
            'data' => $inquiry,
        ]);
    }

    /**
     * Remove the specified inquiry.
     */
    public function destroy(string $id): JsonResponse
    {
        $inquiry = Inquiry::find($id);

        if (!$inquiry) {
            return response()->json([
                'success' => false,
                'message' => 'Inquiry not found',
            ], 404);
        }

        $inquiry->delete();

        return response()->json([
            'success' => true,
            'message' => 'Inquiry deleted successfully',
        ]);
    }
}
