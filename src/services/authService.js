import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

export class AuthService {
  // Register new user
  static async registerUser(userData) {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        userData.officialEmail, 
        userData.password || 'defaultPassword123' // You might want to add password field to form
      );
      
      const user = userCredential.user;

      // Update user profile with display name
      await updateProfile(user, {
        displayName: userData.name
      });

      // Store additional user data in Firestore
      const userDoc = {
        uid: user.uid,
        name: userData.name,
        officialEmail: userData.officialEmail,
        personalEmail: userData.personalEmail,
        officialPhone: userData.officialPhone,
        personalPhone: userData.personalPhone,
        companyName: userData.companyName,
        location: userData.location,
        department: userData.department,
        gstNumber: userData.gstNumber,
        pinCode: userData.pinCode,
        companyAddress: userData.companyAddress,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'users', user.uid), userDoc);

      return {
        success: true,
        user: user,
        userData: userDoc
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Login user
  static async loginUser(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.exists() ? userDoc.data() : null;

      return {
        success: true,
        user: user,
        userData: userData
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Logout user
  static async logoutUser() {
    try {
      await signOut(auth);
      return {
        success: true
      };
    } catch (error) {
      console.error('Logout error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Reset password
  static async resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return {
        success: true
      };
    } catch (error) {
      console.error('Password reset error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get current user data
  static async getCurrentUserData() {
    try {
      const user = auth.currentUser;
      if (!user) {
        return {
          success: false,
          error: 'No user logged in'
        };
      }

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.exists() ? userDoc.data() : null;

      return {
        success: true,
        user: user,
        userData: userData
      };
    } catch (error) {
      console.error('Get user data error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
} 