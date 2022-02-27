<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	/** @type {number} */
	export let status;

	/** @type {Error & {frame?: string} & {loc?: object}} */
	export let error;
</script>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>






<div class="hero min-h-screen bg-base-100 max-h-10"> 
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="text-7xl font-bold">Good job!</h1>
      <h2 class="text-3xl font-bold pt-10">You found the {status} page!</h2>
			<pre class="pt-3">Page {error.message}</pre>
    </div>
  </div>
</div>