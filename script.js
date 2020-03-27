$(document).ready(function() {
    //input from form 
    var searchTerm = $("#searchInput").val().trim();
    //input from form 
    var numberRecords = $("#recordsInput").val().trim();
    //override from input form 
    var beginYear = 1851
    
    if ($("#beginYearInput").val().trim()) {
        beginYear = $("#beginYearInput").val().trim()
    }; 

    //override from input form 
    var endYear = 2020

    if ($("#endYearInput").val().trim()) {
        endYear = $("#endYearInput").val().trim()
    };

    // $(document).on("click", "#test", function() {
      function runSearch() {

      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + beginYear + "0101&end_date=" + endYear + "1231&sort=newest&api-key=d9wLAp3TYiJAnSURQOH9BYGkKKUvwwS1";
  
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response)
          
            for ( var i = 0; i < numberRecords; i++) {

                //Create divs for response

            };
        });
    };
    
    runSearch()
});
// });