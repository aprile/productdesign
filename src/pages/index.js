function Slideshow () {
  let slideIndex = 1
  showSlides(slideIndex)

  function plusSlides (n) {
    showSlides(slideIndex += n)
  }
  //
  // Control slides
  //
  const slideshow = document.querySelector('.slideshow')

  slideshow.addEventListener('click', controlSlides)
  document.addEventListener('keydown', controlSlides)

  function controlSlides (e) {
    const prev = e.target.matches('.prev')
    const next = e.target.matches('.next')
    const keyPrev = e.code === 'ArrowLeft'
    const keyNext = (e.code === 'ArrowRight') || (e.code === 'Space')

    if (prev || keyPrev) {
      console.log('prev')
      plusSlides(-1)
    } else if (next || keyNext) {
      console.log('next')
      plusSlides(1)
    }
  }
  //
  // Show slide indicator
  //
  function slideIndicator () {
    let current = slideIndex
    let total = document.getElementsByClassName('slide').length

    const indicator = document.querySelector('.slide-indicator')
    indicator.textContent = current + ' / ' + total
  }
  //
  // Show slides
  //
  function showSlides (n) {
    let i
    let slides = document.getElementsByClassName('slide')

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }

    let currentSlide = slides[slideIndex - 1]
    currentSlide.style.display = 'block'

    slideIndicator(currentSlide)

    //
    // Change text colour
    //
    const theme = document.body.classList
    const darkSlide = currentSlide.classList.contains('dark')

    if (darkSlide) {
      theme.add('dark')
    } else {
      theme.remove('dark')
    }
  }
  //
  // Show tooltip
  //
  const tooltip = document.querySelectorAll('.tooltip')
  document.addEventListener('mousemove', fn, false)

  function fn (e) {
    for (var i = tooltip.length; i--;) {
      tooltip[i].style.left = e.pageX + 'px'
      tooltip[i].style.top = e.pageY + 'px'
    }
  }
}

Slideshow()
