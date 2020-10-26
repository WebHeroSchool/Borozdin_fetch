let body = document.body;

fetch('https://api.github.com/users/DmBorozdin')
  .then(info => info.json())
  .then(json => {
    console.log(json.avatar_url);
    let userAvatar = new Image();
    userAvatar.src = json.avatar_url;
    userAvatar.classList.add('image');
    body.appendChild(userAvatar);

    let userName = document.createElement('a');
    userName.href = json.html_url;
    userName.innerHTML = json.name;
    userName.classList.add('link');
    console.log(userName);
    console.log(json.name);
    body.appendChild(userName);

    let userBio = json.bio;
    console.log(userBio);

    console.log(json.html_url);
  })
  .catch(err => console.log(err));
