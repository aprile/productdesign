function TransitionIn () {
  const body = document.body

  body.classList.add('loading')

  console.log('loaded')
}

document.onload = TransitionIn()
