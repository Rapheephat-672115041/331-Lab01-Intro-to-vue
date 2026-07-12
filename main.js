const {createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const productDescription = ref('You wear it in mud, or in rainy day')

        return {
            product,
            productDescription
        }
    }
}).mount('#app')