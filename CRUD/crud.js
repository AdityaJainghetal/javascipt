function del(arg){
    fetch(`http://localhost:3000/Data/${arg}`,
    {
        method:"DELETE"
    }
)
}

let uid = null

async function edit(arg) {
    let data = await fetch('http://localhost:3000/Data');
    let response = await data.json();

    uid=arg;

    let a = response.find((e)=>e.id == arg);

    document.querySelector('#id').value = a.id;
    document.querySelector('#userid').value = a.userId;
    document.querySelector('#title').value = a.title;
    document.querySelector('#body').value = a.body;
    document.querySelector('.form').style.display = "block"
    document.querySelector('#output').style.filter = "blur(2px)"
    
}


function finalupdate(){
    let id = document.querySelector('#id').value
    let userid = document.querySelector('#userid').value 
    let title =document.querySelector('#title').value 
    let body = document.querySelector('#body').value 
    let obj ={
        "userId" : userid,
        "id" : id,
        "title" : title,
        "body": body
    }

    fetch(`http://localhost:3000/Data/${uid}`,
        {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(obj)


        }
    )
}

const show = async ()=>{
    let data = await fetch(`http://localhost:3000/Data`);
    let response = await data.json();

    console.log(response);

    let selecttable = document.querySelector('#output');
    selecttable.innerHTML = response.map((items)=>
    `
    <tr>
        <td>${items.id}</td>
        <td>${items.userId}</td>
        <td>${items.title}</td>
        <td>${items.body}</td>
        <td onclick="del('${items.id}')">delete</td>
        <td onclick="edit('${items.id}')">update</td>

        </tr>
    
    
    `
    
    )
}