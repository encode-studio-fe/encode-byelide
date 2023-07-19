<script setup lang="ts">
import NotesEditor from '@/components/NotesEditor/NotesEditor.vue'
</script>

<template>
  <div class="notes">
    <NotesEditor />
  </div>
</template>

<style scoped>
.notes {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
}
</style>
