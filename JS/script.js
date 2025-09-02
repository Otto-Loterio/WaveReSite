var setaDireita = document.getElementsByClassName('setaDireita')[0]
var setaEsquerda = document.getElementsByClassName('setaEsquerda')[0]
var album = document.getElementsByClassName('aMusica')[0]
var nomeAlbum = document.getElementsByClassName('nomeAlbum')[0]
var nomeArtista = document.getElementsByClassName('nomeArtista')[0]
var play = document.getElementsByClassName('tocar')[0]
var audio = document.getElementsByClassName('audioTocar')[0]
var i = 0

var albunsMusicas = ['./sounds/We_Major.mp3',
    './sounds/sublime_nostalgia.mp3',
    './sounds/Let_Me_See_The_Sun.mp3',
    './sounds/Rickets.mp3',
    './sounds/Casinha_de_Sapê.mp3',
    './sounds/Seriado.mp3',
]

var albunsFotos = ['./img/LateRegistration.jfif',
    './img/Coleus.jfif',
    './img/13LentesDeUmFinalFeliz.jfif',
    './img/AroundTheFur.jfif',
    './img/Nuvens.jfif',
    './img/ArthurVerocai.jfif'
]

var albunsNomes = ['Late registration',
    'Coleus',
    '13 lentes de um final feliz',
    'Around the fur',
    'Nuvens',
    'Arthur Verocai'
]

var albunsArtistas = ['Kanye West',
    'D$ luqi',
    'Yun Li',
    'Deftones',
    'Tim Maia',
    'Arthur Verocai'
]

totalAlbunsFotos = albunsFotos.length
totalAlbunsNomes = albunsNomes.length
totalArtistas = albunsArtistas.length

audio.addEventListener('ended', acabar)
setaDireita.addEventListener('click', irAlbum)
setaEsquerda.addEventListener('click', voltarAlbum)
play.addEventListener('click', darPlay)

function acabar() {
    play.innerHTML = 'Tocar música'
}

function irAlbum() {
    album.src = albunsFotos[i = (i + 1) % totalAlbunsFotos]
    nomeAlbum.innerHTML = albunsNomes[i]
    nomeArtista.innerHTML = albunsArtistas[i]
    audio.src = albunsMusicas[i]
    play.innerHTML = 'Tocar música'
}

function voltarAlbum() {
    album.src = albunsFotos[i = (i - 1 + totalAlbunsFotos) % totalAlbunsFotos]
    nomeAlbum.innerHTML = albunsNomes[i]
    nomeArtista.innerHTML = albunsArtistas[i]
    audio.src = albunsMusicas[i]
    play.innerHTML = 'Tocar música'
}

function darPlay() {
    if(audio.paused){
        audio.play()
        play.innerHTML = 'Pausar música'
    }
    else{
        audio.pause()
        play.innerHTML = 'Tocar música'
    }
}
