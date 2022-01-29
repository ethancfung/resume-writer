export default class Divider {

    static get toolbox() {
        return {
            name: 'divider',
            icon: ''
        }
    }

    render() {
        return document.createElement('br');
    }

    save() {
        return {

        }
    }
}