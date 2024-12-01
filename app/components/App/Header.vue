<script setup lang="ts">
const mobileMenuOpen = ref(false);

const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Sobre nosotros", to: "/aux" },
  { label: "Incripciones", to: "/aux" },
  { label: "Contacto", to: "/aux" },
];
</script>

<template>
  <header class="sticky inset-x-0 top-0 z-50 bg-white border-b border-gray-100">
    <UContainer class="flex items-center justify-between py-2.5">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <!-- <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button> -->
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <UNavigationMenu
          color="primary"
          variant="link"
          orientation="horizontal"
          :items="navigation"
        />
      </div>
    </UContainer>
    <!-- <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-400"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog> -->
  </header>
</template>
