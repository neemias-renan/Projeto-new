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


function creategroup_divs(){
    div = document.createElement('div')
    div.setAttribute('class','group-div')

}



function getDataFilms(code){
    key = "6de86843f2a0b13263c6fd3151644458"
    url = "https://api.themoviedb.org/3/movie/"+code+"?api_key="+key+"&language=pt-BR"
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function film(id){
    data = getDataFilms(id)
    info = JSON.parse(data)
    console.log(info.poster_path)
}

film(81002370)

