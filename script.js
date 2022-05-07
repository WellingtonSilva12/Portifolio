window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav')
  nav.classList.toggle('sticky', window.scrollY > 2)
})

let slideIndex = 1
showSlides(slideIndex)

//Function Close Menu Toogle
function closeMenu() {
  document.body.classList.remove('nav-links')
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
}
