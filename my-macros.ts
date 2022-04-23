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
        .withShift(newMacro().typeAlphanumeric("7"))
        .delay(100)
       .withShift(newMacro() .typeAlphanumeric("d"))
        .delay(600)
        .withShift(newMacro().typeAlphanumeric("2"))
         .delay(60)
        .withShift(newMacro().typeAlphanumeric("8")),
    "res": newMacro()
        .withShift(newMacro().typeAlphanumeric("6"))
        .delay(100)
       .withCtrl(newMacro() .typeAlphanumeric("r")),
    "ref": newMacro()
        .withShift(newMacro().typeAlphanumeric("6"))
        .delay(100)
       .withCtrl(newMacro() .typeAlphanumeric("d")),
    "rcpo": newMacro()
        .withCtrl(newMacro().typeAlphanumeric("3"))
        .delay(60)
        .withCtrl(newMacro().typeAlphanumeric("4"))
        .delay(48)
         .withCtrl(newMacro().typeAlphanumeric("5"))
        .delay(57)
         .withCtrl(newMacro().typeAlphanumeric("6"))
        .delay(53)
        .withCtrl(newMacro().typeAlphanumeric("7"))
        .delay(68)
        .withCtrl(newMacro().typeAlphanumeric("8")),
     "eof": newMacro()
             .withShift(newMacro().typeAlphanumeric("7"))
             .delay(100)
             .typeAlphanumeric("p")
             .delay(600)
             .withShift(newMacro().typeAlphanumeric("8")),
    "veng": newMacro()
        .withShift(newMacro().typeAlphanumeric("y"))
        .withShift(newMacro().typeAlphanumeric("l")),
    "dis": newMacro()
        .withShift(newMacro().typeAlphanumeric("y"))
        .withShift(newMacro().typeAlphanumeric("m"))

}

processAll(macroExtensions, SOURCE_DIR)