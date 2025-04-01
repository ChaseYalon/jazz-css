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
            "ALIGN_CONTENT":"center",
            "ANIMATION_DELAY":0.5
        }
    )
]

Main.compile("thisSucks")