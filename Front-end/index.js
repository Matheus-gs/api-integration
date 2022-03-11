const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.getElementsByName("userName")[0].value;
  const userPass = document.getElementsByName("userPass")[0].value;

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };

  const method = "GET";
  const url = `http://localhost:3001?register&userName=${userName}&userPass=${userPass}`;

  xhr.open(method, url, true);

  xhr.send();
});

document.body.onload = () => {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    res = JSON.parse(this.response);

    fetch(res).then(resp.json()).then(users =>{
        const tableData = users.reduce(
            (html, user) => {
                html + `<td>${user}</td>`
                console.log(user)
            }
        )
        document.querySelector("tbody#demo").insertAdjacentHTML('beforeend', `<tr>${tableData}</tr>`)
    })
  };

  const method = "GET";
  const url = `http://localhost:3001?registeredData`;

  xhr.open(method, url, true);
  xhr.send();
};
