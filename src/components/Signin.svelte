<script>
    import store from '../store/store-account';
    import page from 'page';

    let email = '';
    let isSubmitting = '';
    const onSubmit = (e) => {
        e.preventDefault()
        if (email === "") {
            return;
        }
        isSubmitting = true;
        store.update(() => {
            return {
                email,
                isLoginSubmit: true
            };
        });
        page('/images');
    };

    const setEmail = (e) => {
        email = e.target.value;
    };
</script>

{#if isSubmitting }
    <p>Loading the images...</p>
{:else}
    <div class="container">
        <h2>Signin</h2>
        <form on:submit={onSubmit}>
            <div>
                <input
                    type="email"
                    bind:value={email}
                    on:change={ setEmail }
                    placeholder="Enter email address to signin"
                    on:focus={ e => e.target.value = ''}
                    on:blur={ e => e.target.value = email }
                />
            </div>
            <button class="btn">Signin Continue</button>
        </form>
    </div>
{/if}