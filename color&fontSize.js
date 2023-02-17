const textareaFieldValue =document.getElementById("textareaField");

document.getElementById('number').addEventListener('change', function(){
    const fontsize =document.getElementById('number').value;
    textareaFieldValue.style.fontSize=`${fontsize}px`;
})



document.getElementById('color').addEventListener('change', function(){
    const colorField =document.getElementById('color').value;
    textareaFieldValue.style.color =`${colorField}`;
})