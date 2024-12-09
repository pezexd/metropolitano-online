<script setup lang="ts">
import { format } from "@formkit/tempo";

type PostSizes = Record<
  "small" | "medium" | "large" | "full",
  {
    mediaUrl: string;
    height: number;
    width: number;
  }
>;

interface InstagramBeholdFeed {
  username: string;
  biography: string;
  profilePictureUrl: string;
  website: string;
  followersCount: number;
  followsCount: number;
  posts: Array<{
    id: string;
    timestamp: string;
    permalink: string;
    mediaType: string;
    mediaUrl: string;
    sizes: PostSizes;
    caption: string;
    prunedCaption: string;
    hashtags: [];
    mentions: [];
    colorPalette: any;
  }>;
}

const { data } = await useAsyncData(() =>
  $fetch<InstagramBeholdFeed>("https://feeds.behold.so/zFgp2Jbbk23Ovf1ZUOhq")
);
</script>

<template>
  <HomeHero />
  <HomeValues />
  <USeparator />
  <div v-if="data" class="bg-white py-14">
    <UContainer>
      <div class="flex flex-col items-center gap-y-2">
        <div class="inline-flex items-center gap-x-2">
          <NuxtImg
            :src="data.profilePictureUrl"
            class="size-10 rounded-lg ring-1 ring-gray-200"
          />
          <p class="text-lg font-medium">@{{ data.username }}</p>
        </div>
      </div>
      <div class="mt-12">
        <div class="grid grid-cols-3 gap-6">
          <template v-for="post in data.posts.splice(0, 3)">
            <UCard
              class="relative"
              :ui="{ header: 'p-0 sm:p-0', body: 'p-4 sm:p-4' }"
            >
              <template #header>
                <NuxtImg
                  :src="post.sizes.medium.mediaUrl"
                  class="w-full h-48 object-cover rounded-t-lg"
                />
              </template>
              <div>
                <a :href="post.permalink" class="text-lg font-semibold">
                  {{ format(post.timestamp, "long") }}
                  <span class="absolute inset-0" />
                </a>
                <p class="text-base line-clamp-3">
                  {{ post.prunedCaption }}
                </p>
              </div>
            </UCard>
          </template>
        </div>
      </div>
      <div class="mt-12 flex justify-center">
        <UButton
          to="https://www.instagram.com/metropolitanoc/"
          icon="mdi:instagram"
          label="Síguenos en Instagram"
          color="neutral"
          size="lg"
        />
      </div>
    </UContainer>
  </div>
  <!-- <HomeIdentity /> -->
</template>
