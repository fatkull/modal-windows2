let modalOpen = document.querySelector('.modal-open')
let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal-close')
let modalOpen2 = document.querySelector('.modal-open-2')
let modal2 = document.querySelector('.modal-2')
let modalClose2 = document.querySelector('.modal-close-2')

modalOpen.onclick = () => {
    modal.style.display = 'block'
}

modalClose.onclick = () => {
    modal.style.display = 'none'
}

modalOpen2.onclick = () => {
    modal2.style.display = 'block'
}

modalClose2.onclick = () => {
    modal2.style.display = 'none'
}