<script>
	import { onMount } from 'svelte';
	import router from "page";
	import Signup from './components/Signup.svelte';
	import Signin from './components/Signin.svelte';
	import ImageList from './components/ImageList.svelte';
	import store from './store/store-account';
	
	let page;
	let images;
	router('/', () => page = Signup);
	router('/login', () => page = Signin);
	router('/signup', () => page = Signup);
	router('/images', () => page = ImageList);
	router.start()
	
	onMount( async () => {
		try {
			const res = await fetch.get("/.netlify/functions/express");
			const data = await res.json();

            store.set({ images: data });
			store.subscribe( (existingStore) => {
				images = existingStore.images;
			});
        } catch (error) {
			// update the store with error and show error message in the page ==> TODO
			images = [{}];
        }
	});
</script>

<svelte:component this={page} />