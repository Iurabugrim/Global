document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(users => {
            const usersList = document.getElementById('users-list');
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');
                userElement.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}" width="50" height="50">
                    <div class="user-info">
                        <h3>${user.login}</h3>
                        <button onclick="viewDetails('${user.login}')">View Details</button>
                    </div>
                `;
                usersList.appendChild(userElement);
            });
        })
        .catch(error => console.error('Error fetching data: ', error));
});

function viewDetails(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(user => {
            alert(`Username: ${user.login}\nFollowers: ${user.followers}\nFollowing: ${user.following}\nRepositories: ${user.public_repos}`);
        });
}


function searchUser() {
    const username = document.getElementById('username').value;
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';

    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(user => {
                if (user.message === 'Not Found') {
                    alert('User not found');
                    return;
                }
                const userElement = document.createElement('div');
                userElement.classList.add('user');
                userElement.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}" width="50" height="50">
                    <div class="user-info">
                        <h3>${user.login}</h3>
                        <button onclick="viewDetails('${user.login}')">View Details</button>
                    </div>
                `;
                usersList.appendChild(userElement);
            });
    } else {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(users => {
                users.forEach(user => {
                    const userElement = document.createElement('div');
                    userElement.classList.add('user');
                    userElement.innerHTML = `
                        <img src="${user.avatar_url}" alt="${user.login}" width="50" height="50">
                        <div class="user-info">
                            <h3>${user.login}</h3>
                            <button onclick="viewDetails('${user.login}')">View Details</button>
                        </div>
                    `;
                    usersList.appendChild(userElement);
                });
            });
    }
}
