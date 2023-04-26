# use-inertia-simple-page-transition

[![less than 500B minzipped](https://badgen.net/bundlephobia/minzip/use-inertia-simple-page-transition)](https://bundlephobia.com/package/use-inertia-simple-page-transition)

Simple and very tiny [React 18](https://reactjs.org) hook that triggers css page transitions inside [Inertia](https://inertiajs.com) [layouts](https://inertiajs.com/pages#creating-layouts).

## Installation

```bash
npm i use-inertia-simple-page-transition
```

**Inertia < 1.0** supported until version 1.0.1

```bash
npm i use-inertia-simple-page-transition@1.0.1
```

**Using React > 18 with Inertia is perfectly fine**. If you see errors during install, make sure to ignore them adding the flag `--legacy-peer-deps`.

```bash
npm i use-inertia-simple-page-transition --legacy-peer-deps
```

## Example

Using **[animate.css](https://animate.style/)** classes.

```jsx
// in LayoutWithPageTransition.jsx
import usePageTransition from 'use-inertia-simple-page-transition'

export default function LayoutWithPageTransition(Page) {
  const transitionClass = usePageTransition({
    onEnter: 'animate__fadeIn',
    onLeave: 'animate__fadeOut'
  })

  return <div className={
    `other classes animate__animated ${transitionClass}`
  }>{ Page }</div>
}
```

## Caveat

The returned value is a **reactive class string** that should be assigned to a **tag that wraps the entire `{ Page }`**, otherwise the transition won't work.

## Note

This package was mainly built for **keeping my own code dry** using multiple layout components and for **[learning purposes](https://laracasts.com/discuss/channels/inertia/how-to-achieve-page-transitions-with-inertiareact)**.

Feel free to clone, fork or send a pull request to improve it.
