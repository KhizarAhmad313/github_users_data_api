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
    //creating a for loop to to displaying data for i(length of data) times to create a card for the data
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "card");

      let userImage = document.createElement("img");
      userImage.setAttribute("class", "profileImage");
      userImage.setAttribute("src", data[i].avatar_url);
      userImage.setAttribute("id", "avatar");

      let userName = document.createElement("h3");
      userName.setAttribute("id", "userName");
      userName.innerText = data[i].login;

      let userLink = document.createElement("a");
      userLink.setAttribute("id", "profileLink");
      userLink.setAttribute("class", "profileButton");
      userLink.setAttribute("href", data[i].html_url);
      userLink.setAttribute("target", "_blank");
      userLink.innerText = "Profile Link";

      div.append(userImage, userName, userLink);
      cards.append(div);
    }
  });
