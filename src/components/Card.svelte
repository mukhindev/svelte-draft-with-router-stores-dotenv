<script>
  export let id = ''
  export let to = ''
  export let title = ''
  export let body = ''
</script>

<style>
.card {
  background-color: #FFF;
}
.card-body {
  padding: 0.5rem;
}
</style>

<div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
    {#if title}
    <h5 class="card-title"><a href="{to}">{title}</a></h5>
    {/if}
    <p class="card-text">{body}</p>
  </div>
</div>
