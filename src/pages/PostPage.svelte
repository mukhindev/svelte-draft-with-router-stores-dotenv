<script>
  import Card from '../components/Card.svelte'
  import { getPostById } from '../stores/posts'
  
  export let page

  const { id } = page.params
  let post = getPostById(id)
</script>

<style>

</style>

<svelte:head>
  <title>Пост {id}</title>
</svelte:head>

<main class="container">
  <section>
    {#await post}
    Загрузка...
    {:then data}
    <h1 class="mb-2">{data.title}</h1>
    <Card
      body="{data.body}"
      to="/posts/{id}"
    />
    {/await}
  </section>
</main>
