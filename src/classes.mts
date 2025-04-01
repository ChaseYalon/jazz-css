import fs from "fs";
export class cssRGBA {
    r : number;
    g : number;
    b : number;
    a : number;
    constructor(r : number, g : number, b : number, a : number = 1){

        this.r = r ;
        this.g = g ;
        this.b = b ;
        this.a = a;
    }
    toRGB():string{
        return `rgba(${this.r},${this.g},${this.b},${this.a})`
    }
}
export interface cssInput {
    "NAME" : string; /*name of the class with the dot so "<div class="hi"></div>" would be const whatever = new cssClass({NAME : .hi})*/
    "ACCENT_COLOR"?: cssRGBA; /*CSS acccent collor propertey*/
    "ALIGN_CONTENT"?:"normal"|"start"|"center"|"end"|"flex-start"|"flex-end"; /*there are more proppeties to add */
    "POSITION"?: "static"|"relative"|"absolute"|"fixed"|"sticky"; /*css position propertey*/
    "ALIGN_ITEMS"? : "normal"|"stretch"|"center"|"flex-start"|"flex-end"|"start"|"end"|"baseline"|"initial"|"inherit"; /*css Align items property */
    "ALIGN_SELF"? : "auto"|"stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit"; /*css align-self propertey*/
    "ALL"? : "initial"|"inherit"|"unset";/*css all propertey*/
    "ANIMATION_DELAY"?: number|"initial"|"inherit";/*Css annimation dellay propertey*/
    "ANIMATION_DIRECTION"?: "normal"|"reverse"|"alternate"|"alternate-reverse"|"initial"|"inherit";/*css annimation directon propertey*/
    "ANIMATION_DURRATION"?: number|"initial"|"inherit"; /*CSS animation delay propertey*/


}

export class cssClass {
    config: cssInput;

    constructor(config: cssInput) {
        this.config = config;
    }
}
export class Main{
    static #instance: Main;
    public static _properties : cssClass[] = [];
    
    private constructor() { }

    public static get instance(): Main {
        if (!Main.#instance) {
            Main.#instance = new Main();
        }

        return Main.#instance;
    }
    public static set setClasses(props:cssClass[]){
        this._properties=props;
    }
    private static checkFileExists(filepath:string):boolean{
        let flag = true;
        try{
          fs.accessSync(filepath, fs.constants.F_OK);
        }catch(e){
          flag = false;
        }
        return flag;
    }
    public static get getProps(){
        return this._properties;
    }
    private static compileClass(input:cssClass):string{
        let localCSS = 
`
${input.config.NAME} {
`
        if(input.config.hasOwnProperty("ACCENT_COLOR")){
            if(typeof(input.config.ACCENT_COLOR)!=undefined){
                let toAdd =`accent-color: ${input.config.ACCENT_COLOR.toRGB()};\n`;
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("ALIGN_CONTENT")){
            if(typeof(input.config.ALIGN_CONTENT)!=undefined){
                let toAdd = `align-content: ${input.config.ALIGN_CONTENT};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("POSITION")){
            if(typeof(input.config.POSITION)!=undefined){
                let toAdd = `position: ${input.config.POSITION};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("ALIGN_ITEMS")){
            if(typeof(input.config.ALIGN_ITEMS)!=undefined){
                let toAdd = `align-items: ${input.config.ALIGN_ITEMS};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("ALIGN_SELF")){
            if(typeof(input.config.ALIGN_SELF)!=undefined){
                let toAdd = `align-self: ${input.config.ALIGN_SELF};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("ALL")){
            if(typeof(input.config.ALL)!=undefined){
                let toAdd = `all: ${input.config.ALL};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("ANIMATION_DELAY")){
            if(typeof(input.config.ANIMATION_DELAY)!=undefined){
                let toAdd = `animation-delay: ${input.config.ANIMATION_DELAY}${typeof(input.config.ANIMATION_DELAY)=="number"?"s":""};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("ANIMATION_DIRECTION")){
            if(typeof(input.config.ANIMATION_DIRECTION)!=undefined){
                let toAdd = `animation-direction: ${input.config.ANIMATION_DIRECTION}${typeof(input.config.ANIMATION_DIRECTION)=="number"?"s":""};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("ANIMATION_DURRATION")){
            if(typeof(input.config.ANIMATION_DURRATION)!=undefined){
                let toAdd = `animation-durration: ${input.config.ANIMATION_DURRATION}${typeof(input.config.ANIMATION_DURRATION)=="number"?"s":""};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        localCSS = localCSS.concat("\n}")
        return localCSS;
    }

    public static compile(path:string):void{

        const globalCssExisits:boolean = this.checkFileExists(path);
        if(globalCssExisits){
            try {
                fs.unlinkSync(path);
              } catch (error) {
                throw new Error("An error occured deleting css: "+error);
              }
        }
        let toWrite : string = "";

        for(let i = 0; i < this.getProps.length; i++){
            toWrite = toWrite.concat(this.compileClass(this.getProps[i]));
        }
        fs.writeFileSync("/home/ChaseYalon/jazz-css/build/global.css",toWrite);
    }
}
