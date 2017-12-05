var requestURL = "https://api.kenle.info/pwa-example/api/announcement";

$(function() {
    //Get data from server
    $.getJSON(requestURL, function(data) {
        $( "p.announcement" ).html(data.message);
    });
});