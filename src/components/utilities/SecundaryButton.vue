<template>
    <button class="secundary-btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default{}
  </script>
  
  <style scoped>
  .secundary-btn {
      all: unset;
      cursor: pointer;
      background-color: rgba(21, 128, 61, 0.7);
      border: 1px solid #FFFFFF;
      color: #FFFFFF;
      border-radius: 0.25rem;
      text-align: center;
      padding: 0.25rem 0.5rem;
  }
  
  .secundary-btn:hover {
    background-color: #FFFFFF;
    color: #15803D;
    border-color: #FFFFFF;
    transition: background-color 0.3s ease;
    transform: scale(1.1);
  }
  </style>
  