<script lang="ts">
	export let checked = false;
</script>

<div class="checkbox" {checked} on:click={() => (checked = !checked)}>
	<span class="box" />
	<span class="text">
		<slot />
	</span>
</div>

<style lang="scss">
	.checkbox {
		cursor: pointer;
		user-select: none;
		display: flex;
		gap: 0.3rem;
		margin-bottom: 0.5rem;
	}

	.box {
		display: inline-block;
		height: 1.5rem;
		aspect-ratio: 1;
		border: solid 2px var(--fg-primary);
		position: relative;
		margin-right: 0.3rem;
	}
	[checked="true"] {
		.box::before {
			content: "✔";
			position: absolute;
			top: -0.8rem;
			left: 0.1rem;
			color: var(--primary);
			font-weight: bold;
		}
		.text {
			text-decoration: line-through;
			color: var(--fg-secondary);
		}
	}
	.text {
		vertical-align: top;
		line-height: 1.5rem;
	}
</style>
