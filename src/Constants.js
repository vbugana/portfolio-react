import REFACTOR from "./Assets/Projects/coderefactoring.jpeg";
import PASSWORD from "./Assets/Projects/password-generator.jpeg";
import TEAM from "./Assets/Projects/team-generator-output.jpeg";
import WEATHER from "./Assets/Projects/weatherdashboard.jpeg";
import WORKDAY from "./Assets/Projects/workdayschedule.jpg";
import README from "./Assets/Projects/READMEgenerator.jpg";

export const PROJECTS = [
  {
    image: REFACTOR,
    name: "Code refactoring and accessibility",
    technologyUsed: "HTML, CSS",
    description: "Edit the existing homepage for Horiseon Social Solution Services Inc in order to improve its accessibility features and overall semantic structure, to fix any broken page components and refactor the page documents to reduce repetition and improve readability",
    url: "https://vbugana.github.io/HoriseonSocialSolutionServices/",
  },
  {
    image: PASSWORD,
    name: "Javascript app to auto-generate password",
    technologyUsed: " Javascript, HTML, CSS",
    description: "The Password generator will provide a password between 10 and 64 characters based on criteria the user specifies.",
    url: " https://vbugana.github.io/Password_Generator/",
  },
  {
    image: TEAM,
    name: "team-generator-output",
    technologyUsed: "Node, Javascript, HTML, CSS",
    description: "Team Profile Generator is a command-line-input application run in Node that requests information from the user about members of an engineering team and generates an HTML file displaying that information.",
  },
  {
    image: WEATHER,
    name: "A weather dashboard",
    technologyUsed: "Javascript, HTML, CSS",
    description: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
    url: "https://vbugana.github.io/Weather-Dashboard/",
  },
   {
    image: WORKDAY,
    name: "Work Day Scheduler",
    technologyUsed: "HTML and CSS powered by jQuery",
    description: " interactive web pages that are dynamically updated using JavaScript, using different libraries that enhance the quality of the web apps.",
    url: "https://vbugana.github.io/Work-Day-Scheduler/",
  },
  {
    image: README,
    name: "README auto-generator",
    technologyUsed: "NODE.js",
    description: "A command-line application to generate a README.",
    url: "https://vbugana.github.io/README.md-generator/",
  },
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 3 },
  { name: "JavaScript", initialRating: 3 },
  { name: "jQuery", initialRating: 3 },
  { name: "SQL", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Linux"]
