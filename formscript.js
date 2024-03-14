document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Store form data in localStorage
        localStorage.setItem('name', form.elements.name.value);
        localStorage.setItem('email', form.elements.email.value);
        localStorage.setItem('career', form.elements.career.value);
        localStorage.setItem('industry', form.elements.industry.value);
        localStorage.setItem('message', form.elements.message.value);
        localStorage.setItem('how', form.elements.how.value);
        localStorage.setItem('subscribe', form.elements.subscribe.checked ? 'yes' : 'no');

        alert('Form data has been saved locally.');
    });

    form.addEventListener('reset', function() {
        // Clear all stored data when reset button pressed
        localStorage.clear();
    });

    // Load any existing form data from localStorage
    form.elements.name.value = localStorage.getItem('name') || '';
    form.elements.email.value = localStorage.getItem('email') || '';
    form.elements.career.value = localStorage.getItem('career') || '';
    form.elements.industry.value = localStorage.getItem('industry') || '';
    form.elements.message.value = localStorage.getItem('message') || '';
    form.elements.how.value = localStorage.getItem('how') || '';
    form.elements.subscribe.checked = localStorage.getItem('subscribe') === 'yes';
});
