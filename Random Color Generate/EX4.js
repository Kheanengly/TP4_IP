let generate_button = document.getElementById("generate");
let color_box = document.getElementById("box_color");
let reset = document.getElementById("reset");
let container_color = document.getElementById("container_color");
let box = document.getElementById("box");
console.log( generate_button);
class Color{
    colorType='';
    records=["#2DFC07"];
    constructor(type){
        this.colorType=type;
        this.records = type;
    }

    generate(){
        this.i=0;
        generate_button.addEventListener("click",async function(){
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            var i=1;
            const  records=["#2DFC07"];
            while(1>0){
                const tp = new Color();
              
                let color =  tp.getRandomNumber();
                localStorage.setItem('input',color);
                document.getElementById("color1").innerHTML=localStorage.getItem('input');
                const str = document.createTextNode(color);
                var string =  document.createRange().createContextualFragment("<div id='box'> <p id='color1' class='color'># </p><div class='color' id='box_color' >11</div>");
                container_color.appendChild(string);
                document.getElementById("text2").innerHTML=color;
                document.getElementById("text2").style.color=color;
                color_box.style.background=color;
                color_box.style.color=color;
                const tps = new Color(color);
                
                records.push(color);
                // console.log(records[i]);
                tps.getRecords(records[i],i);
               
                await sleep(200); 
                i++;
               
            }
            
        });
    }

    getRandomNumber(){
        var letters = "0123456789ABCDEF";
        // html color code starts with #
        var color = '#';
        // generating 6 times as HTML color code consist
        // of 6 letter or digits
        for (var i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))];
        return color;
    }

    getRecords(color,i){
        console.log(color)
        console.log(localStorage.setItem('input',color))
        if(localStorage.setItem(i,color)!=null){
            alert("yes");
          
        }else{
           
        }
    }

    reset(){
        reset.addEventListener("click",function(){
           container_color.remove();
           var string =  document.createRange().createContextualFragment(" <div id='container_color'><div id='box'> <p id='color1' class='color'># </p><div class='color' id='box_color' >11</div> </div>");
           
           
        })
    }
}

let tp = new Color();
tp.generate()
tp.reset()
// console.log()

    // const para = document.createElement("p");
    // const node=document.createTextNode("This is a paragraph.");
    // container_color.appendChild(para.appendChild(node));
   


