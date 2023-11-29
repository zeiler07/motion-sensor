let reading = 0
let motion = 0
basic.forever(function () {
    reading = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(reading)
    if (reading == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        motion = 1
        led.setBrightness(255)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        motion = 0
        led.setBrightness(0)
    }
})
