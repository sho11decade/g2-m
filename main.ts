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
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            serial.writeString("j")
        }
    }
})
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
radio.setGroup(255)
