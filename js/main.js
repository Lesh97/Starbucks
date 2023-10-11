/** 프로모션 버튼누르면 상품 나오게 하기 */
window.onload = function () {
  const promotionBtn = document.querySelector(".promotion");
  const promotionDropdown = document.querySelector(".promotion_dropdown");
  /** 이벤트 리스너 연결 */
  promotionBtn.addEventListener("click", showPromotion);
  console.log(promotionBtn);
  function showPromotion(event) {
    //화면 새로고침 방지
    event.preventDefault();
    if (promotionBtn.id === "hide") {
      promotionDropdown.removeAttribute("hidden");
    } else {
      promotionDropdown.setAttribute("hidden");
    }
  }
};

window.onload = function () {
  const promotionDropdown = document.querySelector(".promotion_dropdown");
  const slider = promotionDropdown.querySelector(".pd_slider");
  const sliderLis = slider.querySelectorAll(".pd_slider_li");
  const moveBtn = promotionDropdown.querySelector(".pd_arrow");

  /** ul 넓이 계산 */
  const liWidth = sliderLis[0].clientWidth;
  const sliderWidth = liWidth * sliderLis.length;
  slider.style.width = `${sliderWidth}px`;

  /** 이벤트 리스너 연결 */
  let currentIdx = 0; //슬라이더 현재 번호
  let translate = 0; //슬라이더 위치 값
  moveBtn.addEventListener("click", moveSlider);
  function moveSlider(event) {
    //화면 새로고침 방지
    event.preventDefault();
    console.log(translate);
    //next 버튼 눌렀을 때
    if (event.target.className === "fa-solid fa-chevron-right") {
      if (currentIdx !== sliderLis.length - 1) {
        console.log(translate);
        console.log(liWidth);
        translate -= liWidth;
        console.log(translate);
        slider.style.transform = `translateX(${translate}px)`;
        console.log(slider.style.trasform);
        currentIdx += 1;
        console.log(currentIdx);
      }
    }
    // prev 버튼 눌렀을 때
    else if (event.target.className === "fa-solid fa-chevron-left") {
      if (currentIdx !== 0) {
        console.log(translate);
        console.log(liWidth);
        translate += liWidth;
        console.log(translate);
        console.log(liWidth);
        slider.style.transform = `translateX(${translate}px)`;
        console.log(slider.style.trasform);
        currentIdx -= 1;
        console.log(currentIdx);
      }
    }
  }
};
