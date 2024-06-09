<script setup lang="ts">
import { Suspense } from 'vue';
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <q-layout>
    <q-page-container>
      <Suspense>
        <main-layout></main-layout>
      </Suspense>
    </q-page-container>
  </q-layout>
</template>
