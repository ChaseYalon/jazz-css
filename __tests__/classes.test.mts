import { cssClass, cssRGBA, Main, cssAspectRatio } from "../src/classes.mjs";
import fs from "fs";
import { test, expect } from "@jest/globals";

Main.setClasses = [
	new cssClass({
		NAME : ".classOne",
		ACCENT_COLOR : new cssRGBA(100,50,30,1)
	})
];
const path = "/home/ChaseYalon/JAZZ-CSS/build/global.css"
Main.compile(path);
test("Accent color", () => {
	const result : string = fs.readFileSync(path,"utf-8")
	expect(result).toBe(".classOne{\naccent-color:rgba(100,50,30,1)\n}\n");
});