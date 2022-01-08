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

function openstreaming(streaming){
    document.getElementById('container-netflix').style.display = 'none'
    document.getElementById('container-primevideo').style.display = 'none';
    document.getElementById('container-disneyplus').style.display = 'none';
    document.getElementById('container-hbomax').style.display = 'none';
    document.getElementById('container-globoplay').style.display = 'none';
    document.getElementById('container-paramount').style.display = 'none';
    document.getElementById('container-telecineplay').style.display = 'none';

    document.getElementById(streaming).style.display = 'block';
}