import { cssClass, cssRGBA, Main, cssAspectRatio } from "../src/classes.mjs";
import fs from "fs";
import { test, expect } from "@jest/globals";

Main.setClasses = [
	new cssClass({
		NAME : ".classOne",
		ACCENT_COLOR : new cssRGBA(100,50,30,1)
	}),
	new cssClass({
		"NAME":".classTwo",
		"ALIGN_CONTENT":"center"
	}),
	new cssClass({
		"NAME": ".classThree",
		"POSITION":"absolute"
	})
];
const path = "build/global.css"
Main.compile(path);
const normalize = str => str.replace(/\s+/g, ' ').trim();
Main.compile(path);

test("Accent color", () => {
	let result = fs.readFileSync(path,"utf-8");
	expect(normalize(result)).toContain(normalize(`.classOne {\naccent-color: rgba(100,50,30,1);\n}\n`));
});

test("Align content", () => {
	let result = fs.readFileSync(path,"utf-8")
	expect(normalize(result)).toContain(normalize(`.classTwo {\nalign-content: center;\n}\n`));

})
test("Positions", () => {
	let result = fs.readFileSync(path,"utf-8")
	expect(normalize(result)).toContain(normalize(`.classThree {\nposition: absolute;\n}\n`));

})