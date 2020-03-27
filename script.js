$(document).ready(function() {

    var searchTerm = "" //input from form
    var numberRecords = "" //input from form
    var beginYear = 1851 //override from from
    var endYear = 2020 //override from from
    var sortMethod = newest

    $(document).on("click", ".class", function() {
        
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTopic + "&begin_date=" + beginYear + "0101&end_date=" + endYear + "1231&api-key=d9wLAp3TYiJAnSURQOH9BYGkKKUvwwS1";
  
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          
            for ( var i = 0; i < numberRecords; i++) {

                //

            };
        });
    });
});
