const readline = require("readline");
const { getITCourseInfo } = require("./03_it_course_bot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runChatbot() {
  console.log("Welcome to the IT Course Information Chatbot!");
  console.log("Type 'exit' to end the conversation.");

  rl.question("Please enter an IT course name: ", (userInput) => {
    if (userInput.toLowerCase() === "exit") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    if (userInput.trim()) {
      const response = getITCourseInfo(userInput);
      console.log(response);
    } else {
      console.log("Please enter a valid IT course name.");
    }

    runChatbot();
  });
}

runChatbot();
