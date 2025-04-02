var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Main_instance;
import fs from "fs";
export class cssRGBA {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    toRGB() {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }
}
export class cssAspectRatio {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    toASR() {
        return `${this.numerator}/${this.denominator}`;
    }
}
export class cssClass {
    constructor(config) {
        this.config = config;
    }
    compileClass() {
        let localCSS = `${this.config.NAME} {\n`;
        if (this.config.hasOwnProperty("ACCENT_COLOR")) {
            if (typeof this.config.ACCENT_COLOR != undefined) {
                let toAdd = `accent-color: ${this.config.ACCENT_COLOR.toRGB()};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ALIGN_CONTENT")) {
            if (typeof this.config.ALIGN_CONTENT != undefined) {
                let toAdd = `align-content: ${this.config.ALIGN_CONTENT};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("POSITION")) {
            if (typeof this.config.POSITION != undefined) {
                let toAdd = `position: ${this.config.POSITION};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ALIGN_ITEMS")) {
            if (typeof this.config.ALIGN_ITEMS != undefined) {
                let toAdd = `align-items: ${this.config.ALIGN_ITEMS};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ALIGN_SELF")) {
            if (typeof this.config.ALIGN_SELF != undefined) {
                let toAdd = `align-self: ${this.config.ALIGN_SELF};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ALL")) {
            if (typeof this.config.ALL != undefined) {
                let toAdd = `all: ${this.config.ALL};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ANIMATION_DELAY")) {
            if (typeof this.config.ANIMATION_DELAY != undefined) {
                let toAdd = `animation-delay: ${this.config.ANIMATION_DELAY}${typeof this.config.ANIMATION_DELAY == "number" ? "s" : ""};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ANIMATION_DIRECTION")) {
            if (typeof this.config.ANIMATION_DIRECTION != undefined) {
                let toAdd = `animation-direction: ${this.config.ANIMATION_DIRECTION}${typeof this.config.ANIMATION_DIRECTION == "number" ? "s" : ""};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ANIMATION_FILL_MODE")) {
            if (typeof this.config.ANIMATION_FILL_MODE != undefined) {
                let toAdd = `animation-fill-mode: ${this.config.ANIMATION_FILL_MODE}};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ANIMATION_ITERATION_COUNT")) {
            if (typeof this.config.ANIMATION_ITERATION_COUNT != undefined) {
                let toAdd = `animation-iteration-count: ${this.config.ANIMATION_ITERATION_COUNT}};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ANIMATION_NAME")) {
            if (typeof this.config.ANIMATION_NAME != undefined) {
                let toAdd = `animation-name: ${this.config.ANIMATION_NAME}};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ANIMATION_PLAY_STATE")) {
            if (typeof this.config.ANIMATION_PLAY_STATE != undefined) {
                let toAdd = `animation-play-state: ${this.config.ANIMATION_PLAY_STATE}};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ANIMATION_TIMING_FUNCTION")) {
            if (typeof this.config.ANIMATION_TIMING_FUNCTION != undefined) {
                let toAdd = `animation-timing-function: ${this.config.ANIMATION_TIMING_FUNCTION}};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (this.config.hasOwnProperty("ASPECT_RATIO")) {
            if (typeof this.config.ASPECT_RATIO != undefined) {
                let toAdd = "";
                if (typeof this.config.ASPECT_RATIO == "object") {
                    toAdd = `aspect-ratio: ${this.config.ASPECT_RATIO.toASR()}`;
                }
                else {
                    toAdd = `aspect-ratio: ${this.config.ASPECT_RATIO};\n`;
                }
                localCSS = localCSS.concat(toAdd);
            }
        }
        localCSS = localCSS.concat("\n}\n");
        return localCSS;
    }
}
export class Main {
    constructor() { }
    static get instance() {
        if (!__classPrivateFieldGet(_a, _a, "f", _Main_instance)) {
            __classPrivateFieldSet(_a, _a, new _a(), "f", _Main_instance);
        }
        return __classPrivateFieldGet(_a, _a, "f", _Main_instance);
    }
    static set setClasses(props) {
        this._properties = props;
    }
    static checkFileExists(filepath) {
        let flag = true;
        try {
            fs.accessSync(filepath, fs.constants.F_OK);
        }
        catch (e) {
            flag = false;
        }
        return flag;
    }
    static get getProps() {
        return this._properties;
    }
    static addProps(input) {
        this._properties = this._properties.concat(input);
    }
    static compile(path) {
        const globalCssExists = this.checkFileExists(path);
        if (globalCssExists) {
            try {
                fs.unlinkSync(path);
            }
            catch (error) {
                throw new Error("An error occurred deleting css: " + error);
            }
        }
        let toWrite = "";
        for (let i = 0; i < this.getProps.length; i++) {
            toWrite = toWrite.concat(this.getProps[i].compileClass());
        }
        fs.writeFileSync(path, toWrite);
    }
}
_a = Main;
_Main_instance = { value: void 0 };
Main._properties = [];
