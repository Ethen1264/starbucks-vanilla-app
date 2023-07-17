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