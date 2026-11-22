// ========================================
// МОДАЛЬНЕ ВІКНО "ЗАМОВИТИ ДЗВІНОК"
// ========================================

// Відкрити модальне вікно
function openModal() {
  document.getElementById("callModal").style.display = "block";
}

// Закрити модальне вікно
function closeModal() {
  document.getElementById("callModal").style.display = "none";
}

// Закриття при натисканні на затемнений фон
window.onclick = function (event) {
  const modal = document.getElementById("callModal");

  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ========================================
// ПРИХОВУВАННЯ ХЕДЕРА ПРИ ПРОКРУТЦІ
// ========================================

// Пам'ятаємо попередню позицію скролу
let lastScrollTop = 0;

// Отримуємо хедер
const header = document.querySelector(".header");

// Слухаємо прокрутку сторінки
window.addEventListener("scroll", () => {
  // Поточна позиція прокрутки
  let currentScroll = window.pageYOffset;

  // Якщо листаємо вниз і вже проскролили 100px
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    header.classList.add("header-hidden");
  }
  // Якщо листаємо вгору
  else {
    header.classList.remove("header-hidden");
  }

  // Запам'ятовуємо поточну позицію
  lastScrollTop = currentScroll;
});

// ========================================
// BURGER MENU ДЛЯ МОБІЛЬНИХ ПРИСТРОЇВ
// ========================================

// Кнопка бургера
const burger = document.querySelector(".burger");

// Саме меню
const nav = document.querySelector(".nav");

// Перевіряємо чи елементи існують
if (burger && nav) {
  // Відкрити / закрити меню
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Закрити меню після натискання на пункт
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}
