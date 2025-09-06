const admin = require("firebase-admin");
const db = admin.firestore();

// Zod is a library for data validation, ensuring the incoming data is in the correct format.
const { z } = require("zod"); 

// Define a schema for user registration data.
const userRegistrationSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});


exports.registerUser = async (userData) => {
  // Validate the incoming data against the schema.
  const validationResult = userRegistrationSchema.safeParse(userData);
  if (!validationResult.success) {
    throw new Error("Invalid user registration data provided.");
  }
  const { username, email, password } = validationResult.data;

  try {
    // 1. Create the user in Firebase Authentication.
    const userRecord = await admin.auth().createUser({ email, password });
    
    // 2. Create the user's profile in the 'users' Firestore collection.
    // The document ID is the same as the user's Auth UID for easy lookup.
    await db.collection("users").doc(userRecord.uid).set({
      username,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      profileImageUrl: `https://placehold.co/100x100/65a30d/ffffff?text=${username.charAt(0)}`,
      bio: ""
    });

    return { 
      uid: userRecord.uid, 
      username, 
      email,
      message: "User registered successfully." 
    };
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error("Email is already in use.");
    }
    console.error("Error creating new user:", error);
    throw new Error("Failed to register user. Please try again.");
  }
};
