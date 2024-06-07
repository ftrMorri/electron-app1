<script setup lang="ts">
import { Suspense } from 'vue';
import MainLayout from './layouts/MainLayout.vue'

// const ipcHandle = () => window.electron.ipcRenderer.send('ping')
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
