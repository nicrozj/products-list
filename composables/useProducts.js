const listProducts = ref([
    {
        title: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        picture: 'https://static.autox.com/uploads/2022/11/Audi-RS6-Avant-performance-202304.jpg'
    }
]);

export function useProducts() {
    return({
        listProducts
    })
}
