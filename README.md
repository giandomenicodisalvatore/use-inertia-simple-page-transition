# use-inertia-simple-page-transition
[![less than 500B minzipped](https://badgen.net/bundlephobia/minzip/use-inertia-simple-page-transition)](https://bundlephobia.com/package/use-inertia-simple-page-transition)

Simple and tiny [React 18](https://reactjs.org) hook that triggers css page transitions inside [Inertia](https://inertiajs.com) layouts. 

Built for *keeping my own code dry* between different layout components and for [learning purposes](https://laracasts.com/discuss/channels/inertia/how-to-achieve-page-transitions-with-inertiareact).

## Installation 
```bash
npm i use-inertia-simple-page-transition
```

Although you are going to see some errors when installing it, **using React 18 with Inertia is perfectly fine**. 
Just make sure to ignore the errors with `--legacy-peer-deps` flag.

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

## Gotcha

The returned class string should be assigned to a **tag that wraps the entire `{ Page }`**, otherwise the page transition won't work.

## Note

This package was **built for myself and for learning purposes**. 

Feel free to clone, fork or send a pull request to improve it.