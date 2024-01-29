document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('email-form');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const thankyouNote = document.getElementById('thankyouNote');

    emailForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Perform any additional validation if needed

        // Add the clicked class for animation
        subscribeBtn.classList.add('clicked');

        // Show thank you note with a delay
        setTimeout(function () {
            thankyouNote.classList.add('show');
        }, 500); // Show after 0.5 seconds

        // Reset the form after a delay
        setTimeout(function () {
            emailForm.reset();
            thankyouNote.classList.remove('show');
            subscribeBtn.classList.remove('clicked');
        }, 3000); // Reset after 3 seconds
    });
});
