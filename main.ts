let btn: number = -1
let paired: boolean = false
radio.onReceivedNumber((num) => {
    btn = num
})
radio.onReceivedValue((name, value) => {
    if (name == "paired" && value == 1) {
        paired = true
    }
})

namespace MicroController {
    export enum Button {
        //% block
        A,
        //% block
        B,
        //% block="Head (v2 only)"
        Head
    }

    //% block="is button %button% pressed?"
    export function isPressed(button: Button) {
        return btn == button
    }

    //% block="show message %message% to controller"
    export function show(message: string) {
        radio.sendString(message)
    }

    //% block="pair %id%"
    export function pair(id: number) {
        radio.sendValue("pair", id)
    }

    //% block
    export function isPaired() {
        return paired
    }
}
