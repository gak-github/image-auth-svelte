<script>
	import { onMount, onDestroy } from 'svelte';
	import router from 'page';
	import Signup from './components/Signup.svelte';
	import Signin from './components/Signin.svelte';
	import Success from './components/Success.svelte';
	import Error from './components/Error.svelte';
	import ImageList from './components/ImageList.svelte';
	import Header from './components/Header.svelte';
	import store from './store/store-account';
	import Home from './components/Home.svelte';
	
	let page;
	let imageId;
	let storeValue;

	router('/', () => page = Home);
	router('/login', () => page = Signin);
	router('/signup', () => page = Signup);
	router('/images', () => page = ImageList);
	router('/success', () => page = Success);
	router('/error', () => page = Error);
	router.start()

	onMount( async () => {
		try {
			storeValue = {imageId: '', isLoggedIn: false, email: ''};
            store.set({imageId, isLoggedIn: false, email: ''});
        } catch (error) {
			console.log('error while creating the store  ', error);
        }
	});
	let unsubscribe = store.subscribe(value => storeValue = value)
	onDestroy(unsubscribe);
</script>
<Header />
<svelte:component this={page} />