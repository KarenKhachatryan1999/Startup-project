$(document).ready(function () {
  "use strict";

  // Preloader
  function preloader() {
    $(() => {
      setInterval(() => {
        let p = $("#loader");
        p.css("opacity", 0);
        setInterval(() => p.remove(), parseInt(p.css("--duration")) * 500);
      }, 500);
    });
  }
  preloader();

  // Sliders
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".swiper-pagination-bullet").css("background", "#c0301c");
  $(".swiper-button-prev").css("color", "#c0301c");
  $(".swiper-button-next").css("color", "#c0301c");

  $(".about-slider").slick({
    prevArrow: '<span class="prev_arrow">&#10094;</span>',
    nextArrow: '<span class="next_arrow">&#10095;</span>',
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 482,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Mobile menu
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");

  document.onclick = function (event) {
    if (
      event.target.id !== "sidebar" &&
      event.target.id !== "mobile-menu-btn"
    ) {
      mobileMenuBtn.classList.remove("active");
      sidebar.classList.remove("active");
    }
  };

  mobileMenuBtn.onclick = function () {
    mobileMenuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
  };

  // Animate Scroll

  $(".js-scroll-to-section").click(function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1300, "easeInOutExpo");
  });

  // -------  Button Up  ------- //

  $(".button_up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "easeInOutExpo");
  });

  new WOW().init();


  // Validation
  const nameError = document.querySelector("#nameError");
  const phoneError = document.querySelector("#phoneError");
  const emailError = document.querySelector("#emailError");
  const messageError = document.querySelector("#messageError");
  const submitError = document.querySelector("#submitError");

  function validateName() {
    const name = document.querySelector("#name");
    if (name.value == "") {
      nameError.textContent = "Name is required";
      return false;
    }
    if (!name.value.match(/[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+/)) {
      nameError.innerHTML = "write full Name";
      return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

  function validatePhone() {
    const phone = document.querySelector("#phone");
    if (phone.value == "") {
      phoneError.textContent = "Phone number is required";
      return false;
    }
    if (phone.value.length !== 10) {
      phoneError.textContent = "Phone should be 10 digits";
      return false;
    }
    if (!phone.value.match(/^[0-9]{10}$/)) {
      phoneError.innerHTML = "only digits please";
      return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

  function validateEmail() {
    const email = document.querySelector("#email").value;
    if (email.length == "") {
      emailError.innerHTML = "Email is required";
      return false;
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      emailError.innerHTML = "enter correct Email";
      return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

  function validateMessage() {
    const message = document.querySelector("#message").value;
    let count = 30;
    let rest = count - message.length;
    if (rest > 0) {
      messageError.textContent = rest + " more characters required";
      return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

  function validateForm() {
    if (
      !validateName() ||
      !validatePhone() ||
      !validateEmail() ||
      !validateMessage()
    ) {
      submitError.innerHTML = "Please fix errors";
      submitError.style.display = "block";
      setTimeout(() => {
        submitError.style.display = "none";
      }, 3000);
      return false;
    }
  }


  // Modal window
  $(function () {
    $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  });

  let popups = document.querySelectorAll('.popup');
  window.addEventListener('click', (e) => {
    for (let popup of popups) {
      if (e.target == popup) {
        $.magnificPopup.close();
      }
    }
  });


  // Filtering items
  const ul = document.querySelector('.categories');
  const filteritems = document.querySelectorAll('.works-container>div');
  ul.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') return false;
    const filterclass = e.target.dataset['filter'];
    filteritems.forEach(elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterclass) && filterclass !== 'all') {
        elem.classList.add('hide');
      }
    })
  });
});

// Read more buttons
func1 = function () {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
func2 = function () {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}





