
// /=== Animations ===//

AOS.init(
    {
        offset: 100,
        duration: 1000,
        easing: 'ease-in-out', // default easing for AOS animations
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom'
    }
);


// =====Toggle icon navbar====//

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x')

        });
    });
}
// =====Scroll section active look====//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
    // =====sticky navbar====//
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
}



// Linking Email
let form = document.querySelector("form")
let loader = document.querySelector(".loader")

function sendMail() {
    let params = {
        from_name: document.getElementById('fullName').value,
        email_id : document.getElementById('email_id').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        emailSubject: document.getElementById('emailSubject').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_l2nqzaj", "template_do2d9j2", params).then((result)=>{
        if (result.text != "OK"){
        }
        if (result.text == "OK"){
            loader.style.display = "none";
            Swal.fire("message sent")
            console.log(result.text)
            
        }
    })
}

form.addEventListener("submit",(e)=>{
    loader.style.display = "block"
    e.preventDefault();
    e.target.reset()
    sendMail()
})