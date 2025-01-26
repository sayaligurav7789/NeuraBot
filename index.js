const axios = require("axios");

const url = "https://nuerabot.cognitiveservices.azure.com/language/:query-knowledgebases?projectName=NueraBot&api-version=2021-10-01&deploymentName=production";

const headers = {
  "Ocp-Apim-Subscription-Key": "AmI6YjRcI9o04d4mwudrSEuDU2mzSjNGf1XGxdVm2ilwnQyIn9iQJQQJ99BAACHYHv6XJ3w3AAAaACOGyEtF",
  "Content-Type": "application/json"
};

const body = {
  top: 1,
  question: "What is the Atal Pension Yojana (APY)?",
  includeUnstructuredSources: true,
  confidenceScoreThreshold: "0.5",
  answerSpanRequest: {
    enable: true,
    topAnswersWithSpan: 1,
    confidenceScoreThreshold: "0.5"
  },
  filters: {
    metadataFilter: {
      logicalOperation: "OR",
      // metadata: [
        // {
        //   key: "",
        //   value: ""
        // }
      // ]
    }
  }
};

axios.post(url, body, { headers })
  .then(response => {
    console.log("Response:", response.data);
    console.log(response.data.answers[0].dialog)
  })
  .catch(error => {
    console.error("Error:", error.response ? error.response.data : error.message);
  });