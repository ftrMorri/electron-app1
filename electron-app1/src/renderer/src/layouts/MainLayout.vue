<script setup async lang="ts">
import { MikroORM } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { Blog } from '@renderer/entities/blog';
import { ref } from 'vue'

const strings = ref<string[]>([])

const modifyRecord = async function () {
  var orm = await MikroORM.init({
    driver: SqliteDriver,
    dbName: 'sqlite.db',
    entities: [Blog],
    discovery: { disableDynamicFileAccess: true },
    metadataProvider: TsMorphMetadataProvider,
    debug: true,
  });

  const blog = await orm.em.findOne(Blog, 1);
  if (blog !== null) {
    blog.title = "foo";
  }
  await orm.em.flush();

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
