<script setup>
const { isFormFilled } = useForm();

const { classes } = defineProps({
    classes: { type: [String, Array], required: false }
})
</script>
<template>
    <button
        :class="classes">
        <slot></slot>
    </button>
</template>
