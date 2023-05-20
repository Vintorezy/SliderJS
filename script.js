document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slider-content");
  var dots = document.querySelectorAll(".dot");
  var currentIndex = 0;

  // Проверка наличия слайдов и точек
  if (slides.length === 0 || dots.length === 0) {
    console.error("Отсутствуют слайды или точки на странице");
    return;
  }

  // Показать первый слайд
  showSlide(currentIndex);

  // Обработчик клика на точки
  dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
      showSlide(index);
    });
  });

  // Обработчик клика на стрелку влево
  var prevButton = document.querySelector(".prev-button");
  prevButton.addEventListener("click", function() {
    var prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  });

  // Обработчик клика на стрелку вправо
  var nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", function() {
    var nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  });

  // Функция для показа слайда с указанным индексом
  function showSlide(index) {
    if (index < 0 || index >= slides.length) {
      console.error("Некорректный индекс слайда");
      return;
    }

    slides.forEach(function(slide) {
      slide.style.display = "none";
    });

    dots.forEach(function(dot) {
      dot.classList.remove("active");
    });

    slides[index].style.display = "block";
    dots[index].classList.add("active");

    var projectCities = document.querySelectorAll(".project-cities");
    projectCities.forEach(function(projectCity) {
      var cityTitles = projectCity.querySelectorAll("h4");
      cityTitles.forEach(function(cityTitle, titleIndex) {
        cityTitle.classList.remove("active-city", "beige", "disabled-city");
        if (titleIndex === index) {
          cityTitle.classList.add("active-city", "beige");
        } else {
          cityTitle.classList.add("disabled-city");
        }
      });
    });

    currentIndex = index;
  }

  // Обработчик клика на заголовки h4
  var projectCities = document.querySelectorAll(".project-cities");
  projectCities.forEach(function(projectCity) {
    var cityTitles = projectCity.querySelectorAll("h4");
    cityTitles.forEach(function(cityTitle, titleIndex) {
      cityTitle.addEventListener("click", function() {
        showSlide(titleIndex);
      });
    });
  });
});

