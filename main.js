$(document).ready(() => {
    //all of our js code goes here
    $("h1").on("click", () => {
        $("main").addClass("black-background");
    }),
    $("h1").on("mouseleave", () => {
        $("main").removeClass("black-background");  //works
    }),

    $("h2").on("mouseenter", () => {
        $("h2").text("Hello, welcome to my webpage!");  //works
    }),
    $("h2").on("mouseleave", () => {
        $("h2").text("Header 2");
    }),
    
    $("nav-item").on("click", () => {
        $(".nav-item").addClass("bigText"); //bigtext didnt work. Supposed to make nav-item bigger with new css class
    }),
    $(document).on('keypress',function(e) { 
        $("article").after(e.value); //'which' should be exact user input (e.value might work???)
    })                               //should also create a new p instead of after article
    ;



    
    
});