import typescript from '@rollup/plugin-typescript';
import shebang from 'rollup-plugin-preserve-shebang';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/index.ts",
	output: {
		file: "./index.js",
		format: "es",
	},
	plugins: [
		commonjs(),
		typescript(),
		shebang(),
		resolve(),
		terser(),
	]
};