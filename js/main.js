const serchEl = document.querySelector(".search");
const serchInputEl = serchEl.querySelector("input");

serchEl.addEventListener("click",function(){
  serchInputEl.focus();
});

serchInputEl.addEventListener("focus", function(){
  serchEl.classList.add("focused");
  serchInputEl.setAttribute("placeholder", "통합검색")
});

serchInputEl.addEventListener("blur", function(){
  serchEl.classList.remove("focused");
  serchInputEl.setAttribute("placeholder", "")
});


const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: "none"
    })
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: "block"
    })
  }

}, 300));
// _.throttle(함수, 시간);


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true
});