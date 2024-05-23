# React · [![](https://camo.githubusercontent.com/2bb6ac78e5a9f4f688a6a066cc71b62012101802fcdb478e6e4c6b6ec75dc694/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)]() [![](https://camo.githubusercontent.com/2e2d5fd984e271fbb2983f4a376743fb647e51d2685566e1d4d136edec375307/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)]() [![](https://camo.githubusercontent.com/78938030e9231a1ac37038be4ba50d8dea8b2863a7619fe36be049aad5076056/68747470733a2f2f636972636c6563692e636f6d2f67682f66616365626f6f6b2f72656163742e7376673f7374796c653d736869656c64)]() [![](https://camo.githubusercontent.com/7f745fb7dd2a22f68fe03adcdb977963ada4c8265675e572c629b29b9b34af2b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667)]()

React is a JavaScript library for building user interfaces.

* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using [Node](https://nodejs.org/en) and power mobile apps using [React Native](https://reactnative.dev/).

[Learn how to use React in your project](https://react.dev/learn).

## Installation
React has been designed for gradual adoption from the start, and **you can use as little or as much React as you need:**

* Use [Quick Start]() to get a taste of React.
* [Add React to an Existing Project]() to use as little or as much React as you need.
* [Create a New React App]() if you're looking for a powerful JavaScript toolchain.

## Documentation
You can find the React documentation [on the website]().

Check out the [Getting Started]() page for a quick overview.

The documentation is divided into several sections:

* [Quick Start]()
* [Tutorial]()
* [Thinking in React]()
* [Installation]()
* [Describing the UI]()
* [Adding Interactivity]()
* [Managing State]()
* [Advanced Guides]()
* [API Reference]()
* [Where to Get Support]()
* [Contributing Guide]()

You can improve it by sending pull requests to [this repository]().

## Examples
We have several examples [on the website](). Here is the first one to get you started:

```
import { createRoot } from 'react-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />); 
```
This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML.

## Contributing
The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### [Code of Conduct]()
Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text]() so that you can understand what actions will and will not be tolerated.

### [Contributing Guide]()
Read our [contributing guide]() to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.

### [Good First Issues]()
To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues]() that contain bugs that have a relatively limited scope. This is a great place to get started.

#### License
React is [MIT licensed]().