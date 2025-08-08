# Firebase Authentication Setup Guide

## Step 1: Install Firebase
```bash
npm install firebase
```

## Step 2: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "shaft-seal-app")
4. Follow the setup wizard

## Step 3: Enable Authentication

1. In Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

## Step 4: Create Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Done"

## Step 5: Get Firebase Config

1. In Firebase Console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname
6. Copy the config object

## Step 6: Update Firebase Config

Replace the placeholder values in `src/firebase.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## Step 7: Set Firestore Rules (Optional)

In Firebase Console > Firestore Database > Rules, update the rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 8: Test the Application

1. Start your development server: `npm run dev`
2. Navigate to the login/register page
3. Try registering a new user
4. Try logging in with the registered user
5. Test password reset functionality

## Features Included:

✅ **User Registration** with all form fields including GST and PIN code
✅ **User Login** with email/password
✅ **Password Reset** via email
✅ **Form Validation** for all fields
✅ **Real-time Error Handling**
✅ **Loading States** and user feedback
✅ **Secure Password Requirements**
✅ **User Data Storage** in Firestore
✅ **Responsive Design**

## Security Features:

- Password must be at least 8 characters with uppercase, lowercase, and number
- Email validation for both official and personal emails
- Phone number validation (Indian format)
- GST number validation with proper format
- PIN code validation (6-digit format)
- Secure password storage (handled by Firebase)
- User data stored securely in Firestore

## Next Steps:

1. **Production Deployment**: Update Firestore rules for production
2. **Email Templates**: Customize password reset emails in Firebase Console
3. **User Management**: Add admin panel for user management
4. **Profile Updates**: Add user profile editing functionality
5. **Session Management**: Implement proper session handling
6. **Logout Functionality**: Add logout to navbar

## Troubleshooting:

- **"Firebase not initialized"**: Check your config values
- **"Permission denied"**: Update Firestore rules
- **"Email already in use"**: User already exists, try login instead
- **"Invalid email"**: Check email format validation
- **"Weak password"**: Ensure password meets requirements

## Alternative Options:

If you prefer not to use Firebase, you can also:

1. **Supabase** (Open source Firebase alternative)
2. **Auth0** (Enterprise authentication)
3. **Custom Backend** with Node.js + Express + MongoDB
4. **Local Storage** (for development only)

Let me know if you need help with any of these alternatives! 