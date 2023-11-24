const projects = [
  { name: "Project 1", technology: "C#" },
  { name: "Project 2", technology: "Java" },
  { name: "Project 3", technology: "Node.js" },
  { name: "Project 4", technology: "HTML, CSS" },
];

// Function to filter projects based on input
function filterProjects() {
  const filter = document.getElementById("filter").value.toLowerCase();
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";

  projects.forEach((project) => {
    if (project.technology.toLowerCase().includes(filter)) {
      const projectDiv = document.createElement("div");
      projectDiv.textContent = `${project.name} - ${project.technology}`;
      projectList.appendChild(projectDiv);
    }
  });
}

// Initial project list
filterProjects();
