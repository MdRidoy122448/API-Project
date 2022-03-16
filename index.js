var showData = document.querySelector(".data-container");
fetch("https://reqres.in/api/users?page=2")
.then(response =>response.json())
.then(information =>{
    console.log(information)
    let length = information.data.length;
    for(let i = 0; i<length; i++){
        let createSomething = document.createElement("p");
        createSomething.innerHTML = `<h3>Id</h3> ${information.data[i].id} <h3>Name :</h3>${information.data[i].first_name}  ${information.data[i].last_name} <h3>E-mail :</h3> ${information.data[i].email}`;
        console.log(createSomething)
        showData.appendChild(createSomething)
    }
})
