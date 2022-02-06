console.log("Hello Deril");

window.onload = function(){

    // window.onload helps you to render/read commands as the browser is loading. It is recommended to use them and write codes inside this function in JS.


    // document.getElementbyId lets you select the element or the id of that HTML tag that you want to change by equalizing it to a varible. Here the keyword is 'let' for initializing the block variable. 

    let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");

// Let's you create a class to change the tag after it is being clicked by using the 'variablename.onclick


btn.onclick = function change(){
    btnText.innerHTML = "Thanks"
    btn.className = "active";


};
}

