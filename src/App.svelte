<script lang="ts">
	import Checkbox from "./Checkbox.svelte";
</script>

<main>
	<h1>New Svelte Application</h1>
	<h2>Don't forget to change the following:</h2>

	<div class="cards">
		<div class="card license">
			<h2>LICENSE</h2>
			<Checkbox>
				Change the license to one appropriate for the project (currently GPL-3.0)
			</Checkbox>
		</div>
		<div class="card index">
			<h2>index.html</h2>
			<Checkbox>Change the title</Checkbox>
			<Checkbox>Add a description</Checkbox>
			<Checkbox>Add keywords</Checkbox>
			<Checkbox>Add Facebook meta tags</Checkbox>
			<Checkbox>Change the icon</Checkbox>
		</div>
		<div class="card package">
			<h2>package.json</h2>
			<Checkbox>Add a name</Checkbox>
			<Checkbox>Add a description</Checkbox>
			<Checkbox>Add the repo url (git+<code>‹url›</code>.git)</Checkbox>
			<Checkbox>Add keywords</Checkbox>
			<Checkbox>Add the bugs URL (github issues page)</Checkbox>
			<Checkbox>Add the homepage URL (github page or website link)</Checkbox>
		</div>
		<div class="card files">
			<h2>files</h2>
			<Checkbox>Delete the contents of App.svelte (this notification)</Checkbox>
			<Checkbox>Remove Checkbox.svelte (used for this notification)</Checkbox>
			<Checkbox>Create a new README</Checkbox>
		</div>
	</div>
	<h2>Support</h2>
	<div class="cards cards2">
		<div class="card typescript">
			<h2>TypeScript</h2>
			To use TypeScript it in your Svelte files just add&nbsp<code>lang="ts"</code> to your script
			block.
		</div>
		<div class="card scss">
			<h2>SCSS</h2>
			To use SCSS in your Svelte files just add&nbsp<code>lang="scss"</code> to your style block.
		</div>
	</div>
</main>

<style lang="scss">
	main {
		background: var(--bg-primary);
		color: var(--fg-primary);
		font-size: 1.6rem;

		min-height: 100%;

		display: grid;
		place-content: center;
		place-items: center;
		gap: 1rem;
	}
	h1 {
		text-transform: uppercase;
		-webkit-text-stroke: 2px var(--primary);
		font-size: 3em;
		text-align: center;
	}
	.cards {
		display: grid;
		gap: 1rem;
		grid-template: repeat(5, 1fr) / repeat(5, 1fr);
		width: 70vw;
		grid-template-areas:
			"l l p p p"
			"l l p p p"
			"i i p p p"
			"i i f f f"
			"i i f f f";
	}
	.card {
		h2 {
			font-size: 1.2em;
			margin-bottom: 0.5rem;
			color: var(--primary);
		}
		background: var(--bg-secondary);
		padding: 1rem;
		border-radius: 0.5rem;
	}
	.cards2 {
		h2 {
			color: white;
		}
		grid-template: 1fr / 1fr 1fr;
	}
	.typescript {
		background: #3178c6;
	}
	.scss {
		background: #cc6699;
	}
	.license {
		grid-area: l;
	}
	.package {
		grid-area: p;
	}
	.index {
		grid-area: i;
	}
	.files {
		grid-area: f;
	}
</style>
