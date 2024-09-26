document.getElementById("setbtn").addEventListener("click", dataSet);
document.getElementById("getbtn").addEventListener("click", dataGet);
document.getElementById("clrbtn").addEventListener("click", clearData);

function dataSet(){
    let firstNm = document.getElementById("fnm").value
    let lastNm = document.getElementById("lnm").value;
    window.localStorage.setItem("firstName" , firstNm);
    window.localStorage.setItem("lastName", lastNm);
    alert("your data set in local storage");
}

function dataGet(){
    let myfnm = window.localStorage.getItem("firstName");
    let mylnm = window.localStorage.getItem("lastName");
    document.getElementById("ans").innerHTML="Hi i am "+ myfnm + " "+ mylnm+ " from Bhopal"
}

function clearData(){
    window.localStorage.clear();
    alert("Local storage clear");
}