<script>
    import store from '../store/store-account';
    import Signup from './Signup.svelte';
    import Header from './Header.svelte';

    store.update((existingStore) => {
        return {}
    })
</script>
<div class="container">
    <div class='error'>
        <h5> Invalid login. Please try again!</h5>
    </div>
    <Signup />
</div>