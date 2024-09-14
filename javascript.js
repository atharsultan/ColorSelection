const body=document.querySelector('body');
const btnElement=document.querySelectorAll('.button');
const message=document.querySelector('#msg');
const imgElement=document.querySelector('#img')


btnElement.forEach(function (btn){
   
    document.body.addEventListener('click' , function(e) {
 
        switch (e.target.id) {
            case 'grey':
            case 'black':
            case 'blue':
            case 'DarkRed':
            case 'purple':
                body.style.backgroundColor = e.target.id; // Change body background color
                e.target.style.color = e.target.id; // Change text color of clicked button
                message.innerHTML=`you clicked ${e.target.id} box`;
                break;
            }
        });
    });