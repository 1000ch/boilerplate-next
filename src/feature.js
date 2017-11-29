export default {
  isCustomElementsSupported: () => {
    return Boolean(window.customElements !== undefined);
  },
  isShadowDOMSupported: () => {
    return Boolean(HTMLElement.prototype.attachShadow !== undefined);
  }
};
