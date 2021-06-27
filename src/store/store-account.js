import { writable } from 'svelte/store';

const store = writable(
    {
        imageId: '',
        email: '',
        isLoggedIn: false
    }
);

export default store; 