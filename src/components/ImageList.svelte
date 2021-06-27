<script>
    import Image from './Image.svelte';
    import store from '../store/store-account';

    let images = [
        {id: 1, name: 'one', src: './images/1.jpg'},
        {id: 2, name: 'two', src: './images/2.jpg'},
        {id: 3, name: 'three', src: './images/3.jpg'},
        {id: 4, name: 'four', src: './images/4.jpg'},
        {id: 5, name: 'five', src: './images/5.jpg'}
    ];
</script>

<h5>Please select an image for {$store.email}</h5>
<div>
    <ul class='list'>
        { #each images as image }
            <Image image={image} />
        { /each }
    </ul>
</div>