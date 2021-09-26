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
        // body.classList.toggle("fixed")
}
btn.addEventListener("click", onClick);

document.querySelectorAll(".nav-list-item").forEach((item) => {
    item.addEventListener("click", () => {
        nav_list.style.right = -150 + "px";
        // body.classList.remove("fixed")
        btn_line.classList.remove("open")
    })
})