//store the products array in localstorage as "products"
function Constructor(type,description,image,price){
this.type=type;
this.description=description;
this.image=image;
this.price=price;
}
let arr=JSON.parse(localStorage.getItem("products"))||[];
function ProductsForm(){
    event.preventDefault();
    let form=document.getElementById("products");
    let type=form.type.value;
    let description=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    //console.log(type,description,image,price);
var s=new Constructor(type,description,image,price);
arr.push(s);
//console.log(arr);
localStorage.setItem("products", JSON.stringify(arr));
}