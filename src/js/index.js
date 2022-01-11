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
    return info
}

function openfilm(id){
    filme = film(id)
    return filme
}


function CreateDivFilms(road,id1,id2,id3,id4){
    content_divs_space = document.getElementById(road);

    // Criei o group-div
    group_divs = document.createElement('div');
    group_divs.setAttribute('class','group-divs');
    content_divs_space.append(group_divs);
    
    // Criei a original_content-div1
    original_content_div1 = document.createElement('div');
    original_content_div1.setAttribute('class','original_content-div');
    group_divs.append(original_content_div1);


    // Criei a div_originals1
    divoriginals1 = document.createElement('div');
    divoriginals1.setAttribute('class','div_originals');
    divoriginals1.setAttribute('id',id1);
    divoriginals1.setAttribute("onclick","openfilm(id)");
    divoriginals1.setAttribute("onmouseenter","EmphasisFilm(id)")
    divoriginals1.setAttribute("onmouseout","NormalFilm(id)");
    original_content_div1.append(divoriginals1);
    
    // Criei a imagem da div
    dadosdofilme1 = film(id1);
    atribute_id1 = "img"+id1;
    poster1 = "https://www.themoviedb.org/t/p/original"+(dadosdofilme1.poster_path);
    image1 = document.createElement('img');
    image1.setAttribute('class','img_poster-g');
    image1.setAttribute('id',atribute_id1);
    image1.setAttribute('src',poster1);
    divoriginals1.append(image1);

    // Criei a div_originals2
    divoriginals2 = document.createElement('div');
    divoriginals2.setAttribute('class','div_originals');
    divoriginals2.setAttribute('id',id2);
    divoriginals2.setAttribute("onclick","openfilm(id)");
    divoriginals2.setAttribute("onmouseenter","EmphasisFilm(id)")
    divoriginals2.setAttribute("onmouseout","NormalFilm(id)");
    original_content_div1.append(divoriginals2);

    // Criei a imagem da div
    dadosdofilme2 = film(id2);
    atribute_id2 = "img"+id2;
    poster2 = "https://www.themoviedb.org/t/p/original"+(dadosdofilme2.poster_path);
    image2 = document.createElement('img');
    image2.setAttribute('class','img_poster-g');
    image2.setAttribute('id',atribute_id2);
    image2.setAttribute('src',poster2);
    
    divoriginals2.append(image2);


     // Criei a original_content-div2
     original_content_div2 = document.createElement('div');
     original_content_div2.setAttribute('class','original_content-div');
     group_divs.append(original_content_div2);
 
 
     // Criei a div_originals3
     divoriginals3 = document.createElement('div');
     divoriginals3.setAttribute('class','div_originals');
     divoriginals3.setAttribute('id',id3);
     divoriginals3.setAttribute("onclick","openfilm(id)");
     divoriginals3.setAttribute("onmouseenter","EmphasisFilm(id)")
     divoriginals3.setAttribute("onmouseout","NormalFilm(id)");
     original_content_div2.append(divoriginals3);
     
     // Criei a imagem da div
     dadosdofilme3 = film(id3);
     atribute_id3 = "img"+id3;
     poster3 = "https://www.themoviedb.org/t/p/original"+(dadosdofilme3.poster_path);
     image3 = document.createElement('img');
     image3.setAttribute('class','img_poster-g');
     image3.setAttribute('id',atribute_id3);
     image3.setAttribute('src',poster3);
     divoriginals3.append(image3);
 
     // Criei a div_originals4
     divoriginals4 = document.createElement('div');
     divoriginals4.setAttribute('class','div_originals');
     divoriginals4.setAttribute('id',id4);
     divoriginals4.setAttribute("onclick","openfilm(id)");
     divoriginals4.setAttribute("onmouseenter","EmphasisFilm(id)")
     divoriginals4.setAttribute("onmouseout","NormalFilm(id)");
     original_content_div2.append(divoriginals4);
 
     // Criei a imagem da div
     dadosdofilme4 = film(id4);
     atribute_id4 = "img"+id4;
     poster4 = "https://www.themoviedb.org/t/p/original"+(dadosdofilme4.poster_path);
     image4 = document.createElement('img');
     image4.setAttribute('class','img_poster-g');
     image4.setAttribute('id',atribute_id4);
     image4.setAttribute('src',poster4);
     divoriginals4.append(image4);

}

function EmphasisFilm(id){
    document.getElementById(id).style.filter = "opacity(0.8)"
}
function NormalFilm(id){
    document.getElementById(id).style.filter = "opacity(1)"
}

function GetFilmsNetflix(){
    var idFilmes = ['646380','537116','335983','17654','554230','447332','739413',"315635"];
    tamanho = idFilmes.length;
    cont = 0;
    console.log('ok')
    while(cont < tamanho){
        id1 = idFilmes[cont];
        id2 = idFilmes[cont+1]
        id3 = idFilmes[cont+2]
        id4 = idFilmes[cont+3]
        CreateDivFilms('content-divs-space1',id1,id2,id3,id4);
        cont++;
        cont++;
        cont++;
        cont++;
    }
}

function GetFilmsPrimeVideo(){
    var idFilmes = ['479455','530915','588228','512200','466272','324786','448119','429617'];
    tamanho = idFilmes.length;
    cont = 0;
    console.log('ok')
    while(cont < tamanho){
        id1 = idFilmes[cont];
        id2 = idFilmes[cont+1]
        id3 = idFilmes[cont+2]
        id4 = idFilmes[cont+3]
        CreateDivFilms('content-divs-space2',id1,id2,id3,id4);
        cont++;
        cont++;
        cont++;
        cont++;
    }
}

function GetFilmsDisneyplus(){
    var idFilmes = ['335797','568124','566525','19995','497698','451048','508943','527774'];
    tamanho = idFilmes.length;
    cont = 0;
    console.log('ok')
    while(cont < tamanho){
        id1 = idFilmes[cont];
        id2 = idFilmes[cont+1]
        id3 = idFilmes[cont+2]
        id4 = idFilmes[cont+3]
        CreateDivFilms('content-divs-space3',id1,id2,id3,id4);
        cont++;
        cont++;
        cont++;
        cont++;
    }
}

function GetFilmsHbomax(){
    var idFilmes = ['603','157336','333339','38','76341','791373','464052','399566'];
    tamanho = idFilmes.length;
    cont = 0;
    console.log('ok')
    while(cont < tamanho){
        id1 = idFilmes[cont];
        id2 = idFilmes[cont+1]
        id3 = idFilmes[cont+2]
        id4 = idFilmes[cont+3]
        CreateDivFilms('content-divs-space4',id1,id2,id3,id4);
        cont++;
        cont++;
        cont++;
        cont++;
    }
}

function AtualizarFilmes(){
    GetFilmsNetflix()
    GetFilmsPrimeVideo()
    GetFilmsDisneyplus()
    GetFilmsHbomax()
}