import reader from "./img/reader.png";

import coffee from "./img/coffee.png";
import todo from "./img/todo.png";

export const Projects = [
  {
    id: 1,
    title: "TODO",
    img: todo,
    url: "https://todo-sten.netlify.app/",
    tech: ["Drag and Drop todo app. Made with Typescript, React"],
    mob: "No",
    git: "https://github.com/Stenbyte/Todo",
  },
  {
    id: 2,
    title: "COFFEE-STORE",
    img: coffee,
    url: "https://coffee-sten.netlify.app/",
    tech: [
      "E-commerce app. Made with React, Firebase, Redux, Router, Authentication",
    ],
    mob: "No",
    git: "https://github.com/Stenbyte/CoffeStore",
  },
  {
    id: 3,
    title: "READER",
    img: reader,
    url: "https://reader-sten.netlify.app/",
    tech: [
      "Social media app for book lovers. Made with React, Firebase, Redux, Router, Google API, Merriam-Webster API, New York Times API",
    ],
    mob: "No",
    git: "https://github.com/Stenbyte/Reader",
  },
];
