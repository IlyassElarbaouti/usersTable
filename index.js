const table = document.querySelector('.table')
const headerBtn = document.querySelector('.header__btn')
const form = document.querySelector('.form')
const addBtn = document.querySelector('.addBtn')
const closeBtn = document.querySelector('.closeBtn')
let clickedUser;

//create row
const createRow = (id,name,username,email,website)=>{
    const row = document.createElement('tr');
    row.setAttribute('id',table.childElementCount)
    table.appendChild(row);
    const nameCol=document.createElement('td');
    nameCol.textContent = name;
    const usernameCol=document.createElement('td');
    usernameCol.textContent = username;
    const emailCol=document.createElement('td');
    emailCol.textContent = email;
    const websiteCol=document.createElement('td');
    websiteCol.textContent = website;
    row.append(nameCol,usernameCol,emailCol,websiteCol);
}

//show form
const toggleForm = ()=>{form.classList.toggle('show')}
headerBtn.addEventListener('click',toggleForm)
closeBtn.addEventListener('click',toggleForm)

//add user
const addUser=(e)=>{
  e.preventDefault();
  toggleForm();
  let data = Object.fromEntries(new FormData(form).entries());
  data.id=table.childElementCount;
  const {id,name,username,email,website} = data;
  createRow(id,name,username,email,website)
}
form.addEventListener('submit',addUser);

//getdata
const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) =>
    res.json()
  ).then(data=>{
      data.map(user=>{
      const {id,name,username,email,website}=user;
      createRow(id,name,username,email,website)
      })
  })
};
fetchData();

//getClickedUser

