import fs from "fs";
type ini = "initial"|"inherit";

export class cssRGBA {
	r: number;
	g: number;
	b: number;
	a: number;
	constructor(r: number, g: number, b: number, a: number = 1) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
	toRGB(): string {
		return `rgba(${this.r},${this.g},${this.b},${this.a})`;
	}
}
export class cssAspectRatio {
	numerator: number;
	denominator: number;
	constructor(numerator: number, denominator: number) {
		this.numerator = numerator;
		this.denominator = denominator;
	}
	toASR(): string {
		return `${this.numerator}/${this.denominator}`;
	}
}
export class cssPosition{
	x : number;
	y : number;
	constructor(x : number, y : number){
		this.x = x;
		this.y = y;
	}
	compile():string{
		return `${this.x}% ${this.y}%`
	}
}
export interface cssInput {
	NAME: string /*name of the class with the dot so "<div class="hi"></div>" would be const whatever = new cssClass({NAME : .hi})*/;
	ACCENT_COLOR?: cssRGBA /*CSS acccent collor propertey*/;
	ALIGN_CONTENT?: "normal" | "start" | "center" | "end" | "flex-start" | "flex-end" /*there are more proppeties to add */;
	POSITION?: "static" | "relative" | "absolute" | "fixed" | "sticky" /*css position propertey*/;
	ALIGN_ITEMS?: "normal" | "stretch" | "center" | "flex-start" | "flex-end" | "start" | "end" | "baseline" | ini /*css Align items property */;
	ALIGN_SELF?: "auto" | "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | ini /*css align-self propertey*/;
	ALL?: ini | "unset" /*css all propertey*/;
	ANIMATION_DELAY?: number | ini /*Css annimation dellay propertey*/;
	ANIMATION_DIRECTION?: "normal" | "reverse" | "alternate" | "alternate-reverse" | ini /*css annimation directon propertey*/;
	ANIMATION_DURATION?: number | ini /*CSS animation delay propertey*/;
	ANIMATION_FILL_MODE?: "none" | "forwards" | "backwards" | "both" | ini /*css annimation fill mode propertey*/;
	ANIMATION_ITERATION_COUNT?: number | "infinite" | ini /*CSS annimation itteration count propertey*/;
	ANIMATION_NAME?: string | "none" | ini /*string is keyframe name*/;
	ANIMATION_PLAY_STATE?: "paused" | "running" | ini /*css animation play state prop */;
	ANIMATION_TIMING_FUNCTION?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end" | ini/*there are more properties*/;
	ASPECT_RATIO?: cssAspectRatio | ini /*css aspect ratio*/;
	BACKDROP_FILTER?: "none"|string|ini;/*to use a custom filter pass it as a string*/
	BACKFACE_VISIBILITY?: "visible"|"hidden"|ini;
	/*add background psudeoclass */

	BACKGROUND_ATTACHMENT?: "scroll"|"fixed"|"local"|ini;
	BACKGROUND_BLEND_MODE?: "normal"|"multiply"|"screen"|"overlay"|"darken"|"lighten"|"color-dodge"|"saturation"|"color"|"luminosity";
	BACKGROUND_CLIP?: "border-box"|"padding-box"|"content-box"|ini;
	BACKGROUND_COLOR?: cssRGBA | "transparent"|ini;
	BACKGROUND_IMAGE?: string|"none"|ini;/*to use a url pass it in as a string*/
	BACKGROUND_ORIGIN?: "border-box"|"padding-box"|"content-box"|ini;
	BACKGROUND_POSITION?: cssPosition|ini; /* css position only takes an x and a y between 0 and 100. TODO: add support for "center" etc. */
	//add background position x  and y
	BACKGROUND_REPEAT?: "repeat"|"repeat-x"|"repeat-y"|"no-repeat"|ini;
}

export class cssClass {
	config: cssInput;

