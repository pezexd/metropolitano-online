<script setup lang="ts">
defineProps<{
  title: string;
  coverImgSrc: string;
}>();
</script>

<template>
  <div class="relative isolate overflow-hidden">
    <NuxtImg
      :src="coverImgSrc"
      class="absolute inset-0 -z-10 size-full object-cover"
    />
    <div class="absolute inset-0 -z-10 size-full bg-black/50" />
    <UContainer>
      <div class="mx-auto max-w-2xl py-32">
        <div class="text-center">
          <h1
            class="text-5xl/16 font-display font-bold tracking-tight text-balance text-white"
          >
            {{ title }}
          </h1>
        </div>
      </div>
    </UContainer>
  </div>
</template>
