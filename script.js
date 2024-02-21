console.log("My music");
let progressbar=document.getElementById("progressbar");
let masterplay=document.getElementById("masterplay");
let songElement=new Audio("song1.mp3");
let sideplays=[]
for (let i = 0; i <3; i++) {
    sideplays[i]=document.getElementsByClassName("sideplay");
   
    

}
let songitems=Array.from(document.getElementsByClassName("item"));



console.log(sideplays);
let songlist=[{songname:"CheckKar", filepath:"song2.mp3", cover:"gaana.png"},
{songname:"Humnava Mere", filepath:"song1.mp3", cover:"bg.jpg"}]
masterplay.addEventListener("click", ()=>{
    if(songElement.paused || songElement.currentTime<=0){
        songElement.play();
        masterplay.setAttribute("src", "pause.jpg");
    }
    else{
        songElement.pause();
        masterplay.setAttribute("src","play.jpg");
    }
})
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songlist[i].cover;
    element.getElementsByTagName("span")[0].innerHTML=songlist[i].songname;


})
songElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
    progress=parseInt((songElement.currentTime/songElement.duration)*100);
    console.log(progress);
    progressbar.value=progress; 
})
progressbar.addEventListener("change", ()=>{
    songElement.currentTime=(progressbar.value*songElement.duration/100);
}
)
const makeAllplay=()=>Array.from(document.getElementsByClassName("icon2")).forEach((element)=>{
    element.src="play.jpg";})




Array.from(document.getElementsByClassName("icon2")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllplay();
        index = parseInt(e.target.id);
        e.target.src="pause.jpg";
        songElement.src= "song"+index+".mp3";
        songElement.currentTime = 0;
        songElement.play();
        masterplay.setAttribute("src", "pause.jpg");


    })
})




function lef(){
    songElement.src="song2.mp3";
    songElement.currentTime = 0;
    songElement.play();
    masterplay.setAttribute("src", "pause.jpg");


}
function rig(){
    songElement.src="song1.mp3";
    songElement.currentTime = 0;
    songElement.play();
    masterplay.setAttribute("src", "pause.jpg");


}