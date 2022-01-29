<template>
  <div class="container">
    <codex-editor ref="editor"></codex-editor>
    <CButton class="save" @click="save">Save</CButton>
  </div>
</template>

<script lang="js">
import edjsParser from 'editorjs-parser'
import * as cheerio from 'cheerio'
import customParsers from '~/plugins/editor/parsers.js'

export default {
  name: 'IndexPage',
  computed: {
      content() {
          return this.$refs.editor.$data.editor
      }
  },
  methods: {

      findIn(el, atLeast) {

        const $ = cheerio.load(document.documentElement.outerHTML)
        const container = $('#editor > div > div.codex-editor__redactor')[0]
    
        const children = container.children.splice(atLeast)
        let text = el.data.text.replaceAll('<br>', '')

        let i = atLeast;
        for (const block of children) {
            let cur = $(block).find('.ce-paragraph')
            if (cur.text() == text) {
                return i
            }
            i++;
        }

        return -1;
      },

      async save() {

        const parser = new edjsParser(undefined, customParsers);
        let data = await this.$refs.editor.$data.editor.save()

        console.log(data)

        for (let i = 0; i < data.blocks.length - 1; i++) {

            let cur = data.blocks[i]
            let next = data.blocks[i+1]

            if (cur.type === 'divider' || next.type === 'divider') {
                continue
            }

            let first = this.findIn(data.blocks[i], i)
            let second = this.findIn(data.blocks[i+1], i+1)

            if (first == -1 || second == -1) {
                throw new Error("Something is missing")
            }

            let space = second - first - 1;
            data.blocks[i].data.text = data.blocks[i].data.text + '<br />'.repeat(space)
        }

        let markup = parser.parse(data);
        console.log(markup)

        const options = {
            margin:       1,
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        }

        const html2pdf = require('html2pdf.js')

        var worker = html2pdf();
        var worker = html2pdf().set(options).from(markup + '<br />').save();
    }
  }
}
</script>

<style>
body {
  background-color: rgb(248, 249, 250);
}

.save {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
</style>
