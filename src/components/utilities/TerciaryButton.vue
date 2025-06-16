<template>
    <button class="terciary-btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default{}
  </script>
  
  <style scoped>
  .terciary-btn {
      all: unset;
      cursor: pointer;
      background-color: #4ADE80;
      border: 1px solid #ffffff;
      color: #ffffff;
      border-radius: 0.25rem;
      text-align: center;
      padding: 0.25rem 0.5rem;
  }
  
  .terciary-btn:hover {
    background-color: #ffffff;
    color: #4ADE80;
    border-color: #4ADE80;
    transition: background-color 0.3s ease;
    transform: scale(1.1);
  }
  </style>
  