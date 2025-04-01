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
export class cssClass {
    constructor(config) {
        this.config = config;
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
    static compileClass(input) {
        let localCSS = `
${input.config.NAME} {
`;
        if (input.config.hasOwnProperty("ACCENT_COLOR")) {
            if (typeof (input.config.ACCENT_COLOR) != undefined) {
                let toAdd = `accent-color: ${input.config.ACCENT_COLOR.toRGB()};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (input.config.hasOwnProperty("ALIGN_CONTENT")) {
            if (typeof (input.config.ALLIGN_CONTENT) != undefined) {
                let toAdd = `align-content: ${input.config.ALLIGN_CONTENT};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if (input.config.hasOwnProperty("POSITION")) {
            if (typeof (input.config.POSITION) != undefined) {
                let toAdd = `position: ${input.config.POSITION};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        localCSS = localCSS.concat("\n}");
        return localCSS;
    }
    static compile(path) {
        const globalCssExisits = this.checkFileExists(path);
        if (globalCssExisits) {
            try {
                fs.unlinkSync(path);
            }
            catch (error) {
                throw new Error("An error occured deleting css: " + error);
            }
        }
        let toWrite = "";
        for (let i = 0; i < this.getProps.length; i++) {
            toWrite = toWrite.concat(this.compileClass(this.getProps[i]));
        }
        console.log("Path is ", path);
        fs.writeFileSync("/home/ChaseYalon/jazz-css/build/global.css", toWrite);
    }
}
_a = Main;
_Main_instance = { value: void 0 };
Main._properties = [];
