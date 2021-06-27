<script>
  import store from '../store/store-account';
  import page from 'page';

  export let image;
  let isSubmitting = false;

  const clickHandler = (e) => {
    e.preventDefault();
    let imageId = e.target.id;
    store.update(currentStore => {
        return {
            ...currentStore,
            imageId
        }
    });
    let payload = {
      email: $store.email, // store variable should be accessed with $variable_name
      isLoginSubmit: $store.isLoginSubmit,
      imageId
    }
  
    try {
      isSubmitting = true;
      fetch('/.netlify/functions/express', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(payload)
      }).then(function(response) {
          return response.json();
      }).then(function(data) {
          isSubmitting = false;
          store.update( (existingStore) => {
            return { email: $store.email, isLoggedIn: true }
          });

          page('/success');

      });
    } catch (error) {
        console.log("===error while creating an ===", error);
    }
  }
</script>
{ #if isSubmitting }
  <div>
    <p>Submitting the data....</p>
  </div>
{:else}
  <li>
      <img src={image.src} id={image.id} alt={image.name} 
        on:click={clickHandler} />
  </li>
{/if}