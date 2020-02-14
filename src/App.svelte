<script>
  import Nav from './components/Nav.svelte'

  export let page = null
  export let ctx = null

</script>

<Nav/>

{#await page}
  <p>Загрузка...</p>
{:then component}
  <svelte:component this="{component}" page="{ctx}" />
{/await}
