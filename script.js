let body = document.body;

fetch('https://api.github.com/users/DMBorozdin')
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
    console.log(json.name);
    body.appendChild(userName);

    let userBio = document.createElement('p');
    if (json.bio != null) {
      userBio.innerHTML = json.bio;
    } else {
      userBio.innerHTML = 'Информация о пользователе не доступна';
    }
    userBio.classList.add('bio');
    console.log(json.bio);
    body.appendChild(userBio);

    console.log(json.html_url);
  })
  .catch(err =>  alert('Информация о пользователе не доступна'));
