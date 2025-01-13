<script src="https://apis.google.com/js/api.js"></script> 
<script>
  /**
   * Sample JavaScript code for places.places.get
   * Using API Key instead of OAuth 2.0
   */

  function loadClient() {
    return gapi.client.load("https://places.googleapis.com/$discovery/rest?version=v1&key=AIzaSyD-vWPweotkuX2vcwZWgTKen_rVr3KGh9E")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }

  // Execute request to Google Places API
  function execute() {
    return gapi.client.places.places.get({
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw",
      "fields": "reviews"
    })
        .then(function(response) {
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

  // Load the GAPI client when the script loads
  gapi.load("client", loadClient);
</script>

<button onclick="execute()">Get Place Reviews</button>