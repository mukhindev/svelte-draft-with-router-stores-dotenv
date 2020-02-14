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
  {#each $posts as { id }}
  <div>
    <Card post = {postById(id)} />
  </div>
  {/each}
</main>
