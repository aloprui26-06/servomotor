basic.showLeds(`
    . . # . .
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    `)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    maqueen.servoRun(maqueen.Servos.S1, 100)
    basic.pause(100)
    maqueen.servoRun(maqueen.Servos.S1, 140)
    basic.pause(100)
    maqueen.servoRun(maqueen.Servos.S1, 180)
    basic.pause(100)
})
