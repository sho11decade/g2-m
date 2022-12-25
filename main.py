def on_data_received():
    basic.show_string(serial.read_line())
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

def on_button_pressed_ab():
    serial.write_string("s")
    basic.show_string("START!")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    serial.write_string("c")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE115200)

def on_forever():
    if input.button_is_pressed(Button.A):
        if input.acceleration(Dimension.X) > 1000 or input.acceleration(Dimension.X) < -1000:
            basic.show_arrow(ArrowNames.WEST)
            serial.write_string("a")
    if input.button_is_pressed(Button.B):
        if input.acceleration(Dimension.X) > 1000 or input.acceleration(Dimension.X) < -1000:
            basic.show_arrow(ArrowNames.EAST)
            serial.write_string("b")
basic.forever(on_forever)
