const music1 = new Audio('./assest/gameWin.mp3');
const music2 = new Audio('./assest/gameOver.mp3');
const music3 = new Audio('./assest/u_click.mp3')
const boxes = document.querySelectorAll('.boxes')
console.log(boxes[0].children[0].textContent);




const arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let turn = "X";
let count = 0;
let flag = 0;


function win_check(e){
    count++;


    
   

    
        

        for(let i=0;i<arr.length;i++){
            if((boxes[arr[i][0]].children[0].textContent===boxes[arr[i][1]].children[0].textContent) && (boxes[arr[i][1]].children[0].textContent===boxes[arr[i][2]].children[0].textContent) && ((boxes[arr[i][0]].children[0].textContent!==""))){

                music1.play()

                for(let j=0;j<3;j++){
                    boxes[arr[i][j]].style = "background-color:rgb(163, 226, 163);pointer-events:none"
                    
                }

               

                
                flag = 1;
                break
            }
            
        }

      


        if(flag===1){
            
            
            

            turn = turn==="X"?"O":"X"

            
            document.querySelector('.turn').textContent = `${turn} Won`
            document.querySelector('.win-img').style = "width: 15vw"

            for(let i=0;i<boxes.length;i++){
                if(boxes[i].children[0].textContent === ""){
                    boxes[i].style = "pointer-events:none"
                }
                

            }
           

            turn = "X"
            
            

        }

       
       
       

       
        else{
            if(count===9){
                music2.play()
            
             
                document.querySelector('.turn').textContent = `Game Over!!!`
                document.querySelector('.over-img').style = "width: 15vw"

                 for(let i=0;i<boxes.length;i++){
                boxes[i].style = "pointer-events:none"

            }

            turn = "X"
               
    
            }
            else{
                document.querySelector('.turn').textContent = `Turn for : ${turn}`
            }
           
        }
    
    





}





function click(e){
    music3.play()
    e.target.style = "pointer-events:none"
   

    e.target.children[0].textContent = turn;
    
    
    
    
    
   
    turn  = turn==="X"?"O":"X";
   

    win_check(e)




}



function over(e){
    
    e.target.children[1].textContent = `${turn}`
   
    e.target.children[1].style = "display:block"
   

}

function out_(e){


    
    e.target.children[1].style = "display:none"
   

}


for(let i=0;i<boxes.length;i++){
   
    
    boxes[i].addEventListener('click',click)

}


for(let i=0;i<boxes.length;i++){
   
    boxes[i].addEventListener('mouseover',over)
    boxes[i].addEventListener('mouseout',out_)
    
   

}






function reset(){
    count  = 0

    
   

    document.querySelector('.turn').textContent = "Turn for : X"
    document.querySelector('.win-img').style = "width:0vw"
    document.querySelector('.over-img').style = "width: 0vw"


    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<3;j++){
            boxes[arr[i][j]].children[0].textContent= ""
        }
    }
    
    
    
    for(let i = 0;i<boxes.length;i++){
        boxes[i].style = "pointer-events:auto"
        
    }
    flag=0;
}
document.querySelector('.reset-btn').addEventListener('click',reset)