'use strict'

const hours_hand = document.querySelector('.hour-hand')
const sec_hand = document.querySelector('.hand-sec')
const min_hand = document.querySelector('.hand-min')
const digital_hour = document.querySelector('.hour')
const digital_minute = document.querySelector('.minute')

const initial_time = new Date()
const initial_seconds = initial_time.getSeconds()
const initial_minutes = initial_time.getMinutes()
const initial_hours = initial_time.getHours()

let time_obj = {
  sec: initial_seconds,
  min: initial_minutes,
  hour: initial_hours,
  sec_inc() {
    ++this.sec
    if (this.sec >= 60) {
      ++this.min
      this.sec = 0
      if (this.min >= 60) {
        this.hour = this.hour + 1
        this.min = 0
        if (this.hour >= 24) {
          this.hour = 0
        }
      }
    }
  },
}

const tick = function (obj) {
  time_obj.sec_inc()
  hours_hand.style.transform = `rotate(${(obj.hour % 12) * 30 + 180}deg)`
  min_hand.style.transform = `rotate(${obj.min * 6 + 180}deg)`
  sec_hand.style.transform = `rotate(${obj.sec * 6 + 180}deg)`
  digital_hour.textContent = `${time_obj.hour.toString().padStart(2, '0')}`
  digital_minute.textContent = `${time_obj.min.toString().padStart(2, '0')}`
}

tick(time_obj)
setInterval(function () {
  tick(time_obj)
}, 1000)
