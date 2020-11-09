registerAnimator('passthrough', class {
  animate(currentTime, effect) {
    effect.localTime = currentTime
    console.log(currentTime)
  }
})
