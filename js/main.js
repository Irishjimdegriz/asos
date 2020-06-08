const swiperLabels = ['Описание', 'Отзывы (03)', 'Оплата и доставка'];
let currentSize = 1;
let currentColor = 0;

$(document).ready(function () {
  const modal = $('.modal'),
        sizesModal = $('.size-table-modal'),
        sizesModalButton = $('.info__size-table'),
        closeBtn = $('.modal__close'),
        tableCloseBtn = $('.size-table-modal__close'),
        sizesTable = $('.size-table-modal__sizes'),
        modalSearch = $('.modal__search'),
        zoomWrap = $('.zoom-wrap'),
        zoomModal = $('.zoom-modal'),
        iconZoom = $('.icon-wrap-zoom'),
        zoomCloseBtn = $('.zoom-modal__close'),
        openSearchBtn = $('.search-open-button'),
        headerPrimary = $('.header--primary'),
        headerWhite = $('.header--white'),
        readMoreFirst = $('.read-more-first'),
        newsItemFirst = $('.news-item__text--first'),
        readMoreSecond = $('.read-more-second'),
        newsItemSecond = $('.news-item__text--second'),
        hamburger = $('.hamburger'),
        hamburgerMenu = $('.hamburger__menu'),
        scrollUp = $('.scroll-up-container'),
        interfaceButtonImage = $('.interface-button-image'),
        mainPhotoSwiper = $('.photos__swiper'),
        colors = $('.color-variant'),
        sizes = $('.size-variant'),
        map = $('#map');

        colors.on('click', (event) => {
          colors.each(function() {
            $(this).removeClass('color-variant--chosen--pink');
            $(this).removeClass('color-variant--chosen--yellow');
            $(this).removeClass('color-variant--chosen--red');
            $(this).removeClass('color-variant--chosen--violet');
            $(this).removeClass('color-variant--chosen--blue');
            $(this).removeClass('color-variant--chosen--sand');
          })
          let target = $(event.target);
          //let className = '';

          if (colors.index(target)==0)
            target.addClass('color-variant--chosen--pink');
          else if (colors.index(target)==1)
            target.addClass('color-variant--chosen--yellow');
          else if (colors.index(target)==2)
            target.addClass('color-variant--chosen--red');
          else if (colors.index(target)==3)
            target.addClass('color-variant--chosen--violet');
          else if (colors.index(target)==4)
            target.addClass('color-variant--chosen--blue');
          else if (colors.index(target)==5)
            target.addClass('color-variant--chosen--sand');
        });

        sizes.on('click', (event) => {
          let target = $(event.target);
          
          if (target.hasClass('size-variant--disabled'))
            return;

          sizes.each(function() {
            $(this).removeClass('size--chosen');
          })

          target.addClass('size--chosen');
        });

  window.onresize = doALoadOfStuff;

  function doALoadOfStuff() {
    if ($(window).width() < 500)  
      mainPhotoSwiper.removeClass('swiper-no-swiping');
    else 
      mainPhotoSwiper.addClass('swiper-no-swiping');
  }

  const switchModal = () => {
    modal.toggleClass('modal--visible');
  }

  const switchZoomModal = () => {
    zoomModal.toggleClass('modal--visible');
  }
  
  const switchTableModal = () => {
    sizesModal.toggleClass('modal--visible');
  }

  const switchBurgerMenu = () => {
    hamburgerMenu.toggleClass('hamburger__menu--visible');
  }

  hamburger.on('click', () => {
    hamburger.toggleClass('is-active');
    switchBurgerMenu();
  });

  zoomCloseBtn.on('click', switchZoomModal);
  iconZoom.on('click', switchZoomModal);
  sizesModalButton.on('click', switchTableModal);

  closeBtn.on('click', switchModal);
  openSearchBtn.on('click', switchModal);
  tableCloseBtn.on('click', switchTableModal);

  $(document).on('keydown', function(e) {
    if (e.code === "Escape") {
      modal.removeClass('modal--visible');
      zoomModal.removeClass('modal--visible');
      sizesModal.removeClass('modal--visible');
    }
  }); 

  $(document).on('click', function(event) {
    let target = $(event.target);

    if (!target.is(interfaceButtonImage) && !target.is(iconZoom) && !target.is(sizesModalButton) && (modal.hasClass('modal--visible') || zoomModal.hasClass('modal--visible') || sizesModal.hasClass('modal--visible')) && !target.closest(modalSearch).length && !target.closest(zoomWrap).length && !target.closest(sizesTable).length){
      modal.removeClass('modal--visible');
      zoomModal.removeClass('modal--visible');
      sizesModal.removeClass('modal--visible');
    }
  });  

  //  && !target.closest(modalSearch).length && !target.closest(zoomWrap).length

//   readMoreFirst.on('click', () => {
//      newsItemFirst.css({overflow: 'visible'});
//      readMoreFirst.css('visibility', 'hidden');
// });
//   readMoreSecond.on('click', () => { 
//     newsItemSecond.css({overflow: 'visible'});
//     readMoreSecond.css('visibility', 'hidden');
// });

  let heroSwiper = new Swiper ('.hero__swiper', {
    loop: true,
    navigation: {
      nextEl: '.hero__swiper-button-next',
      prevEl: '.hero__swiper-button-prev',
    },
    swiping: {
      noSwiping: true
    }
  })

  let popularSwiper = new Swiper('.popular__swiper', {
    loop: true,
    slidesPerView: 4,
    loopedSlides: 4,
    spaceBetween: 20,
    setWrapperSize: true,
    navigation: {
      nextEl: '.popular__swiper-button-next',
      prevEl: '.popular__swiper-button-prev',
    },
    swiping: {
      noSwiping: true
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetweenSlides: 20
      },      
      760: {
        slidesPerView: 2,
        spaceBetweenSlides: 20
      },
      1130: {
        slidesPerView: 3,
        spaceBetweenSlides: 20
      },
      1500: {
        slidesPerView: 4,
        spaceBetweenSlides: 20
      }
    }
  });

  let youmaylikeSwiper = new Swiper('.youmaylike__swiper', {
    loop: true,
    slidesPerView: 4,
    loopedSlides: 4,
    spaceBetween: 20,
    setWrapperSize: true,
    navigation: {
      nextEl: '.youmaylike__swiper-button-next',
      prevEl: '.youmaylike__swiper-button-prev',
    },
    swiping: {
      noSwiping: true
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetweenSlides: 20
      },      
      760: {
        slidesPerView: 2,
        spaceBetweenSlides: 20
      },
      // when window width is >= 1130px
      1130: {
        slidesPerView: 3,
        spaceBetweenSlides: 20
      },
      1500: {
        slidesPerView: 4,
        spaceBetweenSlides: 20
      }
    }
  });


  let photosSwiper = new Swiper ('.photos__swiper', {
    loop: true,
    navigation: {
      nextEl: '.photos__swiper-button-next',
      prevEl: '.photos__swiper-button-prev',
    },
    pagination: {
      el: '.photos__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return `<div class="${className} photos__swiper-custom-bullet"><div class="image-wrapper photos__image-wrapper"><img src="img/item-card/photo-min-${index + 1}.png"></div></div>`;}
    },
    swiping: {
      noSwiping: true
    }
  });

  let reviewsSwiper = new Swiper ('.reviews__swiper', {
    loop: true,
    initialSlide: 1,
    pagination: {
      el: '.reviews__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<h2 class="${className} reviews__swiper-custom-bullet"><div class="bullet-text">${(swiperLabels[index])}</div></h2>`;}
    },
    swiping: {
      noSwiping: true
    }
  });

      if ($(window).scrollTop() > 20) {
        scrollUp.css('display', "block");
        headerPrimary.css('background-color', '#433D7B');
        headerWhite.css('background-color', '#ffffff');
      } else {
        scrollUp.css('display', "none");
        headerPrimary.css('background-color', 'transparent');
        headerWhite.css('background-color', 'transparent');
      }
    
    function scrollFunction() {
      let scrollTop = $(window).scrollTop();

      if (scrollTop > 20) {
        scrollUp.css('display', "block");
        headerPrimary.css('background-color', '#433D7B');
        headerWhite.css('background-color', '#ffffff');
      } else {
        scrollUp.css('display', "none");
        headerPrimary.css('background-color', 'transparent');
        headerWhite.css('background-color', 'transparent');
      }
    }
    
    $(window).scroll(scrollFunction);

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $('.subscribe-form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        subscribe: {
          required: true,
          email: true
        }
      },
      messages: {
        subscribe: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            window.location = "./thanks.html";
            $(form)[0].reset();
            ym(64686715,'reachGoal','subscribe-button');
            return true;
          }
        });
      }
    });

    $('.questions__form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        userName: {
          required: true,
          minlength: 3,
          maxlength: 15
        },
        // simple rule, converted to {required:true}
        userPhone: {
          required: true,
          minlength: 17
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        userTopic: {
          required: true,
          minlength: 2,
          maxlength: 20
        },
        userQuestion: {
          required: true
        }
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя слишком короткое",
          maxlength: "Имя слишком длинное"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Телефон слишком короткий"
        },
        userEmail: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
        userTopic: {
          required: "Заполните поле",
          minlength: "Тема слишком короткая",
        },
        userQuestion: {
          required: "Заполните поле"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "sendQuestion.php",
          data: $(form).serialize(),
          success: function (response) {
            window.location = "./thanks.html";
            $(form)[0].reset();
            ym(64686715,'reachGoal','send-question-button')
            return true;
          }
        });
      }
    });

    $('.review__form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        reviewUserName: {
          required: true,
          minlength: 3,
          maxlength: 15
        },
        // compound rule
        reviewUserEmail: {
          required: true,
          email: true
        },
        reviewUserReview: {
          required: true
        }
      },
      messages: {
        reviewUserName: {
          required: "Заполните поле",
          minlength: "Имя слишком короткое",
          maxlength: "Имя слишком длинное"
        },
        reviewUserEmail: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
        reviewUserReview: {
          required: "Заполните поле"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "sendReview.php",
          data: $(form).serialize(),
          success: function (response) {
            window.location = "./thanks-review.html";
            $(form)[0].reset();
            ym(64686715,'reachGoal','send-review-button')
            return true;
          }
        });
      }
    });

    $('.review__form--mobile').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        mobileReviewUserName: {
          required: true,
          minlength: 3,
          maxlength: 15
        },
        // compound rule
        mobileReviewUserEmail: {
          required: true,
          email: true
        },
        mobileReviewUserReview: {
          required: true
        }
      },
      messages: {
        mobileReviewUserName: {
          required: "Заполните поле",
          minlength: "Имя слишком короткое",
          maxlength: "Имя слишком длинное"
        },
        mobileReviewUserEmail: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
        mobileReviewUserReview: {
          required: "Заполните поле"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "sendReview.php",
          data: $(form).serialize(),
          success: function (response) {
            window.location = "./thanks-review.html";
            $(form)[0].reset();
            ym(64686715,'reachGoal','send-review-button')
            return true;
          }
        });
      }
    });    

    $('[type=tel]').mask('+7(000) 000-00-00');

    $('.discount-coupon-block__form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        discount: {
          required: true
        }
      },
      messages: {
        discount: {
            required: "Заполните поле"
        },
      },
      submitHandler: function(form) {
        $(form)[0].reset();
      }
    })

    map.on('click', () => {
      map.removeClass('shade');
    });

    //Переменная для включения/отключения индикатора загрузки
var spinner = $('.footer__api-map').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map", {
    center: [55.756, 37.612], // координаты центра на карте
    zoom: 17, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([55.756959, 37.608634], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/yandex-map-mark.png',
      // Размеры метки.
      iconImageSize: [102, 87],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.behaviors.disable('scrollZoom');
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
          if (window.innerWidth > 1080) {
            myMapTemp.container.getElement().style.height = '531px';
            myMapTemp.container.getElement().style.width= '100%';
          }
          else {
            myMapTemp.container.getElement().style.height = '330px';
          }

          // Инициируем пересчет размеров.
          myMapTemp.container.fitToViewport();

          myMapTemp.container.events.add('sizechange', () => {
            if (window.innerWidth > 1080) {
              myMapTemp.container.getElement().style.height = '531px';
              myMapTemp.container.getElement().style.width= '100%';
            }
            else
              myMapTemp.container.getElement().style.height = '330px';
          });


  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.footer__api-map').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=6fdbd675-9305-4e9b-8942-d69cd6eef340&lang=ru_RU", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
  $(function() {
  
    //Запускаем основную функцию
    ymap();
  
  });

  let x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.setAttribute("class", "option");
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          let y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
});