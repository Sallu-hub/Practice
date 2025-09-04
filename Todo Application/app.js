var getul = document.getElementById('ul')
function addtodo(){
    var getinp = document.getElementById('inp')

if(getinp.value == ''){
    alert('please enter the value')
}
else{
    var createli = document.createElement('li')
    var litext = document.createTextNode(getinp.value)
    createli.appendChild(litext)
    getul.appendChild(createli)
    getinp.value = ''


    var delbtn = document.createElement('button')
    var deltext = document.createTextNode('Delete')
    delbtn.appendChild(deltext)
    createli.appendChild(delbtn)
  
  
    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    editbtn.appendChild(edittext)
    createli.appendChild(editbtn)
     delbtn.setAttribute('onclick','del(this)')
     editbtn.setAttribute('onclick','edit(this)')
}


   
}

function delall(){
    getul.innerHTML = ''
}

function del(e){
    e.parentNode.remove()
}

function edit(e){
    var editprompt =prompt('Enter Updated Text',e.parentNode.firstChild.textContent)
    e.parentNode.firstChild.textContent = editprompt
}



