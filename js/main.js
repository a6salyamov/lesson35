$(function(){
  $(".country__content").not(":first").hide()
  $(".country__list .country__list-item").on("click", function(){
    $(".country__list .country__list-item").removeClass("country__list--active").eq($(this).index()).addClass("country__list--active")
    $(".country__content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("country__list--active")

  $('.programm__accordion-title').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass("programm__accordion-title--active")
  })

  $('.about-us__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $('.experts__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    prevArrow: '<span class="prev_arrow"><div class="programm__accordion-ellipse"><span></span><span></span></div></span>',
    nextArrow: '<span class="next_arrow"><div class="programm__accordion-ellipse"><span></span><span></span></div></span>',
  });





})

document.querySelectorAll('.programm__accordion-title').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    console.log(content)
    if(content.style.maxHeight) {
      document.querySelectorAll('.programm__accordion-text').forEach(el => el.style.maxHeight = null)
    } else{
      document.querySelectorAll('.programm__accordion-text').forEach(el => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})


