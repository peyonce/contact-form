import { db, analytics } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const subjectValue = document.getElementById("subject").value;
    const messageValue = document.getElementById("message").value;

    try {
        await addDoc(collection(db, "contacts"), {
         name: nameValue,
         email: emailValue,
         subject: subjectValue,
         message: messageValue,
         date: new Date().toISOString()
        });
        console.log("Document written");

    } catch (err) {
        console.error("Error written document:", err);
        alert("Failed to send message. Try again");
    }
});
