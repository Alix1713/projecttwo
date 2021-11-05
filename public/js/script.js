//menu form
const menuFormHandler = async (event) => {
    event.preventDefault();

    const user = document.querySelector('#user').trim();
    const dish = document.querySelector('#dish').trim();
    const description = document.querySelector('#description').trim();

    if (user && dish && description) {
        const response = await fetch('/api/menu', {
            method: 'POST',
            body: JSON.stringify({ user, dish, description }),
            header: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

// document.querySelector('#menuAdd').addEventListener('click', menuFormHandler);


//event form
const eventFormHandler = async (event) => {
    event.preventDefault();

    const eventId = document.querySelector('#event_id').trim();
    const Host = document.querySelector('#host').trim();
    const eventTheme = document.querySelector('#description').trim();
    const eventDate = document.querySelector('#date_id').trim();
    if (eventId && Host && eventTheme && eventDate) {
        const response = await fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify({ eventId, Host, eventTheme, eventDate }),
            header: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};


// document.querySelector('#eventAdd').addEventListener('click', eventFormHandler);

// User
const userFormHandler = async (event) => {
    event.preventDefault();

    const userId = document.querySelector('#user_id').trim();

    const user = document.querySelector('#user').trim();
    if (user && userId) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

// document.querySelector('#userAdd').addEventListener('click', userFormHandler);

// Guest

const guestFormHandler = async (event) => {
    event.preventDefault();
    console.log('testing testing')
    const guest = document.querySelector('#user_id')
    console.log('testing to tsee if it works')
    // ariaValueMax.trim();

    const email = document.querySelector('#email').value
    console.log('testing for email')
    console.log(email)
    if (guest && email) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ guest }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log('testing'),
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

// document.querySelector('#GuestAdd').addEventListener('click', guestFormHandler);

var guestButton = document.getElementById('GuestAdd')
guestButton.addEventListener('click', guestFormHandler)
console.log('guest button')
console.log (guestButton)