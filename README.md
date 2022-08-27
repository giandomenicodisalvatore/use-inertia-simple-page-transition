# use-inertia-simple-page-transition

React hook that triggers css page transitions inside Inertia layouts. 

It was built for keeping my own code *d-r-y* between different layouts and for [learning purposes](https://laracasts.com/discuss/channels/inertia/how-to-achieve-page-transitions-with-inertiareact).

## Usage

This hook should be used **inside a [persistent layout](https://inertiajs.com/pages#persistent-layouts)**. It returns the appropriate css transition class as a **reactive string** that you can **interpolate with other classes**.

The returned string should be added to a **component that wraps the entire `{ Page }`**, otherwise the page transition won't work.

Example using **[animate.css](https://animate.style/)** classes.

```jsx
import usePageTransition from 'use-inertia-simple-page-transition'

export default function LayoutWithPageTransition(Page) {

const transitionClass = usePageTransition({
    onEnter: 'animate__fadeIn',
    onLeave: 'animate__fadeOut'
  })

  return <div className={`animate__animated ${transitionClass}`}>
    { Page }
  </div>
}
```

## Note

This package was **built for myself and for learning purposes**. 

Feel free to clone, fork or send a pull request to improve it.