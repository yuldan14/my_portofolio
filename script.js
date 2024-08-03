





// muncul
const sectionsMuncul = document.querySelectorAll('section');
const navLinksMuncul = document.querySelectorAll('.nav-menu ul li a');
let profileShown = false; // Flag to track if the profile has been shown

window.addEventListener('scroll', () => {
  let current = '';

  sectionsMuncul.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinksMuncul.forEach(link => {
    link.classList.remove('active');
    if (link.hash === '#' + current) {
      link.classList.add('active');
    }
  });

  // Check if the profile section is in view
  const profileSection = document.getElementById('profile');
  if (profileSection) {
    const profileTop = profileSection.offsetTop;
    const profileBottom = profileTop + profileSection.offsetHeight;

    if (scrollY >= profileTop && scrollY <= profileBottom && !profileShown) {
      // Profile section is in view, add the 'show' class
      document.querySelector('#profile .desc').classList.add('show');
      document.querySelector('#profile .profile-img').classList.add('show');
      profileShown = true; // Set the flag to true after showing the profile
    } 
  }
});




// pointer
const pointer = document.querySelector('.pointer');
document.addEventListener('mousemove', (event) => {
    pointer.style.left = event.clientX + 'px';
    pointer.style.top = event.clientY + 'px';

    // Check if the pointer is over an element with the same color
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (element) {
        const elementStyle = getComputedStyle(element);
        const pointerStyle = getComputedStyle(pointer);
        if (elementStyle.backgroundColor === pointerStyle.backgroundColor) {
            pointer.classList.add('inverse');
        } else {
            pointer.classList.remove('inverse');
        }
    }
});



