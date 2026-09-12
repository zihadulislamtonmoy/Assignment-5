Name: DevStack — Build Your Ideal Development Stack

DevStack is an interactive and responsive web application designed for developers to explore modern technologies, frameworks, tools, and databases. Users can seamlessly compare tools, select items per category, and build their customized ideal technology stack with real-time UI updates and smooth user experience.

---

Technologies Used

- React (TypeScript / TSX)
- Tailwind CSS
- React Hooks (useState, use) & Suspense
- React Icons (react-icons)
- React Toastify (react-toastify)
- Vite

---

Key Features

1. Interactive Stack Builder 
2. Dynamic Data Fetching
3. Fully Responsive & Sticky Navigation

---


1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that allows us to write HTML-like elements directly inside JavaScript code.

2. What is the difference between props and state?
Props: Read-only data passed down from a parent component to a child component.
State: Data managed internally within a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows functional components to store and manage dynamic state. In this project, useState was used inside Technologies.tsx to store the array of selectedTechnologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook handles side effects in React components, such as data fetching, subscriptions, or DOM updates after rendering. When fetching data from an external API or a local data.json file without React 19's use API, useEffect is required to trigger the fetch operation once when the component mounts without blocking the initial render.

5. Why does every item in a .map() list need a unique key prop?
React depends on unique key props to identify which items in a list have changed, been added, or removed.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on certain conditions or states (using ternary operators ? : or logical &&). 

Example from SelectedTechnologies.tsx:

{selectedTechnologies.length > 0 ? (
  <div>
    {/* technology cards */}
    
    {selectedTechnologies.map((item) => (
      ...
    ))}

    <button>
      Remove All
    </button>
  </div>
) : (
  <div>
    <p className="text-xl text-gray-400 text-center">
      Your stack is empty.
    </p>
  </div>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed through Props. A child send something back to the parent by calling a callback function.




-------------------------------------------------------------------------------------
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


