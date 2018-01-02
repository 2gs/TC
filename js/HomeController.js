function HomeController(){


  this.BackEnd = [{title: 'SQL'},{ title:'ASP.NET'},{title: 'C#'},{ title:'Php'}];
  this.FrontEnd = [{title: 'HTML5'},{ title:'Angular JS'},{title: 'JQuery'},{ title:'Javascript'},{title:"Bootstrap 3 & 4"}];
}



angular.module('app').controller('HomeController', HomeController);
