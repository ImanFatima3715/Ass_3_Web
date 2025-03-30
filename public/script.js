document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM Loaded Successfully!");

    const API_BASE_URL = "http://localhost:5000/api"; // ✅ Base API URL

    // ✅ Navbar Active State
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // ✅ Authentication Logic
    const authForm = document.getElementById("authForm");
    if (authForm) {
        authForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "1234") {
                alert("✅ Login Successful!");
                window.location.href = "/dashboard.html"; // Redirect to Dashboard
            } else {
                alert("❌ Invalid Username or Password!");
            }
        });
    }

    // ✅ Fetch and Display Tutors
    fetchTutors();
    loadSessionRequests();
    displayWishlist();
    loadPendingTutors();
    loadEarnings();
});

// ✅ Fetch Tutors from API
async function fetchTutors() {
    try {
        const response = await fetch(`${API_BASE_URL}/tutors`);
        const tutors = await response.json();
        const container = document.getElementById("tutors-container");
        if (!container) return;

        container.innerHTML = ""; // Clear previous data
        tutors.forEach(tutor => {
            const div = document.createElement("div");
            div.className = "tutor-card";
            div.innerHTML = `
                <h3>${tutor.name}</h3>
                <p>Subject: ${tutor.subject}</p>
                <button onclick="addToWishlist('${tutor._id}', '${tutor.name}')">❤️ Add to Wishlist</button>
            `;
            container.appendChild(div);
        });

        console.log("✅ Tutors Loaded Successfully!");
    } catch (error) {
        console.error("❌ Error Fetching Tutors:", error);
    }
}

// ✅ Search and Filter Tutors
function searchTutors() {
    const query = document.getElementById("searchTutors").value.toLowerCase();
    document.querySelectorAll(".tutor-card").forEach(tutor => {
        const name = tutor.querySelector("h3").textContent.toLowerCase();
        tutor.style.display = name.includes(query) ? "block" : "none";
    });
}

// ✅ Add Tutor to Wishlist (Persistent)
function addToWishlist(tutorId, tutorName) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.some(tutor => tutor.id === tutorId)) {
        alert("⚠ Tutor already in wishlist!");
        return;
    }

    wishlist.push({ id: tutorId, name: tutorName });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
}

// ✅ Display Wishlist
function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistContainer = document.getElementById("wishlist-container");
    if (!wishlistContainer) return;

    wishlistContainer.innerHTML = "";
    wishlist.forEach(tutor => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${tutor.name} (ID: ${tutor.id}) 
            <button onclick="removeFromWishlist('${tutor.id}')">❌ Remove</button>`;
        wishlistContainer.appendChild(listItem);
    });
}

// ✅ Remove Tutor from Wishlist
function removeFromWishlist(tutorId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(tutor => tutor.id !== tutorId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
}

// ✅ Handle Session Booking
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const tutorId = document.getElementById("tutorId").value;
        const studentName = document.getElementById("studentName").value;
        const sessionTime = document.getElementById("sessionTime").value;

        try {
            const response = await fetch(`${API_BASE_URL}/bookings`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tutorId, studentName, sessionTime })
            });

            const result = await response.json();
            alert(response.ok ? "✅ Session booked successfully!" : "❌ Booking failed: " + result.message);
        } catch (error) {
            console.error("❌ Error Booking Session:", error);
        }
    });
}

// ✅ Handle Review Submission
const reviewForm = document.getElementById("review-form");
if (reviewForm) {
    reviewForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const tutorId = document.getElementById("reviewTutorId").value;
        const reviewerName = document.getElementById("reviewerName").value;
        const reviewText = document.getElementById("reviewText").value;
        const rating = document.getElementById("rating").value;

        try {
            const response = await fetch(`${API_BASE_URL}/reviews`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tutorId, reviewerName, reviewText, rating })
            });

            const result = await response.json();
            alert(response.ok ? "✅ Review submitted successfully!" : "❌ Review submission failed: " + result.message);
        } catch (error) {
            console.error("❌ Error Submitting Review:", error);
        }
    });
}

// ✅ Load Session Requests
async function loadSessionRequests() {
    try {
        const response = await fetch(`${API_BASE_URL}/sessions`);
        const sessionRequests = await response.json();

        const sessionList = document.getElementById("session-requests");
        if (!sessionList) return;
        sessionList.innerHTML = ""; 

        if (sessionRequests.length === 0) {
            sessionList.innerHTML = "<li>No pending session requests.</li>";
            return;
        }

        sessionRequests.forEach(session => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${session.student}</strong> | ${session.date} | ${session.time} 
                <button onclick="acceptSession('${session._id}')">✔ Accept</button>
                <button onclick="declineSession('${session._id}')">❌ Decline</button>
            `;
            sessionList.appendChild(listItem);
        });
    } catch (error) {
        console.error("❌ Error Fetching Sessions:", error);
    }
}

// ✅ Load Pending Tutors (Admin Panel)
async function loadPendingTutors() {
    try {
        const response = await fetch(`${API_BASE_URL}/admin/pending-tutors`);
        const tutors = await response.json();

        const pendingTutors = document.getElementById("pending-tutors");
        if (!pendingTutors) return;
        pendingTutors.innerHTML = tutors.map(tutor => `<li>${tutor.name} - ${tutor.subject}</li>`).join("");
    } catch (error) {
        console.error("❌ Error Fetching Pending Tutors:", error);
    }
}

// ✅ Load Tutor Earnings
async function loadEarnings() {
    try {
        const response = await fetch(`${API_BASE_URL}/earnings`);
        const data = await response.json();
        document.getElementById("earnings").innerText = `💰 Earnings: ${data.total} PKR`;
    } catch (error) {
        console.error("❌ Error Fetching Earnings:", error);
    }
}
