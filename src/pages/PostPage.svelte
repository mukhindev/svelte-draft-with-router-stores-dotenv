<script>
  import { getPostById } from '../stores/posts'

  export let page
  const { id } = page.params
  let post = getPostById(id)
</script>

<style>

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<main class="container">
  <section>
    {#await post}
    Загрузка...
    {:then data}
    <h1>
      {data.title}
    </h1>
    <p>
      {data.body}
    </p>
    {/await}
  </section>
</main>
