const value = [{
  value: '1',
  label: '(999) <img src="images/contact-country.svg"/>',
  id: 1
},

{
  value: '2',
  label: '(888) <img src="images/contact-country.svg"/>',
  id: 2
},

{
  value: '3',
  label: '(777) <img src="images/contact-country.svg"/>',
  id: 3
},


{
  value: '4',
  label: '(666) <img src="images/contact-country.svg"/>',
  id: 4
},

]


const defaultSelect = () => {
  const element = document.querySelector('.contact__choices');
  const choices = new Choices(element, {
    searchEnabled: false,
    allowHTML: true,
    choices: value,
  });
};

defaultSelect();

$(function () {
  $(".country__content").not(":first").hide()
  $(".country__list .country__list-item").on("click", function () {
    $(".country__list .country__list-item").removeClass("country__list--active").eq($(this).index()).addClass("country__list--active")
    $(".country__content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("country__list--active")

  //========================================================================================

  $('.programm__accordion-title').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('programm__accordion-title--active')) {
      $(this).removeClass('programm__accordion-title--active')
    } else {
      $('.programm__accordion-title').removeClass('programm__accordion-title--active')
      $(this).addClass('programm__accordion-title--active')
    }
  })

  $('.about-us__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive:
      [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 4,
            variableWidth: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            variableWidth: true,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            variableWidth: true,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            variableWidth: true,
          }
        },
      ]
  });

  $('.experts__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    prevArrow: '<span class="prev_arrow"><div class="programm__accordion-ellipse--2"><span></span><span></span></div></span>',
    nextArrow: '<span class="next_arrow"><div class="programm__accordion-ellipse--2"><span></span><span></span></div></span>',
    responsive:
      [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>'
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>'
          }
        },
        {
          breakpoint: 322,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>'
          }
        },
      ]
  });

  $('.burger, .overlay, .nav__menu-link').on('click', function (e) {
    e.preventDefault()
    $('.nav').toggleClass('nav--open')
    $('.burger').toggleClass('burger--close')
    $('.overlay').toggleClass('overlay--show')
  })

})

document.querySelectorAll('.programm__accordion-title').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    console.log(content)
    if (content.style.maxHeight) {
      document.querySelectorAll('.programm__accordion-text').forEach(el => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.programm__accordion-text').forEach(el => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})


const anchors = document.querySelectorAll('a[href^="#"]')


for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}




