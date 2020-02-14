<script>
  export let post
  export let to
  const { id, title, body } = post
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
    <h5 class="card-title"><a href="{to}">{title}</a></h5>
    <p class="card-text">{body}</p>
  </div>
</div>
