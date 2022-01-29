<template>
  <CFlex justify="center" class="editor-container">
    <CBox id="editor"></CBox>
  </CFlex>
</template>

<script lang="js">

import {
    CBox,
    CFlex
} from '@chakra-ui/vue'

import EditorJs from '@editorjs/editorjs';

export default {
    name: 'CodexEditor',
    components: {
        CBox,
        CFlex
    },
    data() {
        return {
            editor: new EditorJs({
                holder: 'editor',
                data: {
    "time": 1643436959732,
    "blocks": [
        {
            "id": "07v1deo5BS",
            "type": "paragraph",
            "data": {
                "text": "sdfsdf<br /><br /><br />"
            }
        },
        {
            "id": "TkyZxbKxO9",
            "type": "paragraph",
            "data": {
                "text": "sdfsdf"
            }
        }
    ],
    "version": "2.22.2"
}
            })
        }
    },
    mounted() {
        window.editor = this.editor
    }
}
</script>

<style>
.editor-container {
  margin: 1em;
}

#editor {
  width: 856px;
  height: 1056px;
  background: white;
  box-shadow: 0 1px 3px 1px rgb(60 64 67 / 15%);
}

.ce-block {
  margin-left: 100px;
  margin-right: 100px;
}

.ce-block:first-child {
  margin-top: 88px;
}
</style>