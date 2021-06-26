<script>
    // import store from '../store/store-account';
    import page from 'page';

    let email = "";

    const checkAccount = async (account) => {
        try {
            fetch('/.netlify/functions/express', {
                method: 'post',
                body: JSON.stringify(account)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log("=====data====", data);
                page('/images');
            });
            // update the store with recently added account
            // store.update( (existingStore) => {
            //     return { account: [...existingStore.account, account] };
            // });

        } catch (error) {
            console.log("===error while creating an ===", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault()
        if (email === "") {
            return;
        }
        checkAccount(email);
        email = '';
    };

    const setEmail = (e) => {
        email = e.target.value;
    };
</script>

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
        <button class="btn">Login Continue</button>
    </form>
</div>