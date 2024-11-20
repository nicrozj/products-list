<template>
    <section class="px-8 bg-gray-300 min-h-screen pt-8">
        <h1 class="text-2xl">Добавление товара</h1>
        <div class="flex mx-auto mt-3">
            <div class="basis-1/4">
                <AddingProduct />
            </div>
            <div class="ml-4 basis-3/4 grid grid-cols-3 gap-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    </section>
</template>
