<script>
    import store from '../store/store-account';
</script>
{#if $store.isAccountCreated }
    <div class="container">
        <div class='success'>
            <h4> You have successfully created an account for {$store.email}</h4>
        </div>
    </div>
{:else}
    <div class="container">
        <div class='success'>
            <h4> You have successfully loggedin for {$store.email}</h4>
        </div>
    </div>
{/if}