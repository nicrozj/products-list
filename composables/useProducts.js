const { getItem, setItem } = useStorage();

const sortType = ref("default");
const listProducts = ref(JSON.parse(getItem("products") || "[]"));
const sortedProducts = ref(JSON.parse(getItem("products") || "[]"));

watch(listProducts, () => {
    sortedProducts.value = listProducts.value;
});

watch(sortType, () => {
    sortProducts()
});

function sortProducts() {
    switch(sortType.value) {
        case 'default':
            sortedProducts.value = listProducts.value;
            break;

        case 'increase':
            sortedProducts.value.sort((item1, item2) => {
                return item1.price - item2.price;
            });
            break;

        case 'decrease':
            sortedProducts.value.sort((item1, item2) => {
                return item2.price - item1.price;
            });
            break;

        case 'name':
            sortedProducts.value.sort((item1, item2) => {
                return item1.title.localeCompare(item2.title);
            });
            break;
    }
}

function deleteProduct(title) {
    listProducts.value = listProducts.value.filter((product) => {
        console.log(product.title, title)
         return product.title !== title;
    })
    setItem('products', JSON.stringify(listProducts.value));
}

export function useProducts() {
    return({
        deleteProduct,
        sortedProducts,
        listProducts,
        sortType
    })
}
