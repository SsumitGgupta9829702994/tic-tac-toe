<<<<<<< HEAD
let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let newbtn=document.querySelector("#NEWGAME");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const resetgame=() =>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");


}


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    

];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO===true){
        box.innerText="X";
        turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();

    });
});
const disablebox=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
};
const showwinner= (winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();


}
const checkwinner= ()=>{
    for(let pattern of winpattern){
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        if(posVal1!="" && posVal2!=""&&posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("winner");
                console.log(posVal1);
                showwinner(posVal1);
            }
        }



    }
     
    

}
newbtn.addEventListener("click",resetgame);
reset_btn.addEventListener("click",resetgame);
=======
let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");

let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    

];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO===true){
        box.innerText="X";
        turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;

    });
});
>>>>>>> 6a308c056dbbcbe561d7f91755b78e5f41b79b0d
