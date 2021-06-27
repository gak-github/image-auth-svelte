<script>
    import store from '../store/store-account';
    import ImageList from './ImageList.svelte';
    import Signin from './Signup.svelte';
    import page from 'page';
    
    let isSubmitting = false;
    let email = "";
    
    const checkAccount = async (account) => {
        try {
            fetch('/.netlify/functions/express', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(account)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                isSubmitting = false;
                page('/images');
            });

            // update the store with recently added account
    

        } catch (error) {
            console.log("===error while creating an ===", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault()
        if (email === "") {
            return;
        }
        isSubmitting = true;
        store.update(() => {
            return { email }
        });
        // checkAccount({email});
        email = '';
        isSubmitting = false;
        page('/images');
    };

    const setEmail = (e) => {
        email = e.target.value;
    };
</script>

{#if isSubmitting }
    <div><p>Loading...</p></div>
{:else }
    <div class="container">
        <h2>Signup</h2>
        <form on:submit={onSubmit}>
            <div>
                <input
                type="email"
                bind:value={email}
                on:change={ setEmail }
                placeholder="Enter email address to signup"
                on:focus={ e => e.target.value = ''}
                on:blur={ e => e.target.value = email }
                />
            </div>
            <button class="btn">Continue</button>
        </form>
        <div>
            <span>Already have an account?</span><a href='/login'>Login</a>
        </div>
    </div>
{/if}