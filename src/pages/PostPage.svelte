<script>
  export let page
  const { id } = page.params
</script>

<style>

</style>

<svelte:head>
  <title>Пост {id}</title>
</svelte:head>

<h1>Пост {id}</h1>
<pre>{id}</pre>
