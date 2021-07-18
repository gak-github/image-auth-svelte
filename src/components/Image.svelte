<script>
  import store from '../store/store-account';

  export let image;
  const clickHandler = (e) => {
    e.preventDefault();
    let imageId = e.target.id;
    if ($store.selected) {
      $store.selected.style.height = '200px';
      $store.selected.style.width = '200px';
    }
    let selected = e.target;

    e.target.style.height = '240px';
    e.target.style.width = '240px';
    e.target.style.transition = "width 0.2s ease"
    store.update(currentStore => {
        return {
            ...currentStore,
            imageId,
            selected
        }
    });
  };
</script>
<li>
    <img src={image.src} id={image.id} alt={image.name} 
      on:click={clickHandler} />
</li>
