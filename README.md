# Ease API

A Node.js API with OTP-based authentication using mobile numbers.

## Features

- User registration and management
- OTP-based login via mobile number
- JWT authentication

## Installation

1. Clone the repository
2. Run `npm install`
3. Set up environment variables in `.env`:
   - `MONGODB_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret for JWT tokens
   - `PORT`: Server port (optional, defaults to 5000)
4. Run `node index.js`

## API Endpoints

### Authentication

#### Send OTP

- **POST** `/api/auth/send-otp`
- Body: `{ "mobile": "1234567890" }`
- Sends OTP to the mobile number

#### Verify OTP

- **POST** `/api/auth/verify-otp`
- Body: `{ "mobile": "1234567890", "otp": "123456" }`
- Verifies OTP and returns JWT token

### Users

#### Create User

- **POST** `/api/users`
- Body: `{ "name": "John Doe", "email": "john@example.com", "mobile": "1234567890" }`

#### Get All Users

- **GET** `/api/users`
- Requires Authorization header: `Bearer <token>`

## Usage

1. Send OTP to mobile: POST `/api/auth/send-otp` with mobile number
2. Check console for OTP (in production, integrate SMS service)
3. Verify OTP: POST `/api/auth/verify-otp` with mobile and OTP
4. Use returned token in Authorization header for protected routes

## Notes

- OTP is currently logged to console. Replace `sendOTP` function with actual SMS service (e.g., Twilio)
- Mobile numbers should be unique
- JWT tokens expire in 7 days
