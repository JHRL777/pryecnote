let darkmode = document.getElementById('darkmode');
let text= document.querySelector('.I-AM');
let comentario = document.getElementById('comentario');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun')
        document.body.classList.add('color')

    } else{
        darkmode.classList.replace('bx-sun','bx-moon')
        document.body.classList.remove('color')

    }
}

let objeto = [{
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        note: 'Aspernatur'
    },
    {
        note: 'suscipit tenetur labore vitae ab impedit exercitationem in quibusdam veritatis aperiam expedita! Libero,'
    },
    {
        note: 'voluptatibus'
    },
    {
        note: 'Eum nam deserunt enim odit, nisi quis'
    }

]

function obRndo(array){
    let objetoRandom = Math.floor(Math.random()* array.length)
    return array[objetoRandom]
}

console.log(objeto)

comentario.addEventListener('click', crearobjeto, obRndo);

function crearobjeto(){
    let objetoAleatorio = obRndo(objeto);
    console.log(objetoAleatorio);
    let p = document.createElement('p');
    p.classList.add('text')
    p.innerHTML = `${objetoAleatorio.note}`
    text.append(p)
    
}

let textcomentari = document.querySelector('.textcomentari');
let comentarioCreate = document.querySelector('#comentarioCreate');
let newComment = document.querySelector('.newComment');

comentarioCreate.addEventListener('click', traerText)

function traerText(){
    let textEctractor = textcomentari.value;
    if(textcomentari.value){
        let div = document.createElement('div')
        div.classList.add('commentNew');

        newComment.append(div)

        let p = document.createElement('p')
        p.classList.add('textCreator');
        p.innerHTML= textEctractor
        console.log(textEctractor)

        div.appendChild(p)
    }else{
        alert('texto vacio tiene que llenar la caja')
    }

}