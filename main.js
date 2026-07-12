const {createApp, ref, computed} = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const brand = ref('SE 331')
        const productDescription = ref('You wear it when wearing studs')
        const link = ref('https://www.camt.cmu.ac.th/')
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        const sizes = ref([
            'S', 'M', 'L'
        ])
        const cart = ref(0)

        function addToCart() {
            cart.value +=1
        }

        function toggleStockStatus() {
            inStock.value = !inStock.value
        }

        const title = computed(() => {
            return brand.value  + ' ' + product.value
        })

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })

        const displaySale = computed(() => {
            if (onSale.value) {
                return brand.value + ' ' + product.value + ' is on sale!'
            }

            return ''
        })

        function toggleSale() {
            onSale.value = !onSale.value
        }

        return {
            title,
            productDescription,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateVariant,
            toggleStockStatus,
            displaySale,
            toggleSale
        }
    }
}).mount('#app')