// Button action
function joinNow() {
  document.getElementById("contact").scrollIntoView({ 
    behavior: "smooth" 
  });
}


// ==============================
// FORM SUBMISSION TO GOOGLE SHEET
// ==============================

const scriptURL = "https://script.google.com/macros/s/AKfycbxXe8xg3A0GwaspYZnkUSUxooRRGSupdb6tiBjIeWmgq9YwDpCGJhs7Jwn8fsNvaAQEzQ/exec";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const button = e.target.querySelector("button");
  button.innerText = "Sending...";

  const formData = {
    name: e.target[0].value,
    email: e.target[1].value,
    phone: e.target[2].value,
    message: e.target[3].value
  };

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(formData)
    });

    alert("Message sent successfully!");
    e.target.reset();

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }

  button.innerText = "Send Message";
});