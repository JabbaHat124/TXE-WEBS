const menu =document.getElementById('close');
const navmenu =document.querySelector('nav');
const bar =document.getElementById('bar');
const cancel =document.getElementById('open');



function show(){
    if(navmenu.style.display = 'none'){
        navmenu.style.display = 'block';
    }else{
        navmenu.style.display = 'none' ;
    }
    cancel.style.display='block';
    bar.style.display='none';
}

function hide(){
    if(navmenu.style.display === 'none'){
        navmenu.style.display = 'block';
    }else{
        navmenu.style.display = 'none'; 
    }
    cancel.style.display='none';
    bar.style.display='block';
}