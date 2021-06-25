<script>
	import { onMount } from 'svelte';
	import Header from './components/Header.svelte';
	import Signup from './components/Signup.svelte';
	import store from './store/store-account';
	import axios from 'axios';

	let transactions;
	onMount( async () => {
		try {
            const res = await axios.get("/.netlify/functions/express");
            store.set(
                {
					// images: res.data.data
                }
			);
			store.subscribe( (existingStore) => {
				//images = existingStore.images;
			});
        } catch (error) {
			// update the store with error and show error message in the page ==> TODO
			//images = [{}];
        }
	});
</script>

<Header/>
<div class="container">
	<Signup />
</div>