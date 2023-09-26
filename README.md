# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [Space tourism multi-page website (React + Tailwind + Framer Motion)](https://www.frontendmentor.io/solutions/space-tourism-multipage-website-react-tailwind-framer-motion-CDUJwD21Lv)
- Live Site URL: [https://space-tourism-fem-red.vercel.app](https://space-tourism-fem-red.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/en/main) - Page routing for React application
- [Framer Motion](https://www.framer.com/motion/) - React Animation Library

### What I learned

#### Create a higher order component (HOC)
```js
import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed z-50 top-0 left-0 w-full h-screen bg-primary origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
      />
      <motion.div
        className="fixed z-50 top-0 left-0 w-full h-screen bg-primary origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      />
    </>
  );
};

export default Transition;
```
The usage
```js
import Transition from "../../components/Transition";
import HomePage from "./Page";

export default Transition(HomePage);
```

What does this do? 

The `Transition` component takes a component (the page component) as an argument and returns a new component with added functionality, specifically, a page transition animation in this case. This is useful, because I do not have to individually modify the page component's code to add the transition animation.

## Author

- GitHub - [Zubair Adham ](https://github.com/atmahana)
- Frontend Mentor - [@atmahana](https://www.frontendmentor.io/profile/atmahana)

