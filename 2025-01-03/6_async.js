
async function getData(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return data;
}

console.log(getData() );