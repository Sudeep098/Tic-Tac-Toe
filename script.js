let turn=0;
var audio=new Audio('audio.mp3');
function reload(){
    location.reload()
}
Array.from(document.getElementsByClassName("box")).forEach((e)=>{
    e.addEventListener("click", function click(){
        if(turn%2==0){
            e.innerHTML=0;
            audio.play();
        }
        else{
            e.innerHTML="X";
            audio.play();
        }
        turn+=1;
    })

})

let arr=[0,1,2,3,4,5,6,7];
let vals=[[], [], [], [], [], [],[],[]];
let state="false";
arr.forEach((i)=>{
    Array.from(document.getElementsByClassName(i)).forEach((e)=>{
        e.addEventListener("click", ()=>{
            let z=e.innerHTML;
            vals[i].push(z);
            if(vals[i].length==3){
                console.log(vals[i]);
                if(vals[i][0]==vals[i][1] & vals[i][1]==vals[i][2]){
                    console.log(z+"won");
                    document.getElementById("row1").innerHTML=z+"  won";
                    state="won";
                    setTimeout(reload, 3000);
                    
                    
                }
            }

        })
    })
})
