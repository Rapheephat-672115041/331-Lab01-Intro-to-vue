const productDisplay = {
  template:
    /*html*/
    `
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{'out-of-stock-image': !inStock}">
                </div>
            </div>
        </div>
        <div class="product-info">
            <h1>
                <a :href="link">{{title}}</a>
            </h1>
            <h2 v-if="onSale">{{displaySale}}</h2>
            <h3>{{productDescription}}</h3>
            <p v-if="inventory > 10 && inStock">In stock</p>
            <p>Shipping: {{shipping}}</p>
            <p v-else-if="inventory <= 10 && inventory > 0 && inStock">Almost out of stock</p>
            <p v-else>Out of stock</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant,index) in variants" :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <ul class="sizeList">
                <li v-for="size in sizes">{{size}}</li>
            </ul>
            <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add to cart</button>
            <button class="button" :disabled="!inStock || !onSale" @click="removeFromCart" :class="{disabledButton: !inStock || !onSale}" >Remove from Cart</button>
        </div>
        `,
        emits: ['add-to-cart', 'remove-from-cart'],
        props: {
            premium: Boolean
        },
  setup(props, {emit}) {
    const product = ref("Socks");
    const brand = ref("SE 331");
    const productDescription = ref("You wear it when wearing studs");
    const link = ref("https://www.camt.cmu.ac.th/");
    const inventory = ref(100);
    const onSale = ref(true);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      {
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quantity: 50,
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 10,
      },
    ]);
    const selectedVariant = ref(0);
    const sizes = ref(["S", "M", "L"]);

    function addToCart() {
      emit('add-to-cart', variants.value[selectedVariant.value].id)
    }

    function removeFromCart() {
      emit('remove-from-cart', variants.value[selectedVariant.value].id)
    }

    const title = computed(() => {
      return brand.value + " " + product.value;
    });

    function updateVariant(index) {
      selectedVariant.value = index;
    }

    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity;
    });

    const displaySale = computed(() => {
      if (onSale.value) {
        return brand.value + " " + product.value + " is on sale!";
      }

      return "";
    });

    const shipping = computed(() => {
        if (props.premium) {
            return 'Free'
        } else {
            return 30
        }
    })

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
      addToCart,
      removeFromCart,
      sizes,
      updateVariant,
      displaySale,
      shipping
    };
  },
};
