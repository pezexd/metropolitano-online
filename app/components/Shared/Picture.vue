<script setup lang="ts">
defineProps<{
  image: string;
}>();

const isOpen = ref(false);
</script>

<template>
  <div @click="isOpen = true">
    <img
      v-if="image"
      width="527"
      height="430"
      :src="image"
      class="h-auto w-full max-h-[430px] rounded-md transition-all duration-200 border-image brightness-[.8] hover:brightness-100 will-change-[filter] object-cover cursor-pointer"
    />
  </div>
  <div v-if="isOpen" class="fixed w-full h-full inset-0 z-[9999]">
    <div class="absolute inset-0 w-full h-full bg-black">
      <img
        :src="image"
        class="object-cover w-full h-full blur-[70px] brightness-[.6]"
        alt=""
      />
    </div>

    <UContainer
      class="overflow-x-hidden relative flex items-center justify-center"
    >
      <div
        class="h-full w-full max-w-7xl flex items-center justify-center relative mx-auto"
      >
        <div
          class="transition-all duration-200 overflow-hidden flex items-center justify-center w-full h-screen relative"
        >
          <div
            class="flex items-center justify-center md:justify-between gap-x-4 w-full"
          >
            <div class="relative flex items-center justify-center m-16">
              <UButton
                @click="isOpen = false"
                type="button"
                icon="heroicons:x-mark-16-solid"
                class="absolute top-0 right-0 m-4 rounded-full cursor-pointer"
                size="xl"
                variant="soft"
                color="neutral"
              />
              <img
                :src="image"
                class="w-full rounded object-contain transition-all duration-200 block"
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
