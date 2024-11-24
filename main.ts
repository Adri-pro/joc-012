let num = 0
basic.forever(function () {
    num = randint(0, 2)
    basic.showNumber(num)
    if (num == 0 && pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    if (num == 1 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    if (num == 2 && pins.digitalReadPin(DigitalPin.P0) == 2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
