# teletype-ui

A classic computer-science-inspired UI component library designed for developer
portfolios, technical showcases, and minimalist web applications.

It's a dynamic UI library. You can select a base color, the theme will adapt.

[Demo](https://teletype.bilele.tech/)

---

## Usage

1. Download the library

```
npm install teletype-ui
```

2. Update base CSS

In `+layout.svelte` add these lines

```ts
import 'teletype-ui/tokens.css';
import 'teletype-ui/base.css';
```

3. Import components in the main page

In a page `+page.svelte`, you can import components like this :

```ts
import {
    Flex,
    hackreveal
} from 'teletype-ui';
```

---

## Features

Live demo available at: **[https://teletype.bilele.tech/](https://teletype.bilele.tech/)**

Source page is available [here](src/route/+page.svelte).

### Layouts

- [`Flex`](src/lib/layouts/Flex.svelte) - Flexbox wrapper for flexible layout structures and element alignment.
- [`Stack`](src/lib/layouts/Stack.svelte) - Vertical flexbox container that aligns items vertically.
- [`Header`](src/lib/layouts/Header.svelte) - Hero section component designed to take up all vertical screen space.
- [`Color`](src/lib/layouts/Color.svelte) - Wrapper providing custom background color accents and themes.
- [`Details`](src/lib/layouts/Details.svelte) - Native summary/details wrapper.
- [`Scroll`](src/lib/layouts/Scroll.svelte) - Overflow container designed for smooth horizontal scrolling.

### Components

- [`Badge`](src/lib/components/Badge.svelte) - Compact label for tags. Can have Lucide icons or svg as parameters.
- [`Button`](src/lib/components/Button.svelte) - Buttons with variants.
- [`Frame`](src/lib/components/Frame.svelte) - Flexible border container supporting outlines, transparency, hover effects
- [`TableOfContents`](src/lib/components/TableOfContents.svelte) - On-page quick navigation list linked to section headers. Works with articles.

### Animations

These animations can be used on text and will be executed. Trigger event,
delay, easing, duration are options available.

```html
<h1 use:typewriter>My Title</h1>
```

- [`typewriter`](src/lib/animations/typewriter.ts) - Typewriter effect, letters appears one by one.
- [`hackreveal`](src/lib/animations/hackreveal.ts) - The text is hashed by default and will be revealed letter by letter.
