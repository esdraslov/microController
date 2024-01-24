let btn: number
radio.onReceivedNumber((num) => {
    btn = num
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

    export function isPressed(button: Button) {
        return btn == button
    }
}
