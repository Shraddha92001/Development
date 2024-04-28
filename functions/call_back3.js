function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(function() {
      let data = "Some data fetched from an API";
      callback(data); // Call the callback function with the fetched data
    }, 2000); // Simulate a delay of 2 seconds
  }
  
  function processData(data) {
    console.log("Processing data:", data);
  }
  
  fetchData(processData); // Pass the processData function as a callback
  