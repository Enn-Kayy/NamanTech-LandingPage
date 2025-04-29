function alertCTA() {
    alert("Thanks for showing interest! We’ll get back to you soon.");
  }
  
function toggleLoginButton() {
    const checkbox = document.getElementById("robotCheck");
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.disabled = !checkbox.checked;
  }
  