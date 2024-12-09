<script setup lang="ts">
const contactItems = [
  {
    icon: "heroicons:building-office-2",
    description:
      "Av. Via Venezuela, P.º Rotario<br />Ciudad Guayana 8050, Bolívar",
  },
  {
    icon: "heroicons:phone",
    description: "(0286) 923.73.74 – (0286) 923.29.04",
    href: "tel:+58 (286) 923-7374",
  },
  {
    icon: "heroicons:envelope",
    description: "comunicados.metropolitano2015@gmail.com",
    href: "mailto:comunicados.metropolitano2015@gmail.com",
  },
];
</script>

<template>
  <div class="bg-white py-14">
    <UContainer>
      <h2 class="text-center font-display font-bold text-4xl">Contacto</h2>
      <div class="mt-12 gap-6 grid grid-cols-1 lg:grid-cols-2">
        <div class="flex items-center">
          <ul class="space-y-4 text-base">
            <template v-for="item in contactItems">
              <li class="flex items-center gap-x-4 text-gray-700">
                <UIcon :name="item.icon" class="size-5 text-gray-500" />
                <template v-if="item.href">
                  <a
                    class="hover:text-vino-800 transition-colors"
                    :href="item.href"
                  >
                    {{ item.description }}
                  </a>
                </template>
                <template v-else>
                  <p v-html="item.description" />
                </template>
              </li>
            </template>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.8979542359903!2d-62.7224677891649!3d8.312938991688025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbfa3ac64bdf13%3A0xd63bbd21aaee1eb9!2sColegio%20Metropolitano!5e0!3m2!1ses-419!2sve!4v1733707258749!5m2!1ses-419!2sve"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-lg ring-1 ring-gray-200"
        />
      </div>
    </UContainer>
  </div>
</template>
