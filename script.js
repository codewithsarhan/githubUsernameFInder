let usernameInput = document.querySelector('#usernameInput');
let searchBtn = document.querySelector('#searchBtn');
let errorBox = document.querySelector('#errorBox');
let profileCard = document.querySelector('#profileCard');
let avatar = document.querySelector('#avatar');
let fullName = document.querySelector('#fullName');
let userHandle = document.querySelector('#userHandle');
let bio = document.querySelector('#bio');
let reposCount = document.querySelector('#reposCount');
let followersCount = document.querySelector('#followersCount');
let followingCount = document.querySelector('#followingCount');
let profileLink = document.querySelector('#profileLink');

searchBtn.addEventListener('click', (event) => {

    event.preventDefault();

    let usernameValue = usernameInput.value;

    let xhr = new XMLHttpRequest;

    let url = `https://api.github.com/users/${usernameValue}`;

    xhr.open("GET", url);

    xhr.onreadystatechange = function () {

        console.log(xhr.readyState);

        if (xhr.readyState === 4) {


            let convertFormat = JSON.parse(xhr.responseText)

            console.log(convertFormat);

            let userData = convertFormat;

            if (userData.name === undefined) {
                errorBox.classList.remove("hidden")
            } else {


                bio.textContent = userData.bio;

                avatar.src = userData.avatar_url;

                fullName.textContent = userData.name;

                userHandle.textContent = `@${userData.login}`

                followersCount.textContent = userData.followers;
                followingCount.textContent = userData.following;
                reposCount.textContent = userData.public_repos;

                profileLink.addEventListener('click', () => {

                    window.location.href = userData.html_url

                })

                profileCard.classList.remove('hidden')

            }



        }


    }


    xhr.send();

})