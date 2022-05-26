var data=JSON.parse(localStorage.getItem("products"));
data.map(function(el,index){
    var box=document.createElement("div");
    box.setAttribute("id" , "dibba");

    var image=document.createElement("img");
    image.innerText=el.image;
    image.setAttribute("id", "picture");

    var name=document.createElement("h5");
    name.innerText=el.type;
    

    var des=document.createElement("h5");
    des.innerText=el.description;

    var price1=document.createElement("h5");
    price1.innerText=el.price

    var btn=document.createElement("button");
    btn.innerText="Remove";
    btn.setAttribute("id", "button")
    btn.addEventListener("click", function(){
        Removing(el,index);
    });

    box.append(image,name,des,price1,btn);
    document.querySelector("#all_products").append(box);
})
function Removing(el,index){
    data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(data));
   
}