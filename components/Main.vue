<script setup>
const { listProducts  } = useProducts();
const { form } = useForm();
</script>

<template>
    <section class="px-8 bg-gray-300 min-h-screen pt-8">
        <h1 class="text-2xl">Добавление товара</h1>
        <div class="flex mx-auto mt-3">
            <div class="basis-1/4">
                <AddingProduct
                    v-model="form"
                />
            </div>
            <div class="ml-4 basis-3/4 grid grid-cols-3 gap-4">
                <Card
                    v-for="product in listProducts"
                    :title="product.title"
                    :description="product.description"
                    :price="product.price"
                    :picture="product.picture"/>
            </div>
        </div>

    </section>
</template>
