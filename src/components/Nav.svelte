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
.nav {
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 99;
}
.nav-body {
  display: flex;
  margin: 0;
  padding: 0rem;
  margin: auto;
  list-style: none;
  padding: 0.5rem
}
.nav-link {
  padding: 0.5rem 0.75rem;
  transition: .25s;
  color: #000;
  text-decoration: none;
}
.nav-link:hover {
  background-color: rgb(45, 155, 95);
  color: #FFF;
}
</style>

<nav class="nav">
  <ul class="nav-body">
    {#each links as { href, name, target }}
    <li class="nav-item">
      <a {href} {target} class="nav-link">{name}</a>
    </li>
    {/each}
  </ul>
</nav>
