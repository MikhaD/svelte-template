#!/usr/bin/env node
import prompts from "prompts";

let deployment, github;
const cancel = { onCancel: () => process.exit(1) };

const response = await prompts([
	{
		type: "select",
		name: "template",
		message: "Project type?",
		choices: [
			{
				title: "Svelte",
				value: TEMPLATE.svelte
			},
			{
				title: "Sveltekit",
				value: TEMPLATE.sveltekit
			}
		]
	},
	{
		type: "toggle",
		name: "typescript",
		message: "Use Typescript?",
		initial: true,
		active: "yes",
		inactive: "no"
	},
	{
		type: "toggle",
		name: "scss",
		message: "Use SCSS?",
		initial: true,
		active: "yes",
		inactive: "no"
	}
], cancel);

if (response["template"] === TEMPLATE.sveltekit) {
	deployment = await prompts({
		type: "select",
		name: "platform",
		message: "Deployment platform?",
		choices: [
			{
				title: "Static",
				value: DEPLOYMENT.static
			},
			{
				title: "AWS Cloud Functions",
				value: DEPLOYMENT.aws
			},
			{
				title: "Vercel",
				value: DEPLOYMENT.vercel
			},
			{
				title: "Netlify",
				value: DEPLOYMENT.netlify
			},
			{
				title: "Node",
				value: DEPLOYMENT.node
			},
			{
				title: "Custom",
				value: DEPLOYMENT.custom
			}
		]
	}, cancel);
}

if (response["template"] === TEMPLATE.svelte || deployment?.platform === DEPLOYMENT.static) {
	github = await prompts({
		type: "toggle",
		name: "pages",
		message: "Deploy to GitHub Pages workflow?",
		initial: true,
		active: "yes",
		inactive: "no"
	}, cancel);
}

console.log(response, deployment, github);