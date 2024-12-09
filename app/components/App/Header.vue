<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const mobileMenuOpen = ref(false);

const navigation: NavigationMenuItem[] = [
  { label: "Inicio", to: "/" },
  {
    label: "Sobre nosotros",
    children: [
      { label: "Historia", to: "/historia", icon: "heroicons:newspaper" },
      {
        label: "Instalaciones",
        to: "/instalaciones",
        icon: "heroicons:building-office-2",
      },
      {
        label: "Proyecto Pedagógico",
        to: "/proyecto-pedagogico",
        icon: "heroicons:academic-cap",
      },
      {
        label: "Resultados",
        to: "/resultados",
        icon: "heroicons:arrow-trending-up",
      },
    ],
  },
  { label: "Incripciones", to: "/aux" },
  { label: "Contacto", to: "/aux" },
];
</script>

<template>
  <header class="sticky inset-x-0 top-0 z-50 bg-white border-b border-gray-100">
    <UContainer class="flex items-center justify-between py-4 lg:py-2.5">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <UButton
          @click="mobileMenuOpen = true"
          type="button"
          variant="soft"
          color="neutral"
          icon="heroicons:bars-3-bottom-left-16-solid"
        />
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <UNavigationMenu
          color="primary"
          variant="link"
          orientation="horizontal"
          :items="navigation"
          :ui="{ childList: 'grid grid-cols-1 gap-2' }"
        />
      </div>
    </UContainer>
    <USlideover v-model:open="mobileMenuOpen" :ui="{ header: 'py-4' }">
      <template #header>
        <div class="flex justify-between items-center">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="/logo.png" alt="" />
          </a>
          <UButton
            @click="mobileMenuOpen = false"
            type="button"
            variant="soft"
            color="neutral"
            icon="heroicons:x-mark-16-solid"
          />
        </div>
      </template>
      <template #body>
        <UNavigationMenu
          color="primary"
          orientation="vertical"
          :items="navigation"
          :ui="{ link: 'py-3', list: 'space-y-1.5' }"
        />
      </template>
    </USlideover>
  </header>
</template>
