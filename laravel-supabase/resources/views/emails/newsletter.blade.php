<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Newsletter Subscriber</title>
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
            background: linear-gradient(135deg, #10b981, #059669);
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
        .content {
            text-align: center;
            padding: 20px 0;
        }
        .email-box {
            background-color: #f0fdf4;
            border: 2px solid #10b981;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        .email-box .label {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 5px;
        }
        .email-box .email {
            color: #1f2937;
            font-size: 20px;
            font-weight: bold;
        }
        .stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 30px;
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #10b981;
        }
        .stat-label {
            color: #6b7280;
            font-size: 12px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 New Newsletter Subscriber!</h1>
        </div>

        <div class="content">
            <p style="font-size: 16px; color: #6b7280;">
                Great news! Someone just subscribed to your newsletter.
            </p>

            <div class="email-box">
                <div class="label">New Subscriber Email</div>
                <div class="email">{{ $subscriber->email }}</div>
            </div>

            <p style="color: #6b7280; font-size: 14px;">
                Subscribed on {{ $subscriber->created_at->format('F d, Y \a\t h:i A') }}
            </p>
        </div>

        <div class="footer">
            <p>Keep growing your travel community! 🌍</p>
            <p>Travel Website Newsletter</p>
        </div>
    </div>
</body>
</html>
