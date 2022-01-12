function ChaveAPI(){
    chave = '6de86843f2a0b13263c6fd3151644458'
    return chave
}

function CapturarDadosdoFilme(codigo){
    chave = ChaveAPI()

    url = "https://api.themoviedb.org/3/movie/"+codigo+"?api_key="+chave+"&language=pt-BR"
    
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function Filme(id){
    dadosdofilme = CapturarDadosdoFilme(id)
    dadosdofilmeJSON = JSON.parse(dadosdofilme)
    return dadosdofilmeJSON
}