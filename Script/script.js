let header = document.querySelector("#header");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
    let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollValue = top;
});
