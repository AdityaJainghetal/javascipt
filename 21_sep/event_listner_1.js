document.getElementById("btn1").addEventListener("click" ,myCal);



function myCal(){

    let phy =Number(document.getElementById("phy").value);
    let che=Number(document.getElementById("che").value);
    let math=Number(document.getElementById("math").value);
    let eng=Number(document.getElementById("eng").value);
    let hindi=Number(document.getElementById("hindi").value);




    let totalmarks = phy+che+math+eng+hindi;
    let pre=totalmarks*100/500;

    document.getElementById("ans1").innerHTML="Total marks : "+ totalmarks;
    document.getElementById("ans2").innerHTML="Percentage : "+ pre+" %";


}