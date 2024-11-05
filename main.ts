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
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, speed)
    pos = 3
    pins.servoWritePin(AnalogPin.P1, wlist[pos])
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
    if (receivedString == "B") {
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_B,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
    if (receivedString == "AB") {
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_AB,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, speed)
    pos = 2
    pins.servoWritePin(AnalogPin.P1, wlist[pos])
    basic.showNumber(pos)
})
let wlist: number[] = []
let richtg = 0
let speed = 0
let on_off = false
let pos = 0
radio.setGroup(7)
let winkel = 0
pos = 0
on_off = true
speed = 120
richtg = 1
wlist = [
    0,
    90,
    180,
    135
]
let lauf = 1
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, wlist[pos])
