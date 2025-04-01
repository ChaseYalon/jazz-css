import fs, { glob } from "fs";

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
    "ALLIGN_CONTENT"?:"normal"|"start"|"center"|"end"|"flex-start"|"flex-end"; /*there are more proppeties to add */
    "POSITION"?: "static"|"relative"|"absolute"|"fixed"|"sticky"; /*css position propertey*/

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
            if(typeof(input.config.ALLIGN_CONTENT)!=undefined){
                let toAdd = `align-content: ${input.config.ALLIGN_CONTENT};\n`
                localCSS = localCSS.concat(toAdd);
            }
        }
        if(input.config.hasOwnProperty("POSITION")){
            if(typeof(input.config.POSITION)!=undefined){
                let toAdd = `position: ${input.config.POSITION};\n`
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
        console.log("toWrite is ",toWrite);
        console.log("Path is ",path);
        fs.writeFileSync(path,toWrite);
    }
}
