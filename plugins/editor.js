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

    get editor() {

        if (this.cdx_editor === undefined) {
            this.init();
        }

        this.cdx_editor.isReady.then(() => {
            return this.cdx_editor;
        })
    }

    get data() {

        if (this.cdx_editor === undefined) {
            this.init();
        }

        return this.cdx_editor.data;
    }

    async save() {

        if (this.cdx_editor === undefined) {
            throw new Error("Editor is not intialized yet!")
        }

        return await this.cdx_editor.save();        
    }
}

const editor = new Editor(default_options);

export { editor as mainEditor };