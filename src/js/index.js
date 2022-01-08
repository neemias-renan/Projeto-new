function openmenu(){
    document.getElementById('nav').style.display = 'flex';
    document.getElementById('button_menu-open').style.display = 'none';
    document.getElementById('button_menu-close').style.display = 'block';
}

function closemenu(){
    document.getElementById('nav').style.display = 'none';
    document.getElementById('button_menu-close').style.display = 'none';
    document.getElementById('button_menu-open').style.display = 'block';
}