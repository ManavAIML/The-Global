<?php

function testEndpoint($url, $data) {
    $options = [
        'http' => [
            'header'  => "Content-type: application/json\r\nAccept: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data),
            'ignore_errors' => true // To catch 400/500 errors gracefully
        ]
    ];
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    // Get the HTTP status code
    preg_match('{HTTP\/\S*\s(\d{3})}', $http_response_header[0], $match);
    $status = $match[1];
    
    echo "--- Testing: $url ---\n";
    echo "Status Code: $status\n";
    echo "Response: $result\n\n";
}

$baseUrl = 'http://127.0.0.1:8000/api/v1';

// 1. Test Inquiries Endpoint
testEndpoint("$baseUrl/inquiries", [
    'name' => 'Backend Test User',
    'email' => 'backend_test@example.com',
    'phone' => '1112223333',
    'destination' => 'Mars',
    'inquiry_type' => 'other',
    'travel_date' => '2026-12-25',
    'travelers' => 5,
    'message' => 'Testing inquiries endpoint directly'
]);

// 2. Test Contact Endpoint
testEndpoint("$baseUrl/contact", [
    'name' => 'Contact Test User',
    'email' => 'contact_test@example.com',
    'phone' => '4445556666',
    'subject' => 'General Question',
    'message' => 'Testing the contact endpoint directly'
]);

// 3. Test Newsletter Endpoint
testEndpoint("$baseUrl/newsletter/subscribe", [
    'email' => 'newsletter_test@example.com'
]);

echo "All backend endpoint tests completed.\n";
