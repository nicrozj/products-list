<script setup>
const { title, type, placeholder, required } = defineProps({title: String, type: String, placeholder: String, required: Boolean });
const isActivated = ref(false);
const isFocus = ref(false);
const model = defineModel();
</script>
<template>
    <div class="flex flex-col gap-2">
        <span class="text-xs text-gray-800 text-left">{{ title }}</span>
        <input
            v-if="type=='text'"
            :placeholder="placeholder"
            v-model="model"
            @focus="isActivated = true; isFocus = true"
            @blur="isFocus = false"
            :class="[
                'font-light shadow-input rounded-md resize-none w-full px-2 py-2 placeholder:text-xs placeholder:text-stone-300 ',
                !model && isActivated && isFocus ? 'border border-red-400' : ''
            ]">
        <textarea
            v-if="type=='textarea'"
            :placeholder="placeholder"
            v-model="model"
            @focus="isActivated = true; isFocus = true"
            @blur="isFocus = false"
            :class="[
                'font-light shadow-input focus:border-0 rounded-sm resize-none w-full h-32 px-2 py-2 placeholder:text-xs placeholder:text-stone-300',
                !model && isActivated && isFocus ? 'border border-red-400' : ''
            ]">
        </textarea>
        <p v-if="required && !model && isActivated && !isFocus" class="text-red-400 text-xs tracking-tighter">Поле необходимо заполнить</p>
    </div>
</template>
