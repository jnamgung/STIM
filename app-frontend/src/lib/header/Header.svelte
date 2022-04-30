<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a href="/">
			<h2>STIM</h2>
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/severity_levels'}>
				<a sveltekit:prefetch href="/severity_levels">Severity Level</a>
			</li>
			<li class:active={$page.url.pathname === '/another_page'}>
				<a sveltekit:prefetch href="/another_page">Another Page</a>
			</li>
			<li class:active={$page.url.pathname === '/overstimulated'}>
				<a sveltekit:prefetch href="/overstimulated">Overstimulated</a>
			</li>
			<li class:active={$page.url.pathname === '/actions'}>
				<a sveltekit:prefetch href="/actions">Actions</a>
			</li>
			<li class:active={$page.url.pathname === '/symptoms'}>
				<a sveltekit:prefetch href="/symptoms">Symptoms</a>
      		</li>
			<li class:active={$page.url.pathname === '/emergency_contact'}>
				<a sveltekit:prefetch href="/emergency_contact">Emergency Contact</a>
			</li>
			<li class:active={$page.url.pathname === '/first_responder'}>
				<a sveltekit:prefetch href="/first_responder">First Responder</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 10em;
		height: 4em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: #bec6ff;
		--text-color: #444444;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
