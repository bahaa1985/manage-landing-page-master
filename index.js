const indicators = document.querySelectorAll('#indicators div');
console.log("indi",indicators);

const slides = [
    {
        avatar:'./images/avatar-anisha.png',
        name:'Anisha Li',
        desc:'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
        avatar:'./images/avatar-ali.png',
        name:'Ali Bravo',
        desc:'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    },
    {
        avatar:'./images/avatar-richard.png',
        name:'Richard Watts',
        desc:'“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
        avatar:'./images/avatar-shanai.png',
        name:'Shanai Gough',
        desc:'“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
    }
]

let currentSlide = 0;
currentSlide === 0 ? indicators[0].classList.add('bg-[#ff0000]') : indicators[0].classList.remove('bg-[#ff0000]');
// Function to update the testimonial display
function updateTestimonial() {
    const slide = slides[currentSlide];
    document.getElementById('avatar').src = slide.avatar;
    document.getElementById('name').textContent = slide.name;
    document.getElementById('desc').textContent = slide.desc;

    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('bg-[#ff0000]');
        } else {
            indicator.classList.remove('bg-[#ff0000]');
        }
    });
}
//Iterate testimonials automatically every 5 seconds
setInterval(()=>{
    if(window.innerWidth <= 768 ){ 
    currentSlide = (currentSlide + 1) % slides.length;
    updateTestimonial();
    }
},5000)

// Display testimonial my indicator clicking
indicators.forEach((indicator,index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateTestimonial();  
})
});
const facebookIcon = document.getElementById('icon-facebook');
const twitterIcon = document.getElementById('icon-twitter');
const pinterestIcon = document.getElementById('icon-pinterest');
const instagramIcon = document.getElementById('icon-instagram');
const youtubeIcon = document.getElementById('icon-youtube');

facebookIcon.addEventListener('mouseover',(e)=>{
    e.target.src= './images/icon-facebook-orange.svg';
})
facebookIcon.addEventListener('mouseout',(e)=>{
    e.target.src= './images/icon-facebook.svg';
});
twitterIcon.addEventListener('mouseover',(e)=>{
    e.target.src= './images/icon-twitter-orange.svg';
})
twitterIcon.addEventListener('mouseout',(e)=>{
    e.target.src= './images/icon-twitter.svg';
});
pinterestIcon.addEventListener('mouseover',(e)=>{
    e.target.src= './images/icon-pinterest-orange.svg';
})
pinterestIcon.addEventListener('mouseout',(e)=>{
    e.target.src= './images/icon-pinterest.svg';
});
instagramIcon.addEventListener('mouseover',(e)=>{
    e.target.src= './images/icon-instagram-orange.svg';
})
instagramIcon.addEventListener('mouseout',(e)=>{
    e.target.src= './images/icon-instagram.svg';
});
youtubeIcon.addEventListener('mouseover',(e)=>{
    e.target.src= './images/icon-youtube-orange.svg';
})
youtubeIcon.addEventListener('mouseout',(e)=>{
    e.target.src= './images/icon-youtube.svg';
});

//validate email input
const emailInput = document.getElementById('emailInput');
const goButton = document.getElementById('goButton');

goButton.addEventListener('click', () => {
    const emailValue = emailInput.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    
    if (isValidEmail) {
        emailInput.style.color = '#9095a7';
        document.getElementById('emailError').classList.add('hidden');
        emailInput.value = ''; // Clear the input field after successful submission
    } else {
        emailInput.style.color = 'red';
        document.getElementById('emailError').classList.remove('hidden');
    }
});

emailInput.addEventListener('input', (e) => {
     const emailValue = e.target.value;
     if(emailValue === ''){
         emailInput.style.color = '#9095a7';
         document.getElementById('emailError').classList.add('hidden');}
})

const hamburgerIcon = document.getElementById('hamburgerIcon');
hamburgerIcon.src = './images/icon-hamburger.svg'; // Set initial icon
// Toggle menu visibility and change icon on click
const menu = document.getElementById('menu');
hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if(hamburgerIcon.getAttribute('src') === './images/icon-hamburger.svg') {
        hamburgerIcon.setAttribute('src','./images/icon-close.svg');
    } else {
        hamburgerIcon.setAttribute('src','./images/icon-hamburger.svg');
    }
});