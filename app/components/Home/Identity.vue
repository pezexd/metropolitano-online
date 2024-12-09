<script setup lang="ts">
const features = [
  {
    name: "Alegría",
    description:
      "El trabajo y el aprendizaje escolar canalizado de tal forma que sea percibido por el alumno como una actividad interesante y agradable y no como generadora de rechazo y aversión.",
    icon: "heroicons:face-smile",
  },
  {
    name: "Disciplina",
    description:
      "Relacionado con su aspecto personal y con los principios universales de la moral, tales como: responsabilidad, puntualidad, el respeto y la consideración a los demás, el bien común frente al bien individual, la honestidad personal.",
    icon: "heroicons:puzzle-piece",
  },
  {
    name: "Eficiencia",
    description:
      "Vinculada a las normas de evaluación de los aprendizajes, como aspectos metodológicos que deben aplicar los profesores a fin de lograr el máximo rendimiento en relación a los propósitos establecidos, así como la permanencia en el tiempo de los conocimientos aprendidos para su correspondiente aplicación práctica en situaciones de la vida real.",
    icon: "heroicons:arrow-path",
  },
];
</script>

<template>
  <div class="bg-white py-14">
    <UContainer>
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="text-center font-display font-bold text-4xl">
          U.E Colegio Metropolitano
          <p>Puerto Ordaz</p>
        </h1>
        <p
          class="font-medium text-lg text-gray-500 before:content-['“'] after:content-['”']"
        >
          Aprendiendo con alegría, disciplina y eficiencia
        </p>
      </div>
      <div class="mt-16">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div
            class="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="flex flex-col items-start gap-4 lg:flex-col lg:items-center"
            >
              <div
                class="flex size-12 items-center justify-center rounded-full bg-[var(--ui-primary)]"
              >
                <UIcon
                  :name="feature.icon"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div class="flex flex-col lg:items-center lg:text-center">
                <h3 class="text-base font-semibold text-gray-900">
                  {{ feature.name }}
                </h3>
                <p
                  class="mt-1 text-base text-pretty text-gray-500 lg:text-center"
                >
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
