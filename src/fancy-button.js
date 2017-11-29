export default class FancyButton extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: inline-flex;
          background: #e91e63;
          color: #fff;
          margin: 0.5em;
          padding: 1em;
          font-size: 16px;
          border-radius: 0.5em;
          cursor: pointer;
          border: none;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = FancyButton.template;

    this.onClick = this.onClick.bind(this);
    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    this.button.addEventListener('click', this.onClick);
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.onClick);
  }

  onClick(e) {
    console.log('button is clicked');
  }
}
