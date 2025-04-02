import { cssClass, cssRGBA, Main, cssAspectRatio } from "./classes.mjs";

Main.setClasses = [
	new cssClass({
		NAME: ".hi",
		POSITION: "absolute",
		ACCENT_COLOR: new cssRGBA(255, 255, 255),
		ANIMATION_DURATION: "inherit",
	}),
	new cssClass({
		NAME: ".bye",
		POSITION: "static",
		ALIGN_CONTENT: "center",
		ANIMATION_DELAY: 0.5,
		ASPECT_RATIO: new cssAspectRatio(10, 40),
	}),
	new cssClass({
		NAME: "p",
		POSITION: "absolute",
	}),
];
Main.addProps([
	new cssClass({
		NAME: ".chase",
		ANIMATION_DURATION: "inherit",
		ASPECT_RATIO: "initial",
	}),
]);

Main.compile("C:\\Users\\chase_qlo04cr\\sideProjects\\jazzCss\\jazz-css\\build\\global.css");
