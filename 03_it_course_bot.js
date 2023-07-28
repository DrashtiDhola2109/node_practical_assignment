function getITCourseInfo(course) {
  const courses = {
    computer_science: {
      name: "Computer Science",
      description: "Computer Science is a popular IT course that covers programming, algorithms, data structures, and more.",
      eligibility: "Students who have completed 12th with science stream (PCM or PCB) are eligible.",
      duration: "The duration of the course is typically 3 to 4 years.",
    },
    web_development: {
      name: "Web Development",
      description: "Web Development is a course that focuses on building websites and web applications.",
      eligibility: "Students from any stream (science, commerce, or arts) who have completed 12th are eligible.",
      duration: "The duration of the course may vary, ranging from a few months to a year or more.",
    },
    data_science: {
      name: "Data Science",
      description: "Data Science is a course that deals with data analysis, statistics, and machine learning.",
      eligibility: "Students from any stream (science, commerce, or arts) who have completed 12th are eligible.",
      duration: "The duration of the course may vary, ranging from a few months to a year or more.",
    },
  };

  if (course.toLowerCase() in courses) {
    const { name, description, eligibility, duration } = courses[course.toLowerCase()];
    return `
      Course: ${name}
      Description: ${description}
      Eligibility: ${eligibility}
      Duration: ${duration}
    `;
  } else {
    return `Sorry, I don't have information about the IT course '${course}'.`;
  }
}

module.exports = {
  getITCourseInfo,
};