class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) printTimeCallback()
      this.currentTime += 1
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return ("0" + Number(value).toString()).slice(-2)
  }

  stop() {
    // @ts-ignore
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return (
      `${this.computeTwoDigitNumber(this.getMinutes())}`
      + ":"
      + `${this.computeTwoDigitNumber(this.getSeconds())}`
    )
  }
}
