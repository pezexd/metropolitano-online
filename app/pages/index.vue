<script setup lang="ts">
const features = [
  {
    name: "Alegría en el Aprendizaje",
    description:
      "Fomentamos un ambiente positivo y acogedor donde los estudiantes se sientan motivados y entusiasmados por aprender. A través de actividades lúdicas, descubren el placer de adquirir nuevos conocimientos.",
    icon: "heroicons:face-smile",
  },
  {
    name: "Disciplina para el Éxito",
    description:
      "Inculcamos valores de responsabilidad, respeto y perseverancia. Guiamos a nuestros estudiantes para que desarrollen hábitos de estudio efectivos y una actitud proactiva hacia sus responsabilidades.",
    icon: "heroicons:puzzle-piece",
  },
  {
    name: "Eficiencia en la Educación",
    description:
      "Utilizamos metodologías pedagógicas innovadoras y recursos tecnológicos avanzados para optimizar el proceso de enseñanza-aprendizaje.",
    icon: "heroicons:arrow-path",
  },
];
</script>

<template>
  <HomeHero />
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
