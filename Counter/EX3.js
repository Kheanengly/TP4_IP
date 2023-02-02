let butt_decrease = document.getElementById("item1");
let butt_reset = document.getElementById("item2");
let butt_increase = document.getElementById("item3");
var number;
class counter{
    number;
    constructor(number){
        this.number = number;
    }

   

    decrease(){
        butt_decrease.addEventListener("click",async function(){
            butt_decrease.style.background="#222222";
            butt_decrease.style.color="#ffffff";
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            for(var i=number;i>0;i--){
                number = number - 1;
                console.log(number);
                await sleep(500);  
                document.getElementById("num").innerHTML=number;
            }
            butt_decrease.style.background="#ffffff";
            butt_decrease.style.color="#000000";
           
        })
        
    }
    increase(){
        butt_increase.addEventListener("click",async function(){
            number=1;
            butt_increase.style.background="#222222";
            butt_increase.style.color="#ffffff";
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            for(var i=0;i<number;i++){
                number = number + 1;
                console.log(number);
                await sleep(500);  
                document.getElementById("num").innerHTML=number;
            }
            butt_increase.style.background="#ffffff";
            butt_increase.style.color="#000000";
            
        })
       
    }
    reset(){
        butt_reset.addEventListener("click",async function(){
            butt_reset.style.background="#222222";
            butt_reset.style.color="#ffffff";
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
           
            document.getElementById("num").innerHTML="0"
            number=0;
            await sleep(2000);
            butt_reset.style.background="#ffffff";
            butt_reset.style.color="#000000";
            num = localStorage.clickcount;
        })
    }

}

function clickCount() {
        
       if(localStorage.clickCount){
           localStorage.clickCount = Number(localStorage.clickCount)+1;
       } 
      
}
    const tp = new counter();
    tp.decrease();
    tp.increase();
    tp.reset();
  