<script setup>
const { title, type, placeholder } = defineProps({title: String, type: String, placeholder: String });
const model = defineModel();
</script>
<template>
    <div class="flex flex-col gap-2">
        <span class="text-xs text-gray-800 text-left">{{ title }}</span>
        <input
            v-if="type=='text'"
            :placeholder="placeholder"
            v-model="model"
            class="font-light shadow-input focus:border-0 rounded-md w-full px-2 py-2 placeholder:text-xs placeholder:tracking-tight placeholder:text-stone-300"
        />
        <textarea
            v-if="type=='textarea'"
            :placeholder="placeholder"
            v-model="model"
            class="font-light shadow-input focus:border-0 rounded-sm resize-none w-full h-32 px-2 py-2 placeholder:text-xs placeholder:text-stone-300">

        </textarea>
    </div>
</template>
