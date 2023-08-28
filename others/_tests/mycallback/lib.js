class CallBack extends HTMLElement {
    constructor() {
        super();

        // Style settings
        // TODO: This style is inline style and unable to be changed/covered by CSS.
        let height = this.offsetHeight;
        this.style.display = "block";
        this.style.border = "1px solid black";
        this.style.paddingLeft = "5px";
        this.style.borderRadius = height / 2 + "px";

        let f = this.getAttribute("clicked");
        if (typeof window[f] === "function")
            this.addEventListener("click", (event) => {
                window[f](event.target);
            });
    }
}

console.log("call-back");

customElements.define("call-back", CallBack);
