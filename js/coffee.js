window.onload = function () {
  const coffeeDropdown = document.querySelector(".coffee_container");
  const slider = coffeeDropdown.querySelector(".coffee_slider");
  const sliderLis = slider.querySelectorAll(".coffee_slider_li");
  const moveBtn = coffeeDropdown.querySelector(".coffee_arrow");

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

    //next 버튼 눌렀을 때
    if (event.target.className === "fa-solid fa-chevron-right") {
      if (currentIdx !== sliderLis.length - 1) {
        translate -= liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        currentIdx += 1;
      }
    }
    // prev 버튼 눌렀을 때
    else if (event.target.className === "fa-solid fa-chevron-left") {
      if (currentIdx !== 0) {
        translate += liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        currentIdx -= 1;
      }
    }
  }
};
