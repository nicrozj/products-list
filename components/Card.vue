<script setup>
const { formatMoney } = useFunctions();
const { deleteProduct } = useProducts();
const { title, description, price, picture } = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="group relative bg-white rounded-md h-96 shadow-input">
        <div class="rounded-t-md h-[45%] overflow-hidden">
            <img class="object-cover" :src="picture" />
        </div>
        <div class="px-4 pb-4 pt-3 flex flex-col h-[55%] justify-between">
            <div class="flex flex-col gap-4">
                <h3 class="font-semibold text-[#3F3F3F] text-2xl">{{ title }}</h3>
                <p class="text-lg text-[#3F3F3F]">{{ description }}</p>
            </div>
            <h2 class="text-lg mt-2">{{ formatMoney(price) }} руб.</h2>
        </div>
        <button @click="deleteProduct(title)" class="transition duration-1000 ease-in group-hover:visible invisible flex items-center justify-center absolute -top-2 -right-2 size-7 text-center bg-red-400 text-white rounded-md">
            <span class="material-symbols-outlined">
                delete
            </span>
        </button>
    </div>
</template>
