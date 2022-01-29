<template>
    <CFlex justify=center class="editor-container">
        <CBox id="editor"></CBox>
    </CFlex>
</template>

<script lang="js">

import {
    CBox,
    CFlex
} from '@chakra-ui/vue'

import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header'
import MarkerTool from '~/plugins/MarkerTool'
export default {
    name: 'CodexEditor',
    components: {
        CBox,
        CFlex
    },
    // computed: {
    //     editor() {
    //         return this.$store.state.editor.editor
    //     }
    // }
    data() {
        return {
            editor: new EditorJs({
                holder: 'editor',
                tools:{
                    markertool: MarkerTool,
                    header:Header
                    }
            })
        }
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
.ce-header {
    font-size: 1.5em;
    font-weight: bold;
}
</style>