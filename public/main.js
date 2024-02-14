// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
// imports below are found in our starter app function
import htmlStructure from '../utils/htmlStructure';
import header from '../utils/header';
import startSortingBtn from '../utils/startSortingBtn';
import events from '../utils/events';

const startApp = () => {
  htmlStructure(); // always load first
  startSortingBtn();
  header();
  events(); // always load last
};

startApp();
