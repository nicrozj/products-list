const { listProducts } = useProducts();

const form = ref({
    title: "",
    description: "",
    price: "",
    picture: "",
});
const isFormFilled = ref(false);

watch(form.value, () => {
    isFormFilled.value = Object.values(form.value).every((value) => Boolean(value) === true)
})

function addProduct(form) {
    listProducts.value.push({
        title: form.title,
        description: form.description,
        price: form.price,
        picture: form.picture,
    })
}

export function useForm() {
    return({
        form,
        addProduct,
        isFormFilled,
    });
}
