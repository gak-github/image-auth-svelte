<script>
    import Image from './Image.svelte';
    import store from '../store/store-account';
    import page from 'page';

    let isSubmitting = false;
    let images = [
        {id: 1, name: 'one', src: './images/1.jpg'},
        {id: 2, name: 'two', src: './images/2.jpg'},
        {id: 3, name: 'three', src: './images/3.jpg'},
        {id: 4, name: 'four', src: './images/4.jpg'},
        {id: 5, name: 'five', src: './images/5.jpg'}
    ];

    const onSubmit = async (e) => {
        e.preventDefault();
        if ($store.imageId === '') {
            return;
        }      
        isSubmitting = true;
        let isLoggedIn;
        let isAccountCreated;
        let isAccountExist;
        let payload = {
            email: $store.email, // store variable should be accessed with $variable_name
            isLoginSubmit: $store.isLoginSubmit,
            imageId: $store.imageId
        };

        try {
            await fetch('/.netlify/functions/express', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(payload)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                isSubmitting = false;
                isLoggedIn = data.data.isAuthenticated;
                isAccountCreated = data.data.isAccountCreated;
                isAccountExist = data.data.isAccountExist;
            });
        } catch (error) {
            console.log("===error while creating an ===", error);
        }
        store.update( (existingStore) => {
            return {
                ...existingStore,
                isLoggedIn,
                isAccountCreated,
                isAccountExist
            }
        });

        if (isAccountCreated || isLoggedIn) {
            page('/success');
        } else if (isAccountExist) {
            page('/signup');
        } else {
            console.log("====== should not be coming here===")
            page('/error');
        }
  };
</script>

{ #if isSubmitting }
  <div>
    <p>Submitting the data....</p>
  </div>
{:else}
    <h5>Please select an image for {$store.email}</h5>
    <div>
        <ul class='list'>
            { #each images as image }
                <Image image={image} />
            { /each }
        </ul>
        <form on:submit={onSubmit}>
            <button class="btn">Submit</button>
        </form>
    </div>
{/if}