import { createInterface } from "readline";
import { promisify } from "util";

export function color(str: string = "", fg?: COLOR, effect?: EFFECT, bg?: BACKGROUND) {
	const result = [str, "\x1b[89m\x1b[0m"];
	if (fg) result.unshift(fg);
	if (effect) result.unshift(effect);
	if (bg) result.unshift(bg);
	return result.join("");
}

export async function input(prompt = "", def = "") {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const ask = promisify(rl.question).bind(rl) as unknown as (prompt: string) => Promise<string>;
	const result = await ask(prompt);
	rl.close();
	return result ?? def;
}