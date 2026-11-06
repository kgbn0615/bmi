function calculateBMI() {
  let h = Number(document.querySelector("#height").value);
  let w = Number(document.querySelector("#weight").value); 

  if (!h || !w || h <= 0 || w <= 0) {
    alert("키와 몸무게를 정확히 입력해주세요.");
    return;
  }

  h = h / 100; // cm -> m
  let bmi = w / (h * h);
  let formattedBmi = bmi.toFixed(2);

  // 1. 숨겨진 결과 대시보드 나타내기
  document.querySelector("#result-dashboard").classList.remove("hidden");

  // 2. 중앙 원형 점수판 숫자 변경
  document.querySelector("#bmi-score").textContent = formattedBmi;

  // 3. 기존에 활성화된 그리드 아이템 초기화
  document.querySelectorAll('.grid-item').forEach(item => {
    item.classList.remove('active');
  });

  // 상태 뱃지 요소 가져오기
  let badge = document.querySelector("#status-badge");

  // 4. BMI 수치에 따른 상태 판별 및 뱃지색/그리드 활성화
  if (bmi >= 25) {
    badge.textContent = "비만";
    badge.style.background = "var(--color-obese)";
    document.querySelector("#grid-obese").classList.add("active");
  } else if (bmi >= 23) {
    badge.textContent = "비만 전단계";
    badge.style.background = "var(--color-over)";
    document.querySelector("#grid-over").classList.add("active");
  } else if (bmi >= 18.5) {
    badge.textContent = "정상";
    badge.style.background = "var(--color-normal)";
    document.querySelector("#grid-normal").classList.add("active");
  } else {
    badge.textContent = "저체중";
    badge.style.background = "var(--color-under)";
    document.querySelector("#grid-under").classList.add("active");
  }
}