var array=["audios/aud1.mp3","audios/aud2.mp3","audios/aud3.mp3","audios/aud4.mp3"]

var audioo=document.getElementById('myAudio')

var palyyy=document.getElementById('playy')
var repeattt=document.getElementById('repeat')
var shuffleee=document.getElementById('shuffle')
var spanname=document.getElementById('audioname')



function palyaud(index){
    audioo.src=array[index]
    audioo.play();
    spanname.innerText=array[index]
    spanname.style.display='block'
    audioo.addEventListener('ended',function(){
        index++
        if(index==array.length){
            index=0;
        }
        palyaud(index)
    })
}
function playaudioo(){
    palyyy.style.backgroundColor='red'
    repeattt.style.backgroundColor='white'
    shuffleee.style.backgroundColor='white'
     palyaud(0)
}

function repeataudioo(){
   palyyy.style.backgroundColor='white'
    repeattt.style.backgroundColor='red'
    shuffleee.style.backgroundColor='white'

    audioo.loop=true;
}

function ShuffAudio(index){
    audioo.src=array[index]
    audioo.play();
    spanname.innerText=array[index]
    spanname.style.display='block'
    audioo.addEventListener('ended',function(){
        index=Math.floor((Math.random() * array.length));
        ShuffAudio(index)
    })
}

function shuffleaudio(){
    palyyy.style.backgroundColor='white'
    repeattt.style.backgroundColor='white'
    shuffleee.style.backgroundColor='red'
    var index=Math.floor((Math.random() * array.length));
    ShuffAudio(index)
}














