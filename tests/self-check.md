
```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <title>Тест: Криптографія</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; }
    h1 { color: #333; }
    .question { margin-bottom: 20px; background: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .result { font-weight: bold; margin-top: 10px; }
    button { padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
    button:hover { background-color: #0056b3; }
    input[type="text"], input[type="number"] { padding: 5px; width: 100%; max-width: 300px; margin-top: 5px; }
  </style>
</head>
<body>
  <h1>Інтерактивний тест: Криптографія — шифрування та хешування</h1>

  <form id="quiz-form">
    <!-- Питання 1 -->
    <div class="question">
      <p>1. Що таке симетричне шифрування?</p>
      <label><input type="radio" name="q1" value="b"> Один і той самий ключ для шифрування і дешифрування</label><br>
      <label><input type="radio" name="q1" value="a"> Використання відкритого ключа</label><br>
      <label><input type="radio" name="q1" value="c"> Хеш-функція</label><br>
      <div class="result" id="r1"></div>
    </div>

    <!-- Питання 2 --
    <div class="question">
      <p>2. Що з переліченого є хеш-функцією?</p>
      <label><input type="radio" name="q2" value="c"> SHA-256</label><br>
      <label><input type="radio" name="q2" value="a"> RSA</label><br>
      <label><input type="radio" name="q2" value="b"> AES</label><br>
      <div class="result" id="r2"></div>
    </div>

    <!-- Питання 3 (вибір з декількох варіантів, кілька відповідей) -->
    <div class="question">
      <p>3. Які з наведених є алгоритмами асиметричного шифрування? (Виберіть усі, що підходять)</p>
      <label><input type="checkbox" name="q3" value="a"> RSA</label><br>
      <label><input type="checkbox" name="q3" value="b"> AES</label><br>
      <label><input type="checkbox" name="q3" value="c"> ECC</label><br>
      <label><input type="checkbox" name="q3" value="d"> DES</label><br>
      <div class="result" id="r3"></div>
    </div>

    <!-- Питання 4 (текстова відповідь) -->
    <div class="question">
      <p>4. Що таке хеш?</p>
      <input type="text" name="q4" placeholder="Введіть відповідь" />
      <div class="result" id="r4"></div>
    </div>

    <!-- Питання 5 (числова відповідь) -->
    <div class="question">
      <p>5. Яка довжина хешу, який створює алгоритм SHA-256? Вкажіть у бітах.</p>
      <input type="number" name="q5" placeholder="Введіть число" />
      <div class="result" id="r5"></div>
    </div>

    <!-- Питання 6 (правда/неправда) -->
    <div class="question">
      <p>6. Симетричне шифрування використовує два різні ключі — відкритий і закритий. (Правда/Неправда)</p>
      <label><input type="radio" name="q6" value="false"> Правда</label><br>
      <label><input type="radio" name="q6" value="true"> Неправда</label><br>
      <div class="result" id="r6"></div>
    </div>

    <!-- Питання 7 -->
    <div class="question">
      <p>7. Який алгоритм є прикладом симетричного шифрування?</p>
      <label><input type="radio" name="q7" value="a"> RSA</label><br>
      <label><input type="radio" name="q7" value="b"> AES</label><br>
      <label><input type="radio" name="q7" value="c"> ECC</label><br>
      <div class="result" id="r7"></div>
    </div>

    <!-- Питання 8 (текстова відповідь) -->
    <div class="question">
      <p>8. Що таке цифровий підпис?</p>
      <input type="text" name="q8" placeholder="Введіть відповідь" />
      <div class="result" id="r8"></div>
    </div>

    <!-- Питання 9 -->
    <div class="question">
      <p>9. Що гарантує цілісність даних?</p>
      <label><input type="radio" name="q9" value="b"> Хеш-функція</label><br>
      <label><input type="radio" name="q9" value="a"> Закритий ключ</label><br>
      <label><input type="radio" name="q9" value="c"> Відкритий ключ</label><br>
      <div class="result" id="r9"></div>
    </div>
<!-- Питання 10 (числова відповідь) -->
    <div class="question">
      <p>10. Скільки бітів має ключ AES-256?</p>
      <input type="number" name="q10" placeholder="Введіть число" />
      <div class="result" id="r10"></div>
    </div>

    <!-- Питання 11 -->
    <div class="question">
      <p>11. Який протокол використовується для безпечного з’єднання в Інтернеті?</p>
      <label><input type="radio" name="q11" value="c"> SSL/TLS</label><br>
      <label><input type="radio" name="q11" value="a"> HTTP</label><br>
      <label><input type="radio" name="q11" value="b"> FTP</label><br>
      <div class="result" id="r11"></div>
    </div>

    <!-- Питання 12 (текстова відповідь) -->
    <div class="question">
      <p>12. Що таке злам (крекінг) у криптографії?</p>
      <input type="text" name="q12" placeholder="Введіть відповідь" />
      <div class="result" id="r12"></div>
    </div>

    <button type="submit">Перевірити</button>
  </form>

  <script>
    document.getElementById('quiz-form').onsubmit = function(e) {
      e.preventDefault();

      let score = 0;

      const answers = {
        q1: 'b',
        q2: 'c',
        q3: ['a', 'c'], // множинний вибір, правильні RSA і ECC
        q4: ['унікальний код', 'уникальний код', 'хеш', 'результат хеш-функції', 'хешкод', 'хеш-код', 'результат обчислення хеш-функції'],
        q5: '256',
        q6: 'true', // твердження "симетричне шифрування використовує два ключі" — неправда
        q7: 'b',
        q8: ['засіб підтвердження автентичності', 'підпис', 'цифровий підпис', 'підтвердження автентичності'],
        q9: 'b',
        q10: '256',
        q11: 'c',
        q12: ['несанкціонована спроба доступу', 'незаконний доступ', 'злам', 'крекінг', 'спроба зламу', 'взлом', 'атака']
      };

      // Функція для перевірки множинного вибору (питання 3)
      function checkMultiple(name, correctArr) {
        const checked = [...document.querySelectorAll(input[name="${name}"]:checked)].map(i => i.value);
        if (checked.length !== correctArr.length) return false;
        return correctArr.every(val => checked.includes(val));
      }

      for (let i = 1; i <= 12; i++) {
        let q = 'q' + i;
        let resultEl = document.getElementById('r' + i);
        let isCorrect = false;

        if (i === 3) {
          // Множинний вибір
          if (checkMultiple(q, answers[q])) isCorrect = true;
        } else if ([4,8,12].includes(i)) {
          // Текстова відповідь (ігноруємо регістр і пробіли)
          let val = document.querySelector(input[name="${q}"]).value.trim().toLowerCase();
          isCorrect = answers[q].some(ans => val.includes(ans));
        } else if ([5,10].includes(i)) {
          // Числова відповідь (перевірка строгої рівності як рядка)
          let val = document.querySelector(input[name="${q}"]).value.trim();
          isCorrect = val === answers[q];
        } else {
          // Один вибір (radio)
          let selected = document.querySelector(input[name="${q}"]:checked);
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

      alert(Результат: ${score} з 12 правильних відповідей.);
    }
  </script>
</body>
</html>
