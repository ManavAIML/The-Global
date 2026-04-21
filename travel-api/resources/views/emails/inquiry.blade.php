<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Tour Inquiry</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #0891b2, #0e7490);
            color: white;
            padding: 20px;
            border-radius: 10px 10px 0 0;
            margin: -30px -30px 30px -30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .badge {
            display: inline-block;
            background-color: #fbbf24;
            color: #1f2937;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-top: 10px;
        }
        .info-section {
            margin-bottom: 25px;
        }
        .info-section h2 {
            color: #0891b2;
            font-size: 16px;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
        }
        .info-row {
            display: flex;
            margin-bottom: 12px;
        }
        .info-label {
            font-weight: bold;
            color: #6b7280;
            width: 140px;
            flex-shrink: 0;
        }
        .info-value {
            color: #1f2937;
        }
        .message-box {
            background-color: #f9fafb;
            border-left: 4px solid #0891b2;
            padding: 15px;
            margin-top: 10px;
            border-radius: 0 5px 5px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
        .action-btn {
            display: inline-block;
            background-color: #0891b2;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            font-weight: bold;
        }
        .action-btn:hover {
            background-color: #0e7490;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌴 New Tour Inquiry</h1>
            <span class="badge">{{ strtoupper($inquiry->inquiry_type ?? 'TOUR') }}</span>
        </div>

        <div class="info-section">
            <h2>👤 Customer Information</h2>
            <div class="info-row">
                <span class="info-label">Name:</span>
                <span class="info-value">{{ $inquiry->name }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">
                    <a href="mailto:{{ $inquiry->email }}">{{ $inquiry->email }}</a>
                </span>
            </div>
            @if($inquiry->phone)
            <div class="info-row">
                <span class="info-label">Phone:</span>
                <span class="info-value">
                    <a href="tel:{{ $inquiry->phone }}">{{ $inquiry->phone }}</a>
                </span>
            </div>
            @endif
        </div>

        <div class="info-section">
            <h2>✈️ Trip Details</h2>
            @if($inquiry->destination)
            <div class="info-row">
                <span class="info-label">Destination:</span>
                <span class="info-value"><strong>{{ $inquiry->destination }}</strong></span>
            </div>
            @endif
            @if($inquiry->travel_date)
            <div class="info-row">
                <span class="info-label">Travel Date:</span>
                <span class="info-value">{{ \Carbon\Carbon::parse($inquiry->travel_date)->format('F d, Y') }}</span>
            </div>
            @endif
            <div class="info-row">
                <span class="info-label">Travelers:</span>
                <span class="info-value">{{ $inquiry->travelers ?? 1 }} person(s)</span>
            </div>
        </div>

        @if($inquiry->message)
        <div class="info-section">
            <h2>💬 Message</h2>
            <div class="message-box">
                {{ $inquiry->message }}
            </div>
        </div>
        @endif

        <div style="text-align: center;">
            <a href="mailto:{{ $inquiry->email }}?subject=Re: Your {{ $inquiry->destination ?? 'Tour' }} Inquiry" class="action-btn">
                Reply to Customer
            </a>
        </div>

        <div class="footer">
            <p>This inquiry was submitted on {{ $inquiry->created_at->format('F d, Y \a\t h:i A') }}</p>
            <p>Travel Website Admin Panel</p>
        </div>
    </div>
</body>
</html>
