// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


async function main(){
   const users = await fetch("https://jsonplaceholder.typicode.com/users");
   const usersData = await users.json();
   const userListEl = document.querySelector('.user-list');
   
   console.log(usersData)
   userListEl.innerHTML = usersData.map(user => userHtml(user)).join("");
}

main();

function showUserPosts(id){
   localStorage.setItem("id", id);
   window.location.href = `http://127.0.0.1:5500/user-posts-starter/user.html`;
}

function userHtml(user){
   return `<div class="user-card" onclick="showUserPosts(${user.id})">
   <div class="user-card__container">
      <h3>${user.name}</h4>
         <p><b>Email:</b> ${user.email} </p>
         <p><b>Phone:</b> ${user.phone} </p>
         <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
   </div>
</div>`
}