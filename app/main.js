const myToken = "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";

const userName = document.getElementById("search-string");
const searchButton = document.getElementById("submit");

const name = document.getElementById("name");
const created = document.getElementById("creation-date");
const login = document.getElementById("login");
const acclink = document.getElementById("acclink");
const bio = document.getElementById("bio");
const avatar = document.getElementById("avatar");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const location = document.getElementById("location");
const company = document.getElementById("company");
const website = document.getElementById("website");
const twitter = document.getElementById("twitter");

const switchMode = document.getElementById("switch-mode");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const modeText = document.getElementById("mode-text");

document.addEventListener("DOMContentLoaded", () => {
  getUserData("octocat");
});

if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark");
  modeText.innerHTML = "light";
  sun.classList.remove("hidden");
  moon.classList.add("hidden");
  document.body.style.backgroundColor = "#141D2F";
} else { 
    modeText.innerHTML = "dark";
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
}

switchMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkModeEnabled = document.body.classList.contains("dark");
  localStorage.setItem("dark-mode", darkModeEnabled ? "enabled" : "disabled");
});

searchButton.addEventListener("click", () => {
  getUserData(userName.value);
});

const getUserData = function (user) {
  fetch(`https://api.github.com/users/${user}`, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      name.innerHTML = data.login;
      login.innerHTML = `@${data.login}`;
      acclink.setAttribute("href", data.html_url);
      avatar.setAttribute("src", data.avatar_url);
      let date = new Date(data.created_at);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      switch (month) {
        case 1:
          month = "Jan";
          break;
        case 2:
          month = "Feb";
          break;
        case 3:
          month = "Mar";
          break;
        case 4:
          month = "April";
          break;
        case 5:
          month = "May";
          break;
        case 6:
          month = "June";
          break;
        case 7:
          month = "July";
          break;
        case 8:
          month = "Aug";
          break;
        case 9:
          month = "Sep";
          break;
        case 10:
          month = "Oct";
          break;
        case 11:
          month = "Nov";
          break;
        case 12:
          month = "Dec";
          break;
      }

      created.innerHTML = `Joined ${day} ${month} ${year}`;
      bio.innerHTML = data.bio == null ? "Bio is not defined" : data.bio;
      repos.innerHTML = data.public_repos;
      followers.innerHTML = data.followers;
      following.innerHTML = data.following;
      location.innerHTML = data.location == null ? "undefined" : data.location;
      website.innerHTML = data.blog == "" ? "undefined" : data.blog;
      twitter.innerHTML =
        data.twitter_username == null ? "undefined" : data.twitter_username;
      company.innerHTML = data.company == null ? "undefined" : data.company;
    });
};
