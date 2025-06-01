document.getElementById('quiz-form').onsubmit = function (e) {
  e.preventDefault();

  let score = 0;

  const answers = {
    q1: 'b',
    q2: 'c',
    q3: ['a', 'c'],
    q4: ['унікальний код', 'уникальний код', 'хеш', 'результат хеш-функції', 'хешкод', 'хеш-код', 'результат обчислення хеш-функції'],
    q5: '256',
    q6: 'true',
    q7: 'b',
    q8: ['засіб підтвердження автентичності', 'підпис', 'цифровий підпис', 'підтвердження автентичності'],
    q9: 'b',
    q10: '256',
    q11: 'c',
    q12: ['несанкціонована спроба доступу', 'незаконний доступ', 'злам', 'крекінг', 'спроба зламу', 'взлом', 'атака']
  };

  function checkMultiple(name, correctArr) {
    const checked = [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(i => i.value);
    if (checked.length !== correctArr.length) return false;
    return correctArr.every(val => checked.includes(val));
  }

  for (let i = 1; i <= 12; i++) {
    let q = 'q' + i;
    let resultEl = document.getElementById('r' + i);
    let isCorrect = false;

    if (i === 3) {
      if (checkMultiple(q, answers[q])) isCorrect = true;
    } else if ([4, 8, 12].includes(i)) {
      let val = document.querySelector(`input[name="${q}"]`).value.trim().toLowerCase();
      isCorrect = answers[q].some(ans => val.includes(ans));
    } else if ([5, 10].includes(i)) {
      let val = document.querySelector(`input[name="${q}"]`).value.trim();
      isCorrect = val === answers[q];
    } else {
      let selected = document.querySelector(`input[name="${q}"]:checked`);
      if (!selected) {
        resultEl.textContent = '❌ Не вибрано відповідь';
        resultEl.style.color = 'orange';
        continue;
      }
      isCorrect = selected.value === answers[q];
    }

    if (isCorrect) {
      resultEl.textContent = '✅ Правильно';
      resultEl.style.color = 'green';
      score++;
    } else {
      resultEl.textContent = '❌ Неправильно';
      resultEl.style.color = 'red';
    }
  }

  alert(`Результат: ${score} з 12 правильних відповідей.`);
};

