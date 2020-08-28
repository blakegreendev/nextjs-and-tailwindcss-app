# nextjs-and-tailwindcss-app
 
## Getting started:
> npx create-next-app (and then name the app)
> cd my-app and run `yarn dev`
> Open browser and go to localhost:3000

> Next, open up *index.js* and get rid of all the built in CSS.

> Run `npm install --save-dev tailwindcss postcss-preset-env`

> Run `npx tailwindcss init`

> Create a postcss.config.js file in the root of the porject.

> Update styles/globals.css with:
@tailwind base;
@tailwind components;
@tailwind utilities;
And delete styles/Home.module

> Reload dev server and should see Tailwind effects.

> Create components folder and Layout.js file.



