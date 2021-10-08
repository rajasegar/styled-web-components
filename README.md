# :art: styled-web-components

Style property primitives for Web components inspired by [styled-system](https://styled-system.com)

- Zero dependencies :package:
- Light weight ( just 1.9 KB gzipped ) :leaves:
- Convenient and shorthand property names like (m,p, mx, px, etc.,) :wrench: :hammer:
- No build or compilation required :zap:

## Installation
```
npm install @rajasegar/styled-web-components
```

via CDN:

```
<script src="https://unpkg.com/@rajasegar/styled-web-components@2.0.0/dist/styled-web-components.min.js"></script>
```

## Usage


Create your own Custom element with composing props 

```js
import { SpaceProps, ColorProps, TypographyProps } from 'styled-web-components'

class SWBox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')

    // This is very important, your template should have a style tag with :host selector
    template.innerHTML = `<style>
    :host { display: block; }
    <style>
    <slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))

  }
}

customElements.define('sw-box', TypographyProps(ColorProps(SpaceProps(SWBox))))
```

Use your newly defined custom element in your HTML

```html
  <sw-box py="2em" color="red" bg="yellow" font-family="sans-serif">
  <h1>Hello world</h1>
  </sw-box>
```

### Flex box custom component
```js
import { FlexboxProps } from 'styled-web-components'

class SWFlex extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
    :host { display: flex; }
    </style>
    <slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('sw-flex', FlexboxProps(SWFlex))

```

#### Usage
```html

<sw-flex justify-content="center" flex-direction="row-reverse">
  <sw-box m="1em" width="500px" py="2em" color="red" bg="yellow" font-family="sans-serif" text-align="center">
    <h3>Section 1</h3>
  </sw-box>
  <sw-box m="1em"  width="500px" py="2em" color="red" bg="yellow" font-family="sans-serif" text-align="center">
    <h3>Section 2</h3>
  </sw-box>
</sw-flex>

```

### Grid custom component

```js
import { GridProps } from 'styled-web-components'

class SWGrid extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
    :host { display: grid; }
    </style>
    <slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('sw-grid', GridProps(SWGrid))
```

#### Usage
```html
  <h2>Grid demo</h2>
  <sw-box m="2em">
  <sw-grid grid-template-columns='100px 100px 100px' grid-gap="10px">
    <sw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">A</sw-box>
    <sw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">B</sw-box>
    <sw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">C</sw-box>
    <sw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">D</sw-box>
    <sw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">E</sw-box>
    <sw-box bg="#444" color="#fff" border-radius="5px" p="20px" font-size="150%">F</sw-box>
  </sw-grid>
  </sw-box>
```



For more examples, see the [demo](demo/) folder.

