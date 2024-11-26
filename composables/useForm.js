const { listProducts, sortType } = useProducts();
const { setItem } = useStorage();

const form = ref({
    title: "",
    description: "",
    price: null,
    picture: "",
});
const isFormFilled = ref(false);

watch(form.value, () => {
    isFormFilled.value = Object.values(form.value).every((value) => Boolean(value) === true)
})

function addProduct(formFields) {
    listProducts.value.push({
        title: formFields.title,
        description: formFields.description,
        price: +formFields.price,
        picture: formFields.picture,
    })
    sortType.value = 'default';

    setItem('products', JSON.stringify(listProducts.value));
}

export function useForm() {
    return({
        form,
        addProduct,
        isFormFilled,
    });
}
