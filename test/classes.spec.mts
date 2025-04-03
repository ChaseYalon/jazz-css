import { cssClass, cssRGBA, Main, cssAspectRatio } from "../src/classes.mjs";
import fs from "fs";
import {describe,it,assert} from "chai"

Main.setClasses = [
	new cssClass({
		NAME : ".classOne",
		ACCENT_COLOR : new cssRGBA(100,50,30,1)
	})
];
const path = "/home/ChaseYalon/JAZZ-CSS/build/global.css"
Main.compile(path);

describe('Jazzy css test suite', () => {
	it('Accent_color propertey', () => {
		const result : string = fs.readFileSync(path,"utf-8");
	  assert.equal(result, ".classOne{\naccent-color:rgba(100,50,30,1)\n}\n", 'Test passed, accent-color is working.');
	});
  });
