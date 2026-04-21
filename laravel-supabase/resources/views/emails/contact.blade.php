<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
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
            background: linear-gradient(135deg, #6366f1, #4f46e5);
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
        .info-section {
            margin-bottom: 25px;
        }
        .info-section h2 {
            color: #6366f1;
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
            width: 100px;
            flex-shrink: 0;
        }
        .info-value {
            color: #1f2937;
        }
        .message-box {
            background-color: #f9fafb;
            border-left: 4px solid #6366f1;
            padding: 15px;
            margin-top: 10px;
            border-radius: 0 5px 5px 0;
            white-space: pre-wrap;
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
            background-color: #6366f1;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Message</h1>
        </div>

        <div class="info-section">
            <h2>👤 Contact Information</h2>
            <div class="info-row">
                <span class="info-label">Name:</span>
                <span class="info-value">{{ $contact->name }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">
                    <a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a>
                </span>
            </div>
            @if($contact->phone)
            <div class="info-row">
                <span class="info-label">Phone:</span>
                <span class="info-value">
                    <a href="tel:{{ $contact->phone }}">{{ $contact->phone }}</a>
                </span>
            </div>
            @endif
        </div>

        <div class="info-section">
            <h2>📝 Subject</h2>
            <p style="font-size: 16px; color: #1f2937; margin: 0;">
                <strong>{{ $contact->subject ?? 'General Inquiry' }}</strong>
            </p>
        </div>

        <div class="info-section">
            <h2>💬 Message</h2>
            <div class="message-box">{{ $contact->message }}</div>
        </div>

        <div style="text-align: center;">
            <a href="mailto:{{ $contact->email }}?subject=Re: {{ $contact->subject ?? 'Your Inquiry' }}" class="action-btn">
                Reply to {{ $contact->name }}
            </a>
        </div>

        <div class="footer">
            <p>Received on {{ $contact->created_at->format('F d, Y \a\t h:i A') }}</p>
            <p>Travel Website Contact Form</p>
        </div>
    </div>
</body>
</html>
