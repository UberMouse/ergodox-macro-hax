import { newMacro, processAll } from "./macros";

// Point this at wherever your config root folder is
const SOURCE_DIR = "./layout_src/moonlander_test-layout_source/keymap.c";

const macroExtensions = {
    "bd": newMacro()
        .withShift(newMacro().typeAlphanumeric("3"))
        .withShift(newMacro().typeAlphanumeric("4")),
    "dw": newMacro()
        .withShift(newMacro().typeAlphanumeric("1"))
        .withShift(newMacro().typeAlphanumeric("2")),
    "carom": newMacro()
        .withShift(newMacro().typeAlphanumeric("5"))
        .delay(100)
        .typeAlphanumeric("r")
        .delay(600)
        .withShift(newMacro().typeAlphanumeric("2")),
    "pf": newMacro()
        .withShift(newMacro().typeAlphanumeric("5"))
        .delay(60)
       .withShift(newMacro() .typeAlphanumeric("d"))
        .delay(600)
        .withShift(newMacro().typeAlphanumeric("2")),
    "res": newMacro()
        .withShift(newMacro().typeAlphanumeric("6"))
        .delay(100)
       .withCtrl(newMacro() .typeAlphanumeric("r")),
    "ref": newMacro()
        .withShift(newMacro().typeAlphanumeric("6"))
        .delay(100)
       .withCtrl(newMacro() .typeAlphanumeric("d")),
    // target cycle
    "lred": newMacro()
        .withCtrl(newMacro().typeAlphanumeric("b")),
    "veng": newMacro()
        .withShift(newMacro().typeAlphanumeric("y"))
        .withShift(newMacro().typeAlphanumeric("l")),
    "dis": newMacro()
        .withShift(newMacro().typeAlphanumeric("y"))
        .withShift(newMacro().typeAlphanumeric("m")),
    // barricade
    "ctrl+z": newMacro()
        .widthShift(newMacro().typeAlphanumeric("5"))
        .withCtrl(newMacro().typeAlphanumeric("z")),
    // preparation
    "ctrl+x": newMacro()
        .widthShift(newMacro().typeAlphanumeric("5"))
        .withCtrl(newMacro().typeAlphanumeric("x")),
    // revenge
    "ctrl+c": newMacro()
        .widthShift(newMacro().typeAlphanumeric("5"))
        .withCtrl(newMacro().typeAlphanumeric("c")),
    // immortality
    "ctrl+v": newMacro()
        .widthShift(newMacro().typeAlphanumeric("5"))
        .withCtrl(newMacro().typeAlphanumeric("v")),

}

processAll(macroExtensions, SOURCE_DIR)