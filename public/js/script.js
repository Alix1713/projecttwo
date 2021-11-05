const { values } = require("sequelize/types/lib/operators");

//menu form
const menuFormHandler = async (event) => {
  event.preventDefault();

  const user = document.querySelector("#user").trim();
  const dish = document.querySelector("#dish").trim();
  const description = document
    .querySelector("#description")
    .ariaValueMax.trim();

  if (user && dish && description) {
    const response = await fetch("/api/menu", {
      method: "POST",
      body: JSON.stringify({ user, dish, description }),
      header: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

// document.querySelector("#menuAdd").addEventListener("click", menuFormHandler);

//event form
const eventFormHandler = async (event) => {
  event.preventDefault();

  const eventId = document.querySelector("#event_id").trim();
  const Host = document.querySelector("#host").trim();
  const eventTheme = document.querySelector("#description").trim();
  const eventDate = document.querySelector("#date_id").trim();
  if (eventId && Host && eventTheme && eventDate) {
    const response = await fetch("/api/event", {
      method: "POST",
      body: JSON.stringify({ eventId, Host, eventTheme, eventDate }),
      header: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document.querySelector("#eventAdd").addEventListener("click", eventFormHandler);

// User
const userFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').values.trim();
  const password = document.getElementById('password').values.trim();
  // const user = document.getElementById("user").trim();
  
  // if (user && userId) {
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to log in');
        console.log(user);
        console.log(password);
      }
    }
  // }
};

document.getElementById('.login-form').addEventListener('submit', userFormHandler);

// document.querySelector("#login").addEventListener("click", userFromHandler);

// Guest

const guestFormHandler = async (event) => {
  event.preventDefault();

  const guest = document.getElementById("user_id").values.trim();
  const email = document.getElementById("email").values.trim();
  
  if (guest && email) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ guest }),
      headers: { "Content-Type": "application/json" },
    });
    // 
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document.querySelector("#GuestAdd").addEventListener("click", guestFormHandler);
