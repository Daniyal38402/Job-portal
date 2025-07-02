 function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }

  // Optional: Close menu when link is clicked (mobile only)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById("navLinks").classList.remove("active");
    });
  });

const jobs = [
  { title: "Frontend Developer", category: "Web", location: "Lahore", type: "Full-Time" },
  { title: "Graphic Designer", category: "Design", location: "Karachi", type: "Part-Time" },
  { title: "Marketing Assistant", category: "Marketing", location: "Islamabad", type: "Internship" },
  { title: "Backend Developer", category: "Web", location: "Lahore", type: "Full-Time" }
];

const jobList = document.getElementById("jobList");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");

function displayJobs(filteredJobs) {
  jobList.innerHTML = "";
  filteredJobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Category:</strong> ${job.category}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <a href="job-details.html" class="btn">View Details</a>
    `;
    jobList.appendChild(jobCard);
  });
}

function filterJobs() {
  const selectedCategory = categoryFilter.value;
  const selectedLocation = locationFilter.value;
  const selectedType = typeFilter.value;

  const filtered = jobs.filter(job =>
    (selectedCategory === "" || job.category === selectedCategory) &&
    (selectedLocation === "" || job.location === selectedLocation) &&
    (selectedType === "" || job.type === selectedType)
  );

  displayJobs(filtered);
}

categoryFilter.addEventListener("change", filterJobs);
locationFilter.addEventListener("change", filterJobs);
typeFilter.addEventListener("change", filterJobs);

// Initial load
displayJobs(jobs);





 function loginUser() {
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      // Basic frontend validation
      if (email === "test@example.com" && password === "123456") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // example redirect
      } else {
        alert("Invalid credentials");
      }

      return false; // prevent form submit
    }

     function registerUser() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      alert(`Registered successfully!\nName: ${name}\nEmail: ${email}`);
      window.location.href = "login.html";

      return false; // prevent form submit
    }




     function logout() {
      alert("You have been logged out.");
      window.location.href = "login.html";
    }





    function logout() {
      alert("You have been logged out.");
      window.location.href = "login.html";
    }






 function handleUpload(event) {
      event.preventDefault();

      const name = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const file = document.getElementById('resumeFile').files[0];

      if (!file) {
        alert("Please select a resume file.");
        return false;
      }

      // This is frontend-only; backend upload is needed for real applications
      document.getElementById('uploadStatus').textContent = `Thanks ${name}, your resume (${file.name}) has been uploaded successfully!`;
      document.getElementById('uploadStatus').style.color = "green";

      return false;
    }