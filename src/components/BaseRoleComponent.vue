<template>
  <li
    class="col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
  >
    <div class="flex-1 flex flex-col p-4">
      <slot></slot>
      <h3 class="mt-3 text-lg font-medium">{{ title }}</h3>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "description", "selected"],
};
</script>
