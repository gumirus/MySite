// Дата рождения
const birthDate = "1982-11-20";

// Дата начала учёбы
const startWork = "2022-07-27";

// Получаем элементы
const birthEl = document.getElementById("birth-date");
const workEl = document.getElementById("start-work");

// Функция обновления дат
function updateDates() {
  const now = new Date(); // Текущая дата
  const birth = new Date(birthDate); // Возраст
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }

  // Дни практической работы
  const start = new Date(startWork);
  const workDays = Math.round((now - start) / (1000 * 60 * 60 * 24));
  // использовать условный оператор if, else, else if для правописания день, дня, дней
  if (workDays % 10 == 1 && workDays != 11) {
    word = "день";
  } else if (
    workDays % 10 >= 2 &&
    workDays % 10 <= 4 &&
    !(workDays >= 12 && workDays <= 14)
  ) {
    word = "дня";
  } else {
    word = "дней";
  }

  // Формируем текст
  const birthText = "Мне " + age + " лет";
  const workText = "Практикуюсь: " + workDays + " " + word;

  // Выводим в элементы
  birthEl.innerText = birthText;
  workEl.innerText = workText;
}

// Запуск каждую секунду
setInterval(updateDates, 1000);
