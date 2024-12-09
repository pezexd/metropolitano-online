<script setup lang="ts">
const values = [
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

const learnings = [
  {
    label: "Alegría",
    content:
      "El trabajo y el aprendizaje escolar canalizado de tal forma que sea percibido por el alumno como una actividad interesante y agradable y no como generadora de rechazo y aversión.",
    icon: "heroicons:face-smile",
  },
  {
    label: "Disciplina",
    content:
      "Relacionado con su aspecto personal y con los principios universales de la moral, tales como: responsabilidad, puntualidad, el respeto y la consideración a los demás, el bien común frente al bien individual, la honestidad personal.",
    icon: "heroicons:puzzle-piece",
  },
  {
    label: "Eficiencia",
    content:
      "Vinculada a las normas de evaluación de los aprendizajes, como aspectos metodológicos que deben aplicar los profesores a fin de lograr el máximo rendimiento en relación a los propósitos establecidos, así como la permanencia en el tiempo de los conocimientos aprendidos para su correspondiente aplicación práctica en situaciones de la vida real.",
    icon: "heroicons:arrow-path",
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
          class="font-medium text-base text-gray-500 before:content-['“'] after:content-['”']"
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
              v-for="value in values"
              :key="value.name"
              class="flex flex-col items-center gap-4 lg:flex-col lg:items-center"
            >
              <div
                class="flex size-12 items-center justify-center rounded-full bg-[var(--ui-primary)]"
              >
                <UIcon
                  :name="value.icon"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div
                class="flex flex-col text-center lg:items-center lg:text-center"
              >
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ value.name }}
                </h3>
                <p
                  class="mt-1 text-base text-balance text-gray-500 lg:text-center"
                >
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16">
        <p class="text-center font-medium text-2xl text-vino-800">
          Aprendiendo con
        </p>
        <div
          class="mt-6 mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div
            v-for="card in learnings"
            :key="card.label"
            class="flex flex-col rounded-lg gap-2 bg-vino-50 p-6 ring-1 ring-vino-200 ring-inset lg:last:col-span-2"
          >
            <div class="inline-flex items-center gap-x-3">
              <UIcon
                :name="card.icon"
                class="size-6 text-vino-800"
                aria-hidden="true"
              />
              <h3 class="font-display font-semibold text-vino-800">
                {{ card.label }}
              </h3>
            </div>
            <p class="text-base text-pretty text-gray-900">
              {{ card.content }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
