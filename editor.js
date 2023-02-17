

function italic(){
    if (document.getElementById("textareaField").style.fontStyle=='italic'){
      document.getElementById("textareaField").style.fontStyle=null;
    }
    else{
      document.getElementById("textareaField").style.fontStyle='italic';
    }
  }


function underline(){
    if (document.getElementById("textareaField").style.textDecoration=="underline"){
      document.getElementById("textareaField").style.textDecoration = null;
    }
    else{
      document.getElementById("textareaField").style.textDecoration= 'underline';
    }
  }



document.getElementById('bold').addEventListener('click', function(){
   const bolder= document.getElementById('textareaField');
    if (bolder.style.fontWeight == 'bold'){
        bolder.style.fontWeight = 'normal';
    }
    else{
        bolder.style.fontWeight = 'bold';
    } 
})

document.getElementById('italic').addEventListener('click', function(){
    italic();
})

document.getElementById('underline').addEventListener('click', function(){
    underline();
    
})