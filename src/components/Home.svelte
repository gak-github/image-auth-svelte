<script>
    import Innovator from './Innovator.svelte';
    let innovator = false;
    const clickHanler = (e) => {
        e.preventDefault();
        innovator = true;
    }

</script>
<div class='container'>
    { #if innovator }
        <Innovator />
    { :else }
        <button class='btn' name='innovator' on:click={clickHanler}>Innovators and Collaborators</button>
    {/if}
    <hr />
    <div class='home-container'>
        <a href='./signup'>New Signup</a>
        <a href='./login'>Login Existing User</a>
    </div>
</div>
