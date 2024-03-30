
// const url = "https://cat-fact.herokuapp.com/facts";
// let Promise = fetch(url);
// console.log(Promise);

// const url ="https://cat-fact.herokuapp.com/facts"
// console.log("data will be process.....")
// const getFacts = async () => {
//   let responce = await fetch(url)
//   console.log(responce.json)
// }

// const url = "https://cat-fact.herokuapp.com/facts";
// const para =  document.getElementById("#get")
// const getFacts = async() =>{
//   let responce = await fetch(url);
//   console.log(responce);
//   let data = await responce.json();
//   para.innerText = data[0];
//   console.log(data)
// };
// document.addEventListener("click" , getFacts)
const url = "https://cat-fact.herokuapp.com/facts";
const para = document.getElementById("get");
const two = document.getElementById("two")
const btn = document.getElementById("btn");
const btno = document.getElementById("btno");
const getFacts = async () => {
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  para.innerText = data[4].text;
  console.log(data);
};
const getCat = async () =>{
  let responce = await fetch(url)
  console.log(responce)
  let big = responce.json()
  two.innerText = big[2].type;
  console.log(big);
}
document.addEventListener("click" ,getFacts)
document.addEventListener("click" ,getCat)


