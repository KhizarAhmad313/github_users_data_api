// ------------------------------------------------------------------------

// The code that is shown below was written to show one of the user that we are receiving from the fetch api.

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     document.getElementById("avatar").setAttribute("src", data[1].avatar_url);

//     document.getElementById("userName").innerText = data[1].login;

//     document
//       .getElementById("profileLink")
//       .setAttribute("href", data[1].html_url);
//   });

// ------------------------------------------------------------------------

// The code that is shown below was written to show all of the users that we are receiving from the fetch api.

fetch("https://api.github.com/users") //data fetch request
  .then((res) => res.json()) //converting raw data into json format
  .then((data) => {
    let cards = document.getElementById("cardsContainer");
    cards.innerHTML = null;
    //running a for loop till the length of data for creating user info and appending it to main div(cardsContainer)
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "card");
      //creating a img element for each user
      let userImage = document.createElement("img");
      userImage.setAttribute("class", "profileImage");
      userImage.setAttribute("src", data[i].avatar_url);
      userImage.setAttribute("id", "avatar");
      //creating a userName element for each user
      let userName = document.createElement("h3");
      userName.setAttribute("id", "userName");
      userName.innerText = data[i].login;
      //creating a follow element for each user and creating a random number to display followres and following
      let userFollow = document.createElement("p");
      userFollow.setAttribute("id", "follow");
      userFollow.innerText =
        "🢚 " +
        " Followers " +
        (Math.floor(Math.random() * 10000) + 1) +
        " ⦾ " +
        " Following " +
        (Math.floor(Math.random() * 100) + 1) +
        " 🢘 ";

      //creating a anchor element for each user
      let userLink = document.createElement("a");
      userLink.setAttribute("id", "profileLink");
      userLink.setAttribute("class", "profileButton");
      userLink.setAttribute("href", data[i].html_url);
      userLink.setAttribute("target", "_blank");
      userLink.innerText = "Profile Link";

      div.append(userImage, userName, userFollow, userLink); //appending the userinfo(userImage, userName and userLink) to the div(cards)
      cards.append(div); //appending cards which containing userinfo to the cardsContainer
    }
  });
