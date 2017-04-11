$(function() {
    $('#homeButton').on("click", function(){
       $('#container').load("home.html"); 
    });
    $('#blogButton').on("click", function(){
       $('#container').load("blog.html"); 
    });
    $('#gamesButton').on("click", function(){
       $('#container').load("games.html"); 
    });
    $('#aboutButton').on("click", function(){
       $('#container').load("about.html"); 
    });
});