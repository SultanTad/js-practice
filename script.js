let getUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  let list = document.querySelector(".list-users");

  for (let key in users) {
    list.innerHTML +=
      //у каждого пользователя отобразить только id и username
      //Получить из данных выше список всех эмейлов
      `
        <li>${users[key].id}</li>
        <li>${users[key].username}</li>
        <li>${users[key].email}
        `;
  }
  //Вывести пользователя с id === 9
  for (let key in users) {
    users[key].id === 9
      ? (list.innerHTML += `
        <li>${users[key].id}</li>
        <li>${users[key].username}</li>
        `)
      : null;
  }
  //Вывести всех пользователей из города 'Lebsackbury'
  for (let key in users) {
    users[key].address.city === "Lebsackbury"
      ? (list.innerHTML += `
      <li>${users[key].address.city}</li>
      <li>${users[key].username}</li>
      `)
      : null;
  }
};

const getReverseUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();
  let reverseUsers = users.reverse();

  let list = document.querySelector(".list-users");

  //Вывести всех пользователей в обратном порядке
  for (let key in reverseUsers) {
    list.innerHTML += `
        <li>${reverseUsers[key].username}</li>
        `;
  }
};

const getFiveUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();
  let firstFiveUsers = users.slice(0, 5);

  let list = document.querySelector(".list-users");

  //Вывести первых 5 пользователей
  for (let key in firstFiveUsers) {
    list.innerHTML += `<li>${firstFiveUsers[key].username}</li>`;
  }
};

//Посчитать сколько всего пользователей
const countUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  let list = document.querySelector(".list-users");

  list.innerHTML += `<li>${users.length}</li>`;
};

//Вывести список вебсайтов пользователей которые содержат '.com'
const websiteUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  let list = document.querySelector(".list-users");

  for (let key in users) {
    users[key].website.match(/.com/g)
      ? (list.innerHTML += `<li>${users[key].website}</li>`)
      : null;
  }
};

//Вывести все username которые длиннее 12 символов
const lengthUsername = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  let list = document.querySelector(".list-users");

  for (let key in users) {
    users[key].username.length > 12
      ? (list.innerHTML += `<li>${users[key].username}</li>`)
      : null;
  }
};

//Привести список всех username где каждый будет в нижнем регистре
const lowerCaseUsername = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  let list = document.querySelector(".list-users");

  for (let key in users) {
    list.innerHTML += `<li>${users[key].username.toLowerCase()}</li>`;
  }
};

getUsers();
getReverseUsers();
getFiveUsers();
countUsers();
websiteUsers();
lengthUsername();
lowerCaseUsername();
