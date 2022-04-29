basic.clearScreen()
basic.forever(function () {
    maqueen.servoRun(maqueen.Servos.S1, 41)
    basic.pause(100)
    maqueen.servoRun(maqueen.Servos.S1, 38)
    basic.pause(100)
    maqueen.servoRun(maqueen.Servos.S1, 68)
    basic.pause(100)
})
