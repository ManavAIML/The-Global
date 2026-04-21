// ============================================
// API SERVICE - LARAVEL BACKEND CONNECTION
// ============================================
// This file handles all API calls to your Laravel backend
// ============================================

import { companyConfig } from '../config/company';

const API_BASE_URL = companyConfig.api.baseUrl;

// Types for API requests
export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  inquiry_type: 'tour' | 'visa' | 'general';
  travel_date?: string;
  travelers?: string;
  message?: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

// API Response types
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

// Helper function for API calls
async function apiCall<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: unknown
): Promise<ApiResponse<T>> {
  try {
    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Something went wrong',
        errors: result.errors,
      };
    }

    return {
      success: true,
      data: result.data || result,
      message: result.message,
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      message: 'Network error. Please try again.',
    };
  }
}

// ============================================
// INQUIRY APIS
// ============================================

/**
 * Submit a new inquiry (tour or visa)
 */
export async function submitInquiry(data: InquiryData): Promise<ApiResponse<{ id: number }>> {
  return apiCall('/inquiries', 'POST', data);
}

/**
 * Submit contact form
 */
export async function submitContact(data: ContactData): Promise<ApiResponse<{ id: number }>> {
  return apiCall('/contact', 'POST', data);
}

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter(data: NewsletterData): Promise<ApiResponse<void>> {
  return apiCall('/newsletter/subscribe', 'POST', data);
}

// ============================================
// DESTINATIONS APIS (Optional - if loading from backend)
// ============================================

/**
 * Get all destinations
 */
export async function getDestinations(): Promise<ApiResponse<unknown[]>> {
  return apiCall('/destinations', 'GET');
}

/**
 * Get domestic destinations
 */
export async function getDomesticDestinations(): Promise<ApiResponse<unknown[]>> {
  return apiCall('/destinations?type=domestic', 'GET');
}

/**
 * Get international destinations
 */
export async function getInternationalDestinations(): Promise<ApiResponse<unknown[]>> {
  return apiCall('/destinations?type=international', 'GET');
}

/**
 * Get single destination by ID/slug
 */
export async function getDestination(id: string): Promise<ApiResponse<unknown>> {
  return apiCall(`/destinations/${id}`, 'GET');
}

// ============================================
// VISA SERVICES APIS (Optional - if loading from backend)
// ============================================

/**
 * Get all visa services
 */
export async function getVisaServices(): Promise<ApiResponse<unknown[]>> {
  return apiCall('/visa-services', 'GET');
}

/**
 * Get single visa service by ID
 */
export async function getVisaService(id: string): Promise<ApiResponse<unknown>> {
  return apiCall(`/visa-services/${id}`, 'GET');
}

// ============================================
// EXAMPLE USAGE IN COMPONENTS
// ============================================
/*

// In your component:
import { submitInquiry, InquiryData } from '../services/api';

const handleSubmit = async (formData: InquiryData) => {
  setLoading(true);
  
  const response = await submitInquiry(formData);
  
  if (response.success) {
    alert('Inquiry submitted successfully!');
    // Optionally redirect or clear form
  } else {
    alert(response.message || 'Failed to submit inquiry');
    // Handle validation errors
    if (response.errors) {
      // response.errors is an object like { email: ['Email is required'], ... }
    }
  }
  
  setLoading(false);
};

*/
