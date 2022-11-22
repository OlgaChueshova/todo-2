export class Spinner extends HTMLElement {
    constructor() {
        super()
    }
    
    render() {
        this.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        `
    }
}

customElements.define("my-spinner", Spinner)