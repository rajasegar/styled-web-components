# :art: styled-web-components

Style property primitives for Web components inspired by [styled-system](https://styled-system.com)

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
import { SpaceProps, ColorProps, TypographyProps } from 'styled-web-components'

const Box = TypographyProps(ColorProps(SpaceProps(HTMLElement)))

class FWBox extends Box {
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

### Flex box custom component
```js
import { FlexboxProps } from 'styled-web-components'

class FWFlex extends FlexboxProps(HTMLElement) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
    this.container.style.display = 'flex'
  }
}

customElements.define('fw-flex', FWFlex)

```

#### Usage
```html

<fw-flex justify-content="center" flex-direction="row-reverse">
  <fw-box m="1em" width="500px" py="2em" color="red" bg="yellow" font-family="sans-serif" text-align="center">
    <h3>Section 1</h3>
  </fw-box>
  <fw-box m="1em"  width="500px" py="2em" color="red" bg="yellow" font-family="sans-serif" text-align="center">
    <h3>Section 2</h3>
  </fw-box>
</fw-flex>

```

### Grid custom component

```js
import { GridProps } from 'styled-web-components'

class FWGrid extends GridProps(HTMLElement) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
    this.container.style.display = 'grid'
  }
}

customElements.define('fw-grid', FWGrid)
```

#### Usage
```html
  <h2>Grid demo</h2>
  <fw-box m="2em">
  <fw-grid grid-template-columns='100px 100px 100px' grid-gap="10px">
    <fw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">A</fw-box>
    <fw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">B</fw-box>
    <fw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">C</fw-box>
    <fw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">D</fw-box>
    <fw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">E</fw-box>
    <fw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">F</fw-box>
  </fw-grid>
  </fw-box>
```



For more examples, see the [demo](demo/) folder.

