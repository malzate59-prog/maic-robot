let Consultas = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Acceso de derechos")
    basic.showString("Acércate")
})
input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Programas sociales")
    Consultas += 1
    basic.showNumber(1)
})
