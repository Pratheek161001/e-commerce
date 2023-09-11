// might need variables

var sellingprice = document.getElementById("Sellingprice");
var productname = document.getElementById("Productname");
var addproduct = document.getElementById("button")
var newlist = document.getElementById("datalist")
var cost=document.getElementById("price")


// to prevent data from being lost while refreshing 

window.addEventListener('DOMContentLoaded',()=>{

    for(let i=0;i<localStorage.length;i++){
        let b=localStorage.key(i)
        let res=localStorage.getItem(b) 
        let result=JSON.parse(res)
        showScreen(result)
    }
})

// to show in screen

function showScreen(show){

    let child=`<li id=${show.sellingprice}>${show.sellingprice}---${show.productname}
    <input type="button" value="delete" id="delete" onclick='del(${show.sellingprice})'></li>`
    let sum=0;
    for(let i=0;i<localStorage.length;i++){
        sum+=JSON.parse(localStorage.key(i))
    }
    let price=`<li id="totalprice">Total price worth-->${sum}</li>`


    datalist.innerHTML+=child
    cost.innerHTML=price 
    
}

// function totalprice(key){
//     // let sum=0
//     // sum+=key
//     return key;

// }

// to add data to both cloud and localstorage

button.onclick=async(e)=>{
    e.preventDefault()
    let obj={
        sellingprice:sellingprice.value,
        productname:productname.value
    }
    axios.post("https://crudcrud.com/api/343d7834f68b4a628b3fb57da1551f66/product",obj)
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })


    localStorage.setItem(sellingprice.value,JSON.stringify(obj))

    let child=`<li id=${sellingprice.value}>${sellingprice.value}---${productname.value} 
    <input type="button" value="delete" id="delete" onclick='del(${sellingprice.value})'></li>`
    let sum=0;
    for(let i=0;i<localStorage.length;i++){
        sum+=JSON.parse(localStorage.key(i))
    }
    let price=`<li id="totalprice">Total price worth-->${sum}</li>`


    datalist.innerHTML+=child
    cost.innerHTML=price
}

// to delete data from both localstorage and cloud

function del(key){
    let child=document.getElementById(key)
    datalist.removeChild(child)
    localStorage.removeItem(key)
    let sum=0;
    for(let i=0;i<localStorage.length;i++){
        sum+=JSON.parse(localStorage.key(i))
    }
    let price=`<li id="totalprice">Total price worth-->${sum}</li>`

    cost.innerHTML=price
}


