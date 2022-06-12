import { color } from "./utils";
import { stdout, stdin } from "process";

type options = {
	question?: string,
	options?: string[],
	answers?: string[],
	pointer?: string,
	color?: COLOR,
};

type coords = {
	x: number,
	y: number,
};

export default class Select {
	question: string;
	options: string[];
	answers: string[];
	color: COLOR;
	cursor: coords;
	constructor(opts: options = {}) {
		this.question = opts.question ?? "";
		this.options = opts.options?.map(e => `${opts.pointer ?? ">"} ${e}`) ?? [];
		this.answers = opts.answers ?? this.options.map(e => e.replace(/\s/gm, "").toLowerCase());
		this.color = opts.color ?? COLOR.blue;
		this.cursor = { x: 0, y: this.options.length };
	}
	start() {
		console.log(this.question);
		for (let i = 0; i < this.options.length - 1; ++i) {
			console.log(this.options[i]);
		}
		this.write(color(this.options.at(-1), this.color, EFFECT.bright));
		stdin.setRawMode(true);
		stdin.resume();
		stdin.setEncoding("utf-8");
		this.hideCursor();
		stdin.on("data", this.pn());
	}
	showCursor() { stdout.write("\x1B[?25h"); }
	hideCursor() { stdout.write("\x1B[?25l"); };
	pn() {
		return (c: string) => {
			switch (c) {
				case "\u0004": // Ctrl-d
				case "\r":
				case "\n":
					return this.enter();
				case "\u0003": return this.exit();
				case "\u001b[A": return this.upArrow();
				case "\u001b[B": return this.downArrow();
			}
		};
	}
	upArrow() {
		this.write(this.options[this.cursor.y - 1]);
		if (this.cursor.y === 1) {
			this.cursor.y = this.options.length;
			stdout.moveCursor(0, this.options.length - 1);
		} else {
			--this.cursor.y;
			stdout.moveCursor(0, -1);
		}
		this.write(color(this.options[this.cursor.y - 1], this.color, EFFECT.bright));
	}
	downArrow() {
		this.write(this.options[this.cursor.y - 1]);
		// wrap around
		if (this.cursor.y === this.options.length) {
			this.cursor.y = 1;
			stdout.moveCursor(0, 1 - this.options.length);
		} else {
			++this.cursor.y;
			stdout.moveCursor(0, 1);
		}
		this.write(color(this.options[this.cursor.y - 1], this.color, EFFECT.bright));
	}
	enter() {
		this.exit();
		stdout.moveCursor(0, (this.options.length - this.cursor.y) + 1);
		// console.log(`You selected: ${this.answer}`);
	}
	exit() {
		stdin.removeListener('data', this.pn);
		stdin.setRawMode(false);
		stdin.pause();
		this.showCursor();
	}
	get answer() {
		return this.answers[this.cursor.y - 1];
	}
	write(str: string) {
		stdout.write(str);
		stdout.cursorTo(0);
	}
}