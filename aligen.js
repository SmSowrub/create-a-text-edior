document.getElementById('align-left').addEventListener('click', function(){
    document.getElementById('textareaField').style.textAlign='left';
})

document.getElementById('align-center').addEventListener('click', function(){
    document.getElementById('textareaField').style.textAlign='center';
})

document.getElementById('align-right').addEventListener('click', function(){
    document.getElementById('textareaField').style.textAlign='right';
})

document.getElementById('align-justify').addEventListener('click', function(){
    document.getElementById('textareaField').style.textAlign='justify';
})




function uppercaseToLowercase(){
    if (document.getElementById("textareaField").style.textTransform=="uppercase"){
      document.getElementById("textareaField").style.textTransform = null;
    }
    else{
      document.getElementById("textareaField").style.textTransform= 'uppercase';
    }
  }
  

document.getElementById('Transform').addEventListener('click', function(e){ 

    uppercaseToLowercase()
   
})