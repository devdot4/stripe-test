document.addEventListener('DOMContentLoaded', function() {
  const learnMoreBtn = document.getElementById('learn-more-btn');
  learnMoreBtn.addEventListener('click', function() {
      alert('Thank you for your interest! We will add more content soon.');
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for reaching out! We will get back to you shortly.');
      contactForm.reset();
  });
});

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";  // Adjust the import path as needed

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
