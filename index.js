const displlay=document.getElementById("display")
function insertValue(value){
    displlay.value+=value
}


function clearRuselt(){
    displlay.value=""
}

function deleteRuselt(){
    displlay.value = displlay.value.slice(0, -1)
}


function calculate(){
    try{
        displlay.value = eval(displlay.value)
    }
    catch(error){
        displlay.value="Error"
    }
}

