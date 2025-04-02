import fs from "fs";
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
export interface cssInput {
	NAME: string /*name of the class with the dot so "<div class="hi"></div>" would be const whatever = new cssClass({NAME : .hi})*/;
	ACCENT_COLOR?: cssRGBA /*CSS acccent collor propertey*/;
	ALIGN_CONTENT?: "normal" | "start" | "center" | "end" | "flex-start" | "flex-end" /*there are more proppeties to add */;
	POSITION?: "static" | "relative" | "absolute" | "fixed" | "sticky" /*css position propertey*/;
	ALIGN_ITEMS?: "normal" | "stretch" | "center" | "flex-start" | "flex-end" | "start" | "end" | "baseline" | "initial" | "inherit" /*css Align items property */;
	ALIGN_SELF?: "auto" | "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit" /*css align-self propertey*/;
	ALL?: "initial" | "inherit" | "unset" /*css all propertey*/;
	ANIMATION_DELAY?: number | "initial" | "inherit" /*Css annimation dellay propertey*/;
	ANIMATION_DIRECTION?: "normal" | "reverse" | "alternate" | "alternate-reverse" | "initial" | "inherit" /*css annimation directon propertey*/;
	ANIMATION_DURATION?: number | "initial" | "inherit" /*CSS animation delay propertey*/;
	ANIMATION_FILL_MODE?: "none" | "forwards" | "backwards" | "both" | "initial" | "inherit" /*css annimation fill mode propertey*/;
	ANIMATION_ITERATION_COUNT?: number | "infinite" | "initial" | "inherit" /*CSS annimation itteration count propertey*/;
	ANIMATION_NAME?: string | "none" | "initial" | "inherit" /*string is keyframe name*/;
	ANIMATION_PLAY_STATE?: "paused" | "running" | "initial" | "inherit" /*css animation play state prop */;
	ANIMATION_TIMING_FUNCTION?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end" | "initial" | "inherit" /*there are more properties*/;
	ASPECT_RATIO?: cssAspectRatio | "initial" | "inherit" /*css aspect ratio*/;
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
