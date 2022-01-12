function AbrirFilme(id){
    dadosdofilmeJSON = Filme(id);

    var img_background = dadosdofilmeJSON.backdrop_path
    var idIMDB = dadosdofilmeJSON.imdb_id
    var titulo = document.getElementById('titlefilm')
    var descricao = document.getElementById('overviewfilm')

    titulo.innerHTML = dadosdofilmeJSON.title
    descricao.innerHTML = dadosdofilmeJSON.overview 

    var frame = document.getElementById('videofilm');
    frame.innerHTML = '<iframe src="https://embed.warezcdn.com/filme/'+idIMDB+'" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>'
    alterarbackground(img_background)
}