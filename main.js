const {createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const productDescription = ref('You wear it when wearing studs')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)

        return {
            product,
            productDescription,
            image,
            link,
            inStock,
            inventory,
            onSale
        }
    }
}).mount('#app')