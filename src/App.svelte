<script>
	import { onMount } from 'svelte';
	import Header from './components/Header.svelte';
	import Balance from './components/Balance.svelte';
	import store from './store/store-transactions';
	import axios from 'axios';

	let transactions;
	onMount( async () => {
		try {
            const res = await axios.get("/.netlify/functions/express");
            store.set(
                {
                    //transactions: res.data.data
                }
			);
			store.subscribe( (existingStore) =>{
				//transactions = existingStore.transactions;
			});
        } catch (error) {
			// update the store with error and show error message in the page ==> TODO
			//transactions = [{}];
        }
	});
</script>

<Header/>
<div class="container">
</div>