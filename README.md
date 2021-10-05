# styled-web-components

Web component primitives inspired by styled-system

```js
import { SpacingProps, ColorProps, TypographyProps } from './styled-web-components.js'


class FWBox extends TypographyProps(ColorProps(SpacingProps(HTMLElement))) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
  }
}

customElements.define('fw-box', FWBox)
```

```html
  <fw-box py="2em" color="red" bg="yellow" font-family="sans-serif">
  <h1>Hello world</h1>
  </fw-box>
```

