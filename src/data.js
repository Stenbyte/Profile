import LinkedIn from "./img/linkedIn.png";
// import github from "./img/github.png";
import St from "./img/St.png";
import St1 from "./img/St1.png";
import St2 from "./img/St2.png";
import Git from "./img/Git.png";
import reader from "./img/reader.png";
import chat from "./img/chat.png";
import coffee from "./img/coffee.png";

export const Projects = [
  {
    id: 1,
    title: "COFFEE-STORE",
    img: coffee,
    url: "https://coffee-sten.netlify.app/",
    tech: ["React, Firebase, Redux, Router, Authentication"],
    mob: "No",
    git: "https://github.com/Stenbyte/CoffeStore",
  },
  {
    id: 2,
    title: "READER APP",
    img: reader,
    url: "https://reader-sten.netlify.app/",
    tech: [
      "React, Firebase, Redux, Router, Google API, Merriam-Webster API, New York Times API",
    ],
    mob: "No",
    git: "https://github.com/Stenbyte/Reader",
  },
  {
    id: 3,
    title: "LinkedIn Clone",
    img: LinkedIn,
    url: "https://linkedin-clone-1ef65.web.app/",
    tech: ["React, Styled Components, Firebase, Redux, Router"],
    mob: "No",
    git: "https://github.com/Stenbyte/LinkedIn_Clone",
  },
  {
    id: 4,
    title: "READER-CHAT",
    img: chat,
    url: "https://readerchat-sten.netlify.app/",
    tech: ["React, Firebase, Redux, Router, ContextAPI"],
    mob: "No",
    git: "https://github.com/Stenbyte/ReaderChat",
  },
];
export const Certificates = [
  {
    id: 1,
    title: "React",
    img: St,
  },
  {
    id: 2,
    title: "Javascript",
    img: St1,
  },
  {
    id: 3,
    title: "Git",
    img: Git,
  },
  {
    id: 4,
    title: "Web",
    img: St2,
  },
];
