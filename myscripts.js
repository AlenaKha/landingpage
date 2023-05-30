const image=document.getElementById("logotype");
logotype.addEventListener("mouseout", function() {logotype.width="300" });
logotype.addEventListener("mouseover", function() {logotype.width="400" });

const question= document.querySelector('.thirdparagraph');

const magic=document.getElementById('magic');

const buttonsList = document.querySelectorAll(".button");




function myFunction() {

    
  let newcolor = prompt("What is your favourite color?", "Pink");
  
         if ((newcolor != null) && (CSS.supports('color', newcolor))) {
            document.querySelector('.thirdparagraph').innerHTML =
            "Yay! " + newcolor + "! Great choice! Look how this webiste looks in " + newcolor.toLowerCase();
            document.body.style.color = newcolor;
   
             magic.innerText= 'Try me again!';
            for (let i = 0; i < buttonsList.length; i++) {
            buttonsList[i].style.backgroundColor = newcolor;}
    
    }
        else { document.querySelector('.thirdparagraph').innerHTML =
        "Are you sure that " + newcolor.toLowerCase() + " is a color?"  }

};



magic.addEventListener('click', myFunction);
