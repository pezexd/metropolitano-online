<script setup lang="ts">
const founders = [
  {
    name: "Msc. Lic. Hugo A. Yllaramendy R.",
    role: "Presidente",
    photoSrc: "/hugo.webp",
  },
  {
    name: "Msc. Lic. Elisa Magaly Rubio de Yllaramendy",
    role: "Vicepresidente",
    photoSrc: "/magaly.webp",
  },
];
</script>

<template>
  <div class="flex flex-col">
    <SharedHeading title="Historia" cover-img-src="/historia.jpg" />
    <div class="py-16">
      <UContainer>
        <div class="mx-auto max-w-3xl">
          <p class="text-base/8 text-gray-700">
            El Colegio Metropolitano se creó en el mes de Septiembre del año
            1988. Sus fundadores fueron el Licenciado Psic. Hugo Alberto
            Yllaramendy Rodríguez Msc y la Licenciada Or. Elisa Magaly Rubio de
            Yllaramendy Msc, ambos con maestría en diseño de instrucción y
            tecnología educativa de la Universidad del Estado de Florida,
            Talahasee USA. El primero de ellos, Psicólogo Escolar y la segunda,
            Especialista en el Area de Orientación. Ambos de dilatada
            trayectoria en el campo educativo: Colegio San Ignacio de Caracas,
            La Salle de Mérida, Diversificado Normal Valecillos, Liceo Simón
            Bolívar, Universidad Católica Andrés Bello, Universidad de los
            Andes, Escuela Técnica Eleazar López Contreras en San Cristóbal.
            Universidad de Oriente, Universidad de Guayana y Fundación La Salle
            en Puerto Ordaz, completando cada uno de ellos 43 y 38 años
            respectivamente dedicados a la educación en diferentes niveles.
          </p>
          <p class="mt-4 text-base/8 text-gray-700">
            El sistema educativo de la institución, se ha orientado -desde el
            principio- a desarrollar en el estudiante el aprendizaje activo; es
            decir, a no conformarse con la cátedra del profesor, sino que las
            investigaciones complementarias que el alumno lleva a cabo por su
            propia iniciativa, forman parte sustancial de todas sus
            evaluaciones.
          </p>
          <p class="mt-4 text-base/8 text-gray-700">
            El ambiente familiar y de compañerismo es otra característica del
            Colegio. Familiar, no solamente en el ambiente interno sino de
            apertura total a las familias, a fin de que éstas se sientan cómodas
            al visitar nuestras instalaciones, relacionarse con los maestros y
            profesores así como los directivos. De esta manera hemos logrado
            hasta ahora la anhelada fusión entre familia y escuela, tan
            encomiada en toda la literatura educativa académica como una de las
            metas más preciadas de toda institución dedicada a la formación de
            juventudes.
          </p>
          <h2
            class="mt-8 text-3xl text-center font-display font-semibold text-gray-900"
          >
            Fundadores
          </h2>
          <ul
            role="list"
            class="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
          >
            <li
              v-for="founder in founders"
              :key="founder.name"
              class="text-center"
            >
              <NuxtImg
                :src="founder.photoSrc"
                :alt="founder.name"
                class="mx-auto w-auto h-56 rounded-lg object-cover"
              />
              <h3
                class="mt-3 text-base/7 font-semibold tracking-tight text-gray-900"
              >
                {{ founder.name }}
              </h3>
              <p class="text-sm/6 text-vino-900">{{ founder.role }}</p>
            </li>
          </ul>
        </div>
      </UContainer>
    </div>
  </div>
</template>
