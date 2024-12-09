<template>
  <div class="flex flex-col">
    <div class="bg-white py-16">
      <UContainer
        class="flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-x-12"
      >
        <div class="flex flex-col gap-y-2 text-5xl font-display text-vino-800">
          <p>Desbloquea el</p>
          <p><span class="font-bold">Futuro</span> de tu hijo</p>
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-pretty">
              Nuestro colegio ofrece una educación integral que abarca
            </p>
            <p>desde el nivel de Preescolar hasta Media General</p>
          </div>
          <div class="mt-auto mb-2">
            <UButton label="Más información" size="md" />
          </div>
        </div>
      </UContainer>
    </div>

    <div class="relative isolate overflow-hidden h-128">
      <NuxtImg
        src="/fachada.webp"
        class="absolute inset-0 -z-10 size-full object-cover"
        format="webp"
        fit="cover"
      />
    </div>
  </div>
</template>
