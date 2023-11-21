const main = document.getElementById("main");
const val = document.getElementById("valentine");
const btn = document.getElementById("click");

btn.addEventListener("click", function(){
    main.classList.add('fade');
    main.addEventListener('transitionend', function(){
        window.location.href = "../month1.html";
    });
});