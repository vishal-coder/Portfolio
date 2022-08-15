let nav = document.querySelector(".navbar");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
};

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector("#navbarNav");

navBar.forEach((element) => {
  element.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

async function handleSendMail(event) {
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const subject = document.getElementById("Subject").value;
  const message = document.getElementById("Message").value;
  const body = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const response = await fetch(
    "https://password-reset-guvi-zen.herokuapp.com/api/contactMail",
    // "http://localhost:4044/api/contactMail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();
  document.getElementById("contactForm").reset();
  alert(data.message);
}
