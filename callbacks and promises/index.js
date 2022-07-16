async function postsByUserId(userid){
   const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
   const results = await promise.json();
   const posts = results.filter(element => element.userId === userid);

   return posts;
}

async function firstSixIncomplete(){
   const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
   const results = await promise.json();
   const incomplete = results.filter(element => !element.completed).slice(0,6);

   return incomplete;
}

console.log(postsByUserId(1));
console.log(firstSixIncomplete());