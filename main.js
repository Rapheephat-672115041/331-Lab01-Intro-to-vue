const {createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const productDescription = ref('You wear it when wearing studs')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/')

        return {
            product,
            productDescription,
            image,
            link
        }
    }
}).mount('#app')