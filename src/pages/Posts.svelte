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
    <Card
      title="{postById(id).title}"
      body="{postById(id).body}"
      to="/posts/{id}"
    />
    {/each}
  </section>
</main>
