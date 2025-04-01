import {cssClass,cssRGBA,Main} from "./classes.mjs";

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
