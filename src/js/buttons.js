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

function buttonback(){
    document.getElementById('div-main').style.display = 'none';
    document.getElementById('container').style.overflow = 'auto';
    document.getElementById('button_menu-open').style.display = 'block';
    document.getElementById('button_back').style.display = 'none';

    var frame = document.getElementById('videofilm');
    frame.innerHTML = ''
}

function EmphasisFilm(id){
    document.getElementById(id).style.filter = "opacity(0.8)"
}

function NormalFilm(id){
    document.getElementById(id).style.filter = "opacity(1)"
}

function openstreaming(streaming){
    document.getElementById('container-inicio').style.display = 'none'
    document.getElementById('container-netflix').style.display = 'none'
    document.getElementById('container-primevideo').style.display = 'none';
    document.getElementById('container-disneyplus').style.display = 'none';
    document.getElementById('container-hbomax').style.display = 'none';
    document.getElementById('container-globoplay').style.display = 'none';
    document.getElementById('container-paramount').style.display = 'none';
    document.getElementById('container-telecineplay').style.display = 'none';
    
    document.getElementById(streaming).style.display = 'block';
}

function alterarbackground(id){
    document.getElementById('div-main').style.display = 'block'
    document.getElementById('nav').style.display = 'none';
    backgrou = 'url(https://www.themoviedb.org/t/p/original'+id+')';
    document.getElementById('div-main').style.background = backgrou; 
    document.getElementById('div-main').style.backgroundSize = 'cover';
    document.getElementById('div-main').style.backgroundPosition = 'center';
    document.getElementById('div-main').style.position = 'fixed';
    document.getElementById('container').style.overflow = 'hidden';
    document.getElementById('button_menu-open').style.display = 'none';
    document.getElementById('buttons_menu').style.display = 'flex';
    document.getElementById('button_back').style.display = 'flex';
}

