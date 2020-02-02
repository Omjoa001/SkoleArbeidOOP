let bilde = document.getElementById("bilde");

function fetchUsers() {
  return new Promise(async (resolve, reject) => {
    let response = await fetch("https://api.github.com/users/remy");
    let data = await response.json();
    resolve(data);
  });
}
fetchUsers().then(verdi => {
  bilde.src = verdi.avatar_url;
  console.log(verdi.avatar_url);
});
