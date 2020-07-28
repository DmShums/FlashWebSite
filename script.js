 $(".btnImg").on("click", function(){
     $("#exampleModal").modal('show');
     src = $(this).attr("src");
     $(".modal.fade img").attr("src", src);
 });

 let sendBtn = document.querySelector(".contact-box__btn");
sendBtn.addEventListener("click", function() {
  animateForm()
});

let arrow = document.querySelector(".arrow-layer")
let tick = document.querySelector(".tick-layer");
let button = document.querySelector(".contact-box__btn");
let input = document.querySelector(".contact-box__input");
let heading = document.querySelector(".contact-box__heading");
let form = document.querySelector(".contact-box__form");
let box = document.querySelector(".contact-box");

function animateForm() {
  if (input.validity.valid) {
    arrow.classList.remove("animate-arrow-reject");
    arrow.classList.add("animate-arrow-accept");
    tick.classList.add("animate-tick");
    let width = box.offsetWidth;
    box.style.width = width + "px";
    heading.innerHTML = "Дякуємо! <a role='button' class='contact-box__new-appl'>Подати ще одну заявку</a>";
    form.submit();
    form.reset();
    sendBtn.disabled = true;
    input.disabled = true;
    let newApplBtn = document.querySelector(".contact-box__new-appl");
    newApplBtn.addEventListener("click", function() {
      revert()
    })
  } else {
    arrow.classList.remove("animate-arrow-reject");
    void arrow.scrollBy(); // force DOM reflow
    arrow.classList.add("animate-arrow-reject");
  }
}

function revert() {
  arrow.classList.remove("animate-arrow-accept");
  tick.classList.remove("animate-tick");
  input.disabled = false;
  sendBtn.disabled = false;
  heading.innerHTML = "Ваш номер телефону:";
}

//burger menu
//menu
const a = document.getElementById("mySidenav"),
      b = document.getElementById("main"),
      c = document.querySelector('.toggle'),
      burgerSpan = document.getElementById('burgerSpan'),
      btn = document.getElementById("closeButton");
   
if (burgerSpan.hasAttribute( "onClick", "closeNav()")){
  c.addEventListener("click", function(){c.classList.add("active")})
}

if (burgerSpan.hasAttribute( "onClick", "openNav()")){
  btn.addEventListener("click", function(){c.classList.remove("active")})
}

function openNav() {
  a.style.transform = "translate(0px)";
  burgerSpan.setAttribute( "onClick", "closeNav()");
  c.addEventListener("click", function(){
    c.classList.remove("active")
  })
}

function closeNav() {
  a.style.transform = "translate(-250px)";
  burgerSpan.setAttribute( "onClick", "openNav()")
  c.addEventListener("click", function(){
    c.classList.add("active")
  })
}