	constructor(config: cssInput) {
		this.config = config;
	}
	compileClass(): string {
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
				let toAdd: string = "";
				if (typeof this.config.ASPECT_RATIO == "object") {
					toAdd = `aspect-ratio: ${this.config.ASPECT_RATIO.toASR()}`;
				} else {
					toAdd = `aspect-ratio: ${this.config.ASPECT_RATIO};\n`;
				}
				localCSS = localCSS.concat(toAdd);
			}
		}
		if (this.config.hasOwnProperty("BACKDROP_FILTER")) {
			let toAdd : string = "";
			if(typeof this.config.BACKDROP_FILTER != undefined){
				toAdd = `backdrop-filter: ${this.config.BACKDROP_FILTER}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKFACE_VISIBILITY")) {
			let toAdd : string = "";
			if(typeof this.config.BACKFACE_VISIBILITY != undefined){
				toAdd = `backface-visibility: ${this.config.BACKFACE_VISIBILITY}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_ATTACHMENT")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_ATTACHMENT != undefined){
				toAdd = `background-attachment: ${this.config.BACKGROUND_ATTACHMENT}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_BLEND_MODE")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_BLEND_MODE != undefined){
				toAdd = `background-blend-mode: ${this.config.BACKGROUND_BLEND_MODE}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_CLIP")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_CLIP != undefined){
				toAdd = `backgrond-clip: ${this.config.BACKGROUND_CLIP}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_COLOR")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_COLOR != undefined){
				if (typeof this.config.BACKGROUND_COLOR == "object"){
					toAdd = `background-color: ${this.config.BACKGROUND_COLOR.toRGB()}`
				}else{
					toAdd = `background-color: ${this.config.BACKGROUND_COLOR}`;

				}
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_IMAGE")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_IMAGE != undefined){
				toAdd = `backgrond-image: ${this.config.BACKGROUND_IMAGE}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_ORIGIN")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_ORIGIN != undefined){
				toAdd = `backgrond-origin: ${this.config.BACKGROUND_ORIGIN}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_POSITION")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_POSITION != undefined){
				if (typeof this.config.BACKGROUND_POSITION == "object"){
					toAdd = `background-position: ${this.config.BACKGROUND_POSITION.compile()}`
				}
				toAdd = `backgrond-position: ${this.config.BACKGROUND_POSITION}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		if (this.config.hasOwnProperty("BACKGROUND_REPEAT")) {
			let toAdd : string = "";
			if(typeof this.config.BACKGROUND_REPEAT != undefined){
				toAdd = `backgrond-repeat: ${this.config.BACKGROUND_REPEAT}`;
			}
			localCSS = localCSS.concat(toAdd);
		}
		localCSS = localCSS.concat("\n}\n");
		return localCSS;
	}
}
export class Main {
	static #instance: Main;
	public static _properties: cssClass[] = [];

	private constructor() {}

	public static get instance(): Main {
		if (!Main.#instance) {
			Main.#instance = new Main();
		}

		return Main.#instance;
	}
	public static set setClasses(props: cssClass[]) {
		this._properties = props;
	}
	private static checkFileExists(filepath: string): boolean {
		let flag = true;
		try {
			fs.accessSync(filepath, fs.constants.F_OK);
		} catch (e) {
			flag = false;
		}
		return flag;
	}
	public static get getProps() {
		return this._properties;
	}
	public static addProps(input: cssClass[]): void {
		this._properties = this._properties.concat(input);
	}

	public static compile(path: string): void {
		const globalCssExists: boolean = this.checkFileExists(path);
		if (globalCssExists) {
			try {
				fs.unlinkSync(path);
			} catch (error) {
				throw new Error("An error occurred deleting css: " + error);
			}
		}
		let toWrite: string = "";

		for (let i = 0; i < this.getProps.length; i++) {
			toWrite = toWrite.concat(this.getProps[i].compileClass());
		}
		fs.writeFileSync(path, toWrite);
	}
}
