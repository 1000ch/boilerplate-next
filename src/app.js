import FancyButton from './fancy-button.js';
import feature from './feature.js';

if (feature.isCustomElementsSupported() && feature.isShadowDOMSupported()) {
  customElements.define('fancy-button', FancyButton);
}
