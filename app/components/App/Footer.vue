<script setup lang="ts">
const navigation = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/UE-Colegio-Metropolitano/100093866379072",
    icon: "mdi:facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/metropolitanoc/",
    icon: "mdi:instagram",
  },
];
</script>

<template>
  <footer class="bg-white border-t border-gray-100">
    <div
      class="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center gap-x-6 md:order-2">
        <template v-for="item in navigation">
          <NuxtLink
            :to="item.href"
            target="_blank"
            class="text-gray-600 hover:text-gray-800"
            external
          >
            <UIcon :name="item.icon" class="size-6" />
          </NuxtLink>
        </template>
      </div>
      <p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
        &copy; 2024 U.E Colegio Metropolitano Puerto Ordaz. Todos los derechos
        reservados.
      </p>
    </div>
  </footer>
</template>
