input.onPinPressed(TouchPin.P0, function () {
    if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.A))) {
        serial.writeString("j")
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    serial.writeString("abcdefghijklmnopqrstuvwxyz0123456789!#$%&")
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readLine())
})
input.onGesture(Gesture.Shake, function () {
    serial.writeString("c")
})
input.onButtonPressed(Button.AB, function () {
    serial.writeString("s")
    basic.showString("START!")
})
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (input.acceleration(Dimension.X) > 1000 || input.acceleration(Dimension.X) < -1000) {
            basic.showArrow(ArrowNames.West)
            serial.writeString("a")
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (input.acceleration(Dimension.X) > 1000 || input.acceleration(Dimension.X) < -1000) {
            basic.showArrow(ArrowNames.East)
            serial.writeString("b")
        }
    }
})
