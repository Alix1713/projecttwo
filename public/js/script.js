const { values } = require("sequelize/types/lib/operators");

//menu form
const menuFormHandler = async (event) => {
  event.preventDefault();

  const user = document.getElementById("user");
  const dish = document.getElementById("dish");
  const description = document.getElementById("description");
  if (user && dish && description) {
    const response = await fetch("/api/menu", {
      method: "POST",
      body: JSON.stringify({ user, dish, description }),
      header: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Alert failed");
    }
  };
}

document.getElementById("menuAdd").addEventListener("submit", menuFormHandler);

//event form
const eventFormHandler = async (event) => {
  event.preventDefault();

  const eventId = document.getElementById("event_id");
  const Host = document.getElementById("host");
  const eventTheme = document.getElementById("description");
  const eventDate = document.getElementById("date_id");
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

document.querySelector("eventAdd").addEventListener("click", eventFormHandler);

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

// document.querySelector("login").addEventListener("click", userFromHandler);

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
=======

    // if (response.ok) {
    //   document.location.replace("/");
    // } else {
    //   alert("Failed to log in");
    // }
  }
};

// document.getElementById('EventAdd').addEventListener("submit", eventFormHandler);

// User

// const userFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#email").trim();

//   const user = document.querySelector("#user").trim();
//   if (user && userId) {
//     const password = document.querySelector("#password").trim();
//     if (email && password) {
//       const response = await fetch("/api/user", {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: { "Content-Type": "application/json" },
//       });
//       if (response.ok) {
//         document.location.replace("/");
//       } else {
//         alert("Failed to log in");
//         console.log(user);
//         console.log(password);
//       }
//     }
//   }
// };

// // document.querySelector("#userAdd").addEventListener("click", userFormHandler);

// // document.querySelector("#login").addEventListener("click", userFromHandler);

