<template>
  <div class="container">
    <codex-editor ref="editor"></codex-editor>
    <CButton class="save" @click="save">Save</CButton>
  </div>
</template>

<script lang="js">
import edjsParser from 'editorjs-parser'

//import generatePdf from 'html-pdf-node';
//const html_pdf = require('html-pdf-node');

export default {
  name: 'IndexPage',
  methods: {
      async save() {

        const parser = new edjsParser();
        let data = await this.$refs.editor.$data.editor.save()
        console.log(data)
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
