<script>
  import Card from '../components/Card.svelte'
  import { getPosts, posts } from '../stores/posts'
  
  getPosts()

  function postById(id) {
    return $posts.find(element => element.id === id)
  }
</script>

<svelte:head>
  <title>Посты ({$posts.length})</title>
</svelte:head>

<main class="container">
  <section class="grid">
    {#each $posts as { id }}
    <Card post={postById(id)} to="/posts/{id}"/>
    {/each}
  </section>
</main>
