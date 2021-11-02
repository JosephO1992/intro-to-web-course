<template>
  <div class="flex flex-col flex-grow h-full">
    <div class="flex flex-col p-5 text-xl flex-grow bg-gray-100">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageLayout",
};
</script>