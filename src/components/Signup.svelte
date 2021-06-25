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


<h3>Enter Email</h3>
<form on:submit={onSubmit}>
    <div>
        <label>Email</label>
        <input
        type="email"
        bind:value={email}
        on:change={ setEmail }
        placeholder="Enter an email address"
        on:focus={ e => e.target.value = ''}
        on:blur={ e => e.target.value = email }
        />
    </div>
    <button class="btn">Continue</button>
</form>