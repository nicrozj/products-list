<script setup>
const { formatMoney } = useFunctions();
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
    <div class="bg-white rounded-md h-96 overflow-clip shadow-block">
        <img :src="picture" />
        <div class="p-4 flex flex-col gap-2">
            <h3 class="font-semibold text-[#3F3F3F] text-lg">{{ title }}</h3>
            <p class="text-xs text-[#3F3F3F]">{{ description }}</p>
            <h2 class="mt-2">{{ formatMoney(price) }} руб.</h2>
        </div>
    </div>
</template>
