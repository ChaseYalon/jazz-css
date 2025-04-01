import {cssClass,cssRGBA,Main} from "./classes.mjs";
import path from "path";
import {fileURLToPath} from "url"
Main.setClasses = [
    new cssClass(
        {
            "NAME":".hi",
            "POSITION":"absolute",
            "ACCENT_COLOR":new cssRGBA(255,255,255)
        }
    ),
    new cssClass(
        {
            "NAME":".bye",
            "POSITION":"static",
            "ALLIGN_CONTENT":"center"
        }
    )
]
let toJoin = fileURLToPath(import.meta.url)
toJoin.concat("..","build","global.css")
Main.compile(path.join(toJoin))