import EditorJs from '@editorjs/editorjs';

const default_options = {
    holder: 'editor'    
}

class Editor {
    constructor(config) {
        this.config = config;
        this.cdx_editor = undefined;
    }

    init() {
        this.cdx_editor = new EditorJs(this.config);
    }

    get data() {

        if (this.cdx_editor === undefined) {
            this.init();
        }

        return this.cdx_editor.data;
    }

    save() {

        
    }
}

const editor = new Editor(default_options);

export { editor as mainEditor };