<script>
    import store from '../store/store-account';
    let email = "";

    const checkAccount = async (account) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        try {
            fetch('/.netlify/functions/express', {
                method: 'post',
                body: JSON.stringify(account)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log("=====data====", data);
            });
            // update the store with recently added account
            store.update( (existingStore) => {
                return { account: [...existingStore.account, account] };
            });

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