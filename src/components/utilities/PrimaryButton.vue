<template>
    <button
      :class="['primary-btn', customClass]"
      :type="type"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  defineProps({
    type: {
      type: String,
      default: 'button'
    },
    customClass: {
      type: String,
      default: ''
    }
  })
  
  defineEmits(['click'])
  </script>
  
  <style scoped>
  .primary-btn {
    background-color: #2d89ef;
    color: white;
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .primary-btn:hover {
    background-color: #1c64d1;
  }
  </style>
  