'use strict';
let myForm=document.getElementById('form');
let table=document.getElementById('table');
let div=document.getElementById('div2');

let add=[];

const Employee= function (name,email,department) {
  this.name=name;
  this.email=email;
  this.department=department;
  this.salary=random(100,500);
  this.totalOfSalary=[];
  add.push(this);
};

function random(min,max)
{
  let a=Math.floor(Math.random()*(max-min+1)+min);
  return a;
}


let header =['Name','Email','Department','Salary'];
function head()
{
  let tr1=document.createElement('tr');
  table.appendChild(tr1);
  for (let i=0;i<header.length;i++){
    let th=document.createElement('th');
    tr1.appendChild(th);
    th.textContent=header[i];

  }
}
head(),
Employee.prototype.render=function()
{
  // table.textContent='';
  let tr2=document.createElement('tr');
  table.appendChild(tr2);


  let td1=document.createElement('td');
  tr2.appendChild(td1);
  td1.textContent=this.name;

  let td2=document.createElement('td');
  tr2.appendChild(td2);
  td2.textContent=this.email;

  let td3=document.createElement('td');
  tr2.appendChild(td3);
  td3.textContent=this.department;

  let td4=document.createElement('td');
  tr2.appendChild(td4);
  td4.textContent=this.salary;
  let p=document.createElement('p');
  div.appendChild(p);
  p.textContent=this.toatal;











};
myForm.addEventListener('submit',addEmployee);
function addEmployee(e) {
  e.preventDefault();
  let name=e.target.name.value;
  let email=e.target.email.value;
  let department=e.target.department.value;
  let newObj=new Employee(name,email,department);
  console.log(newObj);
  newObj.render();

  setting();


}
let totalOfSalary=[];
let total=0;
Employee.prototype.toatal=function()
{
  totalOfSalary.push(this.salary);

  for (let i=0;i<totalOfSalary.length;i++)
  {
    total=total+totalOfSalary[i];
  }
};

function setting()
{
  localStorage.setItem('emplooy',JSON.stringify(add));
}

function getting()
{
  if(localStorage.getItem('emplooy')!==null)
  {
    add=JSON.parse(localStorage.getItem('emplooy'));
  }
}
getting();

