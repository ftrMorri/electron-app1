<script setup async lang="ts">
import { ref } from 'vue'

const strings = ref<string[]>([])
window.electron.ipcRenderer.send('ping')

const modifyRecord = async function () {  
  window.electron.ipcRenderer.send("ping");
  window.electron.ipcRenderer.send("db.open");
  strings.value.push("Done!");
}
</script>

<template>
  <q-layout view="hhh lpr lFr">
    <q-page-container>
      <h2>Electron, Vue, Quasar, Mikro-ORM, SQLite</h2>
      <q-btn dense flat color="primary" @click.stop="modifyRecord()">Modify record</q-btn>

      <div class="q-pa-md row items-start q-gutter-md">
        <q-card v-for="s in strings" :key="s" index class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">{{ s }}</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>
