<script setup lang="ts"></script>

<template>
  <div class="relative flex flex-col">
    <SharedHeading title="Instalaciones" cover-img-src="/instalaciones.jpg" />
    <div class="py-16">
      <UContainer>
        <div class="mx-auto max-w-3xl">
          <p class="text-base/8 text-gray-700">
            El colegio cuenta con tres patios de recreo, una cancha deportiva,
            dos laboratorios y veinticuatro aulas de clase, además de las áreas
            destinadas a oficinas, biblioteca y sala de profesores; el cuarto de
            reproducción de materiales y cuatro depósitos para pinturas,
            materiales eléctricos, deportivos y de mantenimiento en general,
            tales como herramientas, equipos, etc.
          </p>
        </div>

        <h2
          class="mt-8 text-3xl text-center font-display font-semibold text-gray-900"
        >
          Imágenes
        </h2>
        <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
          <SharedPicture image="/instalaciones.jpg" />
        </div>
      </UContainer>
    </div>
  </div>
</template>
