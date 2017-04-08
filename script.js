var listItems = document.querySelectorAll('li');

for(var i=0; i<listItems.length; i++){
    listItems[i].addEventListener("click", function(event){
        alert("You just clicked on " + event.target.innerText);
    });
}

