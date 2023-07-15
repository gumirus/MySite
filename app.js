// Дата рождения в формате ГГГГ-ММ-ДД
const birthDate = "1982-11-20";

// Получаем элемент с id "birth-date"
const el = document.getElementById("birth-date");

// Функция обновления даты
function updateDate() {
  // Текущая дата
  const now = new Date();

  // Вычисляем возраст
  const birth = new Date(birthDate);
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }

  // Формируем строку для вывода
  const text = "Мне " + age + " лет";

  // Выводим в элемент
  el.innerText = text;
}

// Вызываем функцию каждую секунду
setInterval(updateDate, 1000);
