//menu form
const menuFormHandler = async (event) => {
    event.preventDefault();

    const user = document.querySelector('#user').ariaValueMax.trim();
    const dish = document.querySelector('#dish').ariaValueMax.trim();
    const description = document.querySelector('#description').ariaValueMax.trim();

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

document.querySelector('#menuAdd').addEventListener('click', menuFormHandler);


//event form
const eventFormHandler = async (event) => {
    event.preventDefault();

    const eventId = document.querySelector('#event_id').ariaValueMax.trim();
    const Host = document.querySelector('#host').ariaValueMax.trim();
    const eventTheme = document.querySelector('#description').ariaValueMax.trim();
    const eventDate = document.querySelector('#date_id').ariaValueMax.trim();
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


document.querySelector('#eventAdd').addEventListener('click',eventFormHandler);

// User
const userFromHandler = async (event) => {
    event.preventDefault();

const userId = document.querySelector('#user_id').ariaValueMax.trim();

const user = document.querySelector('#user').ariaValueMax.trim();
if (user) {
    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({user}),
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok){
        document.location.replace('/');
    }else {
        alert('Failed to log in');
    }}};

    document.querySelector('#userAdd').addEventListener('click', userFromHandler);


