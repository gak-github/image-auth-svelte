<script>
  import store from '../store/store-account';

  export let image;
  const clickHandler = (e) => {
    e.preventDefault();
    let imageId = e.target.id;
    store.update(currentStore => {
        return {
            ...currentStore,
            imageId
        }
    });
  }
</script>

<li>
    <img src={image.src} id={image.id} alt={image.name} 
      on:click={clickHandler} />
</li>