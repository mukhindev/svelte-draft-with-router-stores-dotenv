<script>
  $: links = [
    {
      href: '/',
      name: 'Главная',
    },
    {
      href: '/posts',
      name: 'Посты',
    },
    {
      href: 'https:/mukhin.dev',
      name: 'mukhin.dev',
      target: '_blank'
    }
  ]
</script>

<style>
nav {
    z-index: 99;
}
</style>

<nav class="nav">
  <ul>
    {#each links as { href, name, target }}
    <li class="nav-item">
      <a {href} {target} class="nav-link">{name}</a>
    </li>
    {/each}
  </ul>
</nav>
