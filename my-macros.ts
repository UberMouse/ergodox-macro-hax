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
        .delay(300)
        .withShift(newMacro().typeAlphanumeric("2"))
}

processAll(macroExtensions, SOURCE_DIR)