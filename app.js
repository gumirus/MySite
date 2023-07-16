class Dates {
  constructor() {
    // Дата рождения
    this.birthDate = "1982-11-20";

    // Дата начала учёбы
    this.startWork = "2022-06-26";

    // Получаем элементы
    this.birthEl = document.getElementById("birth-date");
    this.workEl = document.getElementById("start-work");

    // Запуск обновления дат
    this.updateDates();
    setInterval(() => this.updateDates(), 1000);
  }

  updateDates() {
    const now = new Date(); // Текущая дата
    const birth = new Date(this.birthDate); // Дата рождения
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
      age--;
    }

    // Дни практической работы
    const start = new Date(this.startWork);
    const workDays = Math.round((now - start) / (1000 * 60 * 60 * 24));
    // использовать условный оператор if, else, else if для правописания день, дня, дней
    let word;
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
    const birthText = `Мне ${age} лет`;
    const workText = `Практикуюсь: ${workDays} ${word}`;

    // Выводим в элементы
    this.birthEl.innerText = birthText;
    this.workEl.innerText = workText;
  }
}

const dates = new Dates();
