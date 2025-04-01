export class cssRGBA {
    r : number;
    g : number;
    b : number;
    a : number;
    constructor(r : number, g : number, b : number, a : number = 1){

        this.r = r % 255;
        this.g = g % 255;
        this.b = b % 255;
        this.a = a;
    }
}
export interface cssInput {
    "NAME" : string; /*name of the class with the dot so "<div class="hi"></div>" would be const whatever = new cssPropertey({NAME : .hi})*/
    "ACCENT-COLOR"?: cssRGBA; /*CSS acccent collor propertey*/
    "ALLIGN-CONTENT"?:"normal"|"start"|"center"|"end"|"flex-start"|"flex-end"; /*there are more proppeties to add */
    "POSITION"?: "static"|"relative"|"absolute"|"fixxed"|"sticky"; /*css position propertey*/

}

export class cssProperty {
    config: cssInput;

    constructor(config: cssInput) {
        this.config = config;
    }
}
export class Main {
    private static instance: Main | null = null;

    // Private constructor to prevent external instantiation
    properties : cssProperty[];
    private constructor(properties:cssProperty[]) {
        this.properties = properties;
    }

    // Static method to get the instance
    public static getInstance(): Main {
        if (!Main.instance) {
            Main.instance = new Main(this.properties);
        }
        return Main.instance;
    }

}
