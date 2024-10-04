document.getElementById("btn1").addEventListener("click", dataDisplay);

async function dataDisplay() {

    let  Table = `<table border="1" width="90% bgcolor="pink">
    <tr bgcolor = "orange">
    <th>URL</th>
    <th>Title</th>
    <th>Content </th>
    <th>Image </th>

    </tr>
     `




    let api = "https://jsonplaceholder.org/posts";
    const Obj = await fetch(api);
    const Data = await Obj.json();
    // console.log(Data);

    Data.map((item)=>{
        Table+=`<tr>
                <td> ${item.slug}</td>)
                <td> ${item.url}</td>)
                <td> ${item.title}</td>)
                <td> ${item.status}</td>)
                <td>
                <img src= '${item.image}'"width="100" height ="100">
                </td>
                </tr>
        `
    })
    Table+="</table>"
    document.getElementById("demo").innerHTML=Table;
}