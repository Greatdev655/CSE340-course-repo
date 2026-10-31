const currentPage = window.location.pathname;

const navLinks = document.querySelector("nav-link");

navLinks.forEach((link)=>{
    const linkPath = new URL(link.href).pathname;

    if(linkPath === currentPage){
        link.classList.add("active")
    }
})