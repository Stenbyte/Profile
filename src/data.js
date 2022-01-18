import reader from "./img/reader.png";

import coffee from "./img/coffee.png";
import todo from "./img/todo.png";

export const Projects = [
  {
    id: 1,
    title: "TODO",
    img: todo,
    url: "https://todo-sten.netlify.app/",
    tech: [
      "Draggable todo app. Made with Typescript and React. I'm using session storage as a simple data storage. ",
    ],
    mob: "No",
    git: "https://github.com/Stenbyte/Todo",
  },
  {
    id: 2,
    title: "COFFEE-STORE",
    img: coffee,
    url: "https://coffee-sten.netlify.app/",
    tech: [
      "E-commerce app. Made with React, Redux, Router. I'm using Google Authentication and Firebase as a data storage.",
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
      "Social media app for book lovers. Made with React, Redux, Router. I'm using Firebase as a data storage. API: Google Books, Merriam-Webster.",
    ],
    mob: "No",
    git: "https://github.com/Stenbyte/Reader",
  },
];
