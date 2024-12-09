<script setup lang="ts">
const features = [
  {
    name: "Nuestra misión",
    description:
      "Contribuir al desarrollo intelectual del estudiante en sus procesos de creación, difusión del conocimiento científico y tecnológico que puedan adquirir en su formación académica. Esto se logrará con la participación de los diferentes actores de la sociedad civil, así como su inserción en el ámbito social.",
    icon: "heroicons:arrows-pointing-in",
  },
  {
    name: "Nuestra visión",
    description:
      "Que el estudiante adquiera durante su formación: principios, valores, ética, responsabilidad, participación, excelencia y compromiso en función con las necesidades de su entorno social, para así participar en aquellas actividades que lo requieran. Deben consolidarse los principios integradores del conocimiento científico y tecnológico que beneficien al estudiante, a la región y al país.",
    icon: "heroicons:eye",
  },
];
</script>

<template>
  <div id="information" class="bg-white py-14">
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
            class="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="flex flex-col items-center gap-4 lg:flex-col lg:items-center"
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
              <div
                class="flex flex-col text-center lg:items-center lg:text-center"
              >
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ feature.name }}
                </h3>
                <p
                  class="mt-1 text-base text-balance text-gray-500 lg:text-center"
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
