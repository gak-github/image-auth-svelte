<script>
    import store from '../store/store-account';
    import Signup from './Signup.svelte';
    import Signin from './Signin.svelte';
</script>
{ #if $store.isAccountExist }
    <div class="container">
        <div class='error'>
            <h5> This account already exists. Please try with different email!</h5>
        </div>
        <Signup />
    </div>
{:else if $store.isLoginSubmit && !$store.isAuthenticated }
    <div class="container">
        <div class='error'>
            <h5> Invalid login. Please try again!</h5>
        </div>
        <Signin />
    </div>
{/if}