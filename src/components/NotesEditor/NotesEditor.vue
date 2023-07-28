<script setup lang="ts">
import { Strikethrough, TextBold, TextItalic } from '@icon-park/vue-next'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { inject } from 'vue'

import { ColorHighlighter } from './extensions/ColorHighlighter'

const editable = inject('editable', true)

const editor = useEditor({
  editable,
  extensions: [
    StarterKit.configure({
      bold: {
        HTMLAttributes: {
          class: 'custom-bold'
        }
      }
    }),
    ColorHighlighter
  ],
  content: `
    <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
    <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
    <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
  `
})
</script>

<template>
  <div :class="['notes-editor-wrapper', editable && 'editable']">
    <div v-if="editable" class="notes-editor-header">
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleBold().run()"
      >
        <text-bold />
      </button>
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleItalic().run()"
      >
        <text-italic />
      </button>
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleStrike().run()"
      >
        <strikethrough />
      </button>
    </div>
    <editor-content class="notes-editor-content" :editor="editor" />
  </div>
</template>

<style scoped>
.notes-editor-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 4;
  height: 100%;
}
.notes-editor-wrapper.editable {
  border: 1px solid var(--color-gray-300);
  border-radius: 6px;
}

.notes-editor-header {
  display: flex;
  padding: 8px 12px;
  font-size: var(--font-size-large);
  background-color: var(--color-gray-200);
}

.notes-editor-header-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  background-color: transparent;
}

.notes-editor-header-button:hover {
  background-color: var(--color-gray-300);
}

.notes-editor-content {
  width: 100%;
  height: 100%;
  font-size: 14px;
  padding: 8px 12px;
}
</style>

<style lang="css">
/* Basic editor styles */
/* stylelint-disable */
.ProseMirror {
  font-size: var(--font-size-large);
  outline: none;
  font-weight: normal;
  > * + * {
    margin-top: 0.75em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

/* Color swatches */
.color {
  white-space: nowrap;

  &::before {
    content: ' ';
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 1px solid rgba(128, 128, 128, 0.3);
    vertical-align: middle;
    margin-right: 0.1em;
    margin-bottom: 0.15em;
    border-radius: 2px;
    background-color: var(--color);
  }
}
</style>
