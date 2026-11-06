function calculateBMI() {
  let h = Number(document.querySelector("#height").value);
  let w = Number(document.querySelector("#weight").value); 

  // 입력값이 없는 경우 예외 처리 (방어 코드)
  if (h === 0 || w === 0) {
    alert("키와 몸무게를 정확히 입력해주세요.");
    return;
  }

  h = h / 100; // cm -> m
  let bmi = w / (h * h);

  // 1. 계산 완료 후 숨겨져 있던 시각 자료표 박스를 보이게 함
  document.querySelector("#result-box").style.display = "block";

  // 2. BMI 수치 출력
  document.querySelector("#result").textContent = "내 BMI 수치: " + bmi.toFixed(2);
  
  // 3. 기존에 색칠되어 있던 시각표 불빛(active) 초기화
  document.querySelectorAll('.ref-item').forEach(function(item) {
    item.classList.remove('active');
  });

  // 4. BMI 상태 출력 및 시각표에 색상 하이라이트 표시
  if (bmi >= 25) {
    document.querySelector("#state").textContent = "비만";
    document.querySelector("#ref-obese").classList.add("active");
  } else if (bmi >= 23) {
    document.querySelector("#state").textContent = "과체중";
    document.querySelector("#ref-over").classList.add("active");
  } else if (bmi >= 18.5) {
    document.querySelector("#state").textContent = "정상";
    document.querySelector("#ref-normal").classList.add("active");
  } else {
    document.querySelector("#state").textContent = "저체중";
    document.querySelector("#ref-under").classList.add("active");
  }
}