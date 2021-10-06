# styled-web-components

:art: Style property primitives for Web components inspired by styled-system

- Zero dependencies :package:
- Light weight ( < 2KB (gzipped), < 10 KB (minified)) :leaves:
- Convenient and shorthand property names like (m,p, mx, px, etc.,) :wrench: :hammer:
- No build or compilation required :zap:

## Installation
```
npm install @rajasegar/styled-web-components
```

via CDN:

```
<script src="https://unpkg.com/@rajasegar/styled-web-components@1.0.0/dist/styled-web-components.min.js"></script>
```

## Usage


Create your own Custom element with composing props 

```js
import { SpacingProps, ColorProps, TypographyProps } from 'styled-web-components'


class FWBox extends TypographyProps(ColorProps(SpacingProps(HTMLElement))) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // This is very important, you need to set a container element
    // otherwise the style props won't work.
    this.container = this.shadowRoot.querySelector('div')
  }
}

customElements.define('fw-box', FWBox)
```


Use your newly defined custom element in your HTML

```html
  <fw-box py="2em" color="red" bg="yellow" font-family="sans-serif">
  <h1>Hello world</h1>
  </fw-box>
```

For more examples, see the [demo](demo/) folder.

