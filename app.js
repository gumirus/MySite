// Дата рождения
const birthDate = "1982-11-20";

// Дата начала работы
const startWork = "2022-07-27";

// Получаем элементы
const birthEl = document.getElementById("birth-date");
const workEl = document.getElementById("start-work");

// Функция обновления дат
function updateDates() {
  // Текущая дата
  const now = new Date();

  // Возраст
  const birth = new Date(birthDate);
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }

  // Дней работы
  const start = new Date(startWork);
  const workDays = Math.round((now - start) / (1000 * 60 * 60 * 24));

  // Формируем текст
  const birthText = "Мне " + age + " лет";
  const workText = "Время дни практической учёбы: " + workDays + " дней";

  // Выводим в элементы
  birthEl.innerText = birthText;
  workEl.innerText = workText;
}

// Запуск каждую секунду
setInterval(updateDates, 1000);
