<script setup>
const { sortedProducts  } = useProducts();
const { form } = useForm();
const { sortType } = useProducts();

</script>

<template>
    <section class="px-8 bg-stone-200 min-h-screen py-8">
        <div class="flex justify-between">
            <h1 class="text-2xl">Добавление товара</h1>
            <select v-model="sortType" class="focus:ring-0 p-3 rounded-md text-center text-stone-400 text-sm shadow-input">
                <option value="default">По умолчанию</option>
                <option value="increase">По цене ↑</option>
                <option value="decrease">По цене ↓</option>
                <option value="name">По наименованию</option>
            </select>
        </div>

        <div class="flex mx-auto mt-3">
            <div class="basis-1/4 min-w-80">
                <AddingProduct
                    v-model="form"
                />
            </div>
            <div class="ml-4 basis-3/4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <Card
                    v-for="product in sortedProducts"
                    :title="product.title"
                    :description="product.description"
                    :price="product.price"
                    :picture="product.picture"/>
            </div>
        </div>

    </section>
</template>
