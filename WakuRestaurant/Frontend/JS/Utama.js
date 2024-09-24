document.querySelectorAll(".nav")[0].checked = true;
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>3){
        counter = 1;
    }
}, 5000);

let checker = document.querySelectorAll(".nav");
for(let i=0; i<checker.length;i++){
    
    checker[i].addEventListener("click", function(){
        let slide = document.querySelector(".card-container");
        if(checker[0].checked==true){
            
            slide.style.right = "0px";
        }else if(checker[1].checked==true){
            
            slide.style.right = "17%";
        }else if(checker[2].checked==true){
            
             slide.style.right = "33%";
        }else if(checker[3].checked==true){
            
             slide.style.right = "50%";
        }else if(checker[4].checked==true){
            
             slide.style.right = "67%";
         }else if(checker[5].checked==true){
            
             slide.style.right = "83.25%";
         }
    })
}

let plus = document.querySelectorAll(".plus");
for(let i=0; i<plus.length; i++){

    plus[i].addEventListener('click', function(){

        let quantity = plus[i].nextElementSibling.querySelector("p").innerHTML;
        let total=0;
        let cont = parseInt(quantity);
        let totalCon = document.querySelector(".price-number"); 
        let name = document.querySelectorAll(".list");
        let price = parseInt(name[i].querySelector(".list-price-container").innerHTML);
        console.log(price);
        
        cont = cont+1;
        if(cont>0){
            console.log("hello");
            name[i].style.display = "flex";
            
        }
        plus[i].nextElementSibling.querySelector("p").innerHTML = cont;
        name[i].querySelector(".list-quantity-container").innerHTML=cont;
        name[i].querySelector(".list-total-container").innerHTML = price*cont;

        let allprice = document.querySelectorAll(".list-total-container");

        allprice.forEach(function(e){
            total+=parseInt(e.innerHTML);
        })

        totalCon.innerHTML = total;


        
        
    })
}

let minus = document.querySelectorAll(".minus");
for(let i=0; i<minus.length; i++){

    minus[i].addEventListener('click', function(){

        let quantity = minus[i].previousElementSibling.querySelector("p").innerHTML;
        let name = document.querySelectorAll(".list");
        let cont = parseInt(quantity);
        let price = parseInt(name[i].querySelector(".list-price-container").innerHTML);
        let total = 0;
        let totalCon = document.querySelector(".price-number");

        if(cont==0){
            cont = 0;
            
        }else{
            cont = cont-1;
        }

        if(cont==0){
            name[i].style.display="none";
        }
        minus[i].previousElementSibling.querySelector("p").innerHTML = cont;
        name[i].querySelector(".list-quantity-container").innerHTML=cont;
        name[i].querySelector(".list-total-container").innerHTML = price*cont;

        let allprice = document.querySelectorAll(".list-total-container");

        allprice.forEach(function(e){
            total+=parseInt(e.innerHTML);
        })

        totalCon.innerHTML = total;
    })
}

document.querySelector(".cart-container").addEventListener('click', function(){
    let overlay = document.querySelector(".overlay");
    let listContainer = document.querySelector(".list-container");
    listContainer.classList.toggle("move");
    overlay.style.display="block";
})
document.querySelector(".return-container").addEventListener('click', function(){
    let overlay = document.querySelector(".overlay");
    let listContainer = document.querySelector(".list-container");
    listContainer.classList.toggle("move");
    overlay.style.display="none";
})


