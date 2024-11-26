<script setup>
const { addProduct, isFormFilled } = useForm();
const model = defineModel();
</script>
<template>
    <div class="flex flex-col gap-4 bg-white rounded-sm p-5 shadow-block">
        <UInput
            type="text"
            title="Наименование товара"
            placeholder="Введите наименование товара"
            required
            v-model="model.title"
        />
        <UInput
            type="textarea"
            title="Описание товара"
            placeholder="Введите описание товара"
            v-model="model.description"
        />
        <UInput
            type="text"
            title="Ссылка на изображение товара"
            placeholder="Введите ссылку"
            required
            v-model="model.picture"
        />
        <UInput
            type="number"
            title="Цена товара"
            placeholder="Введите цену"
            required
            v-model="model.price"
        />
        <UButton
            @click="() => isFormFilled ? addProduct(model) : ''"
            :classes="[
                'rounded-lg py-2 transition-all',
                isFormFilled ? 'bg-green-400 text-white' : 'bg-stone-100 text-gray-400'
            ]">
            Добавить товар
        </UButton>
    </div>
</template>
