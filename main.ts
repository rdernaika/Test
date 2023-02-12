mbit_Music.Buzzer(DigitalPin.P0, mbit_Music.enBuzzer.Beep)
basic.forever(function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
})
