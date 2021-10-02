const btn = document.querySelector(".btn");
const btn_line = document.querySelector(".btn-line")
const body = document.querySelector('html body');
const nav_list = document.querySelector('.nav-list');
const onClick = () => {
    const is_open = document.querySelector(".open");
    if (!is_open) {
        nav_list.style.right = 0;
    } else {
        nav_list.style.right = -150 + "px";
        console.log(nav_list.style)
    }
    btn_line.classList.toggle("open")
}
btn.addEventListener("click", onClick);

document.querySelectorAll(".nav-list-item").forEach((item) => {
    item.addEventListener("click", () => {
        nav_list.style.right = -150 + "px";
        btn_line.classList.remove("open")
    })
})

const elements = document.querySelectorAll(".sc")
window.addEventListener('scroll', () => {
    elements.forEach((ele) => {
        const target_position = ele.getBoundingClientRect().top;
        if (window.pageYOffset > ((target_position + window.pageYOffset) - window.innerHeight) + 100) {
            ele.classList.add("show")
        }

        if (window.pageYOffset === 0) {
            ele.classList.remove("show")
        }
    })
});

let current = 1
const slideshow = () => {

    const header_images = document.querySelectorAll(".header-image");

    if (current === 2) {
        current = 0;
        header_images[current].classList.add("active");
        header_images[2].classList.remove("active");
    } else {
        current++;
        header_images[current].classList.add("active");
        header_images[current - 1].classList.remove("active");

    }
}

window.addEventListener('load', () => {
    slideshow();
    setInterval(slideshow, 5000)
})