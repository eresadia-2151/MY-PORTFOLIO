document.getElementById('contact').addEventListener('submit',function(event){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var Message=document.getElementById('Message').value;

    if (name===''||email===''||Message===''){

        alert('Input the missing values');
        event.preventDefault();
    }

}
);