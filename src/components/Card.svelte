<script>
  export let post
  const { id, title, body } = post
</script>

<div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{body}</p>
  </div>
</div>
