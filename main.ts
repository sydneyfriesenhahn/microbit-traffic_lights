function Red_LED_lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
function Green_LED_lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
function Yellow_LED_lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
let delay = 250
strip.setBrightness(30)
basic.forever(function () {
    Red_LED_lights_on()
    basic.pause(delay)
    Yellow_LED_lights_on()
    basic.pause(delay)
    Green_LED_lights_on()
    basic.pause(delay)
})
