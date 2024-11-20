<template>
    <div class="flex flex-col gap-4 bg-white rounded-sm p-6 shadow-block">
        <UInput
            type="text"
            title="Наименование товара"
            placeholder="Введите наименование товара"
        />
        <UInput
            type="textarea"
            title="Описание товара"
            placeholder="Введите описание товара"
        />
        <UInput
            type="text"
            title="Ссылка на изображение товара"
            placeholder="Введите ссылку"
        />
        <UInput
            type="text"
            title="Цена товара"
            placeholder="Введите цену"
        />
        <UButton>Добавить товар</UButton>
    </div>
</template>
