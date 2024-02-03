const menu = document.querySelector('.menu');
const barMenu = document.querySelector('.bar-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

barMenu.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);

function displayMenu(){
    if(menu.classList.contains('tampil')) {
       menu.classList.remove('tampil');
       iconBars.style.display='inline';
       iconClose.style.display='none';
    } else {
       menu.classList.add('tampil');
       iconBars.style.display='none';
       iconClose.style.display='inline';
    }
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate data submission to server (you should replace this with actual server submission)
    setTimeout(function() {
        // Show toast
        var toast = document.getElementById('toast');
        toast.classList.add('show');

        // Hide toast after 3 seconds
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }, 1000); // Simulated delay to mimic server request
});
