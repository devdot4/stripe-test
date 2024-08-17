import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

// Modal handling
const signInModal = document.getElementById("modal-signin");
const signUpModal = document.getElementById("modal-signup");

document.getElementById("open-signup").onclick = function () {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
};

document.getElementById("open-signin").onclick = function () {
    signInModal.style.display = "block";
    signUpModal.style.display = "none";
};

// Authentication handling
document.getElementById('sign-in-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Signed in as: ${user.email}`);
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            alert(`Error: ${error.message}`);
        });
});

document.getElementById('sign-up-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Signed up as: ${user.email}`);
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            alert(`Error: ${error.message}`);
        });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`Currently signed in as: ${user.email}`);
    } else {
        console.log('No user signed in');
    }
});
