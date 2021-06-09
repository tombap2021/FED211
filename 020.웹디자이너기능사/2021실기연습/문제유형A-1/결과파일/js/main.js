// 메인 JS - main.js 
console.log("연결확인!!!");

////////////////////////////
/// 슬라이드 기능구현하기 ///
///////////////////////////

/// 일정시간간격 호출하기 ///
// setInterval(함수,시간) -> 시간은 1/1000초
setInterval(function(){

    // 1. 호출여부확인
    console.log("인터발!!!");

    // 2. 대상선정: .slide
    var tg = document.querySelector(".slide");

    // 3. 변경내용: 대상의 top값이 -100%로 변경+트랜지션
    tg.style.top = "-100%";
    tg.style.transition = ".6s";

    // 4. 이동후 작업! /////////////////////

    // 4-1. 첫번째 li를 잘라서 맨뒤로 이동함!
    // 첫번째 li 선택
    var first = tg.querySelectorAll("li")[0];
    // 맨뒤로 이동 메서드 -> appendChild(요소)
    tg.appendChild(first);

},3000);// 인터발함수 //////////////
///////////////////////////////////
