input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    on_off = !(on_off)
    if (on_off) {
        pins.servoWritePin(AnalogPin.P0, speed)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, speed)
    pos = (pos + richtg) % 2
    pins.servoWritePin(AnalogPin.P1, wlist[pos])
    basic.showNumber(pos)
})

input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, speed)
    pos = 3
    pins.servoWritePin(AnalogPin.P1, wlist[pos])
})
input.onButtonPressed(Button.AB, function () {
    on_off = !(on_off)
    if (on_off) {
        pins.servoWritePin(AnalogPin.P0, speed)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString(receivedString)
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "B") {
        basic.showString(receivedString)
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "AB") {
        basic.showString("-")
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
})
radio.setGroup(24)
let richtg = 0
let on_off = false
let winkel = 0
let speed = 0
let wlist: number[] = []

let pos = 1
on_off = true
speed = 120
richtg = 1
wlist = [
0,
90,
180,
180
]

// pins.servoWritePin(AnalogPin.P0, 90)
// pins.servoWritePin(AnalogPin.P1, wlist[pos])
