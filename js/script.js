const unitBoxes = document.querySelectorAll('.top, .middle , .bottom')

unitBoxes.forEach(box => {
    box.addEventListener('click', (e)=> {

        unitBoxes.forEach(b=>b.classList.remove('active'))
        box.classList.add('active')

        const radio = box.querySelector('input[type = "radio"]')
        if(radio){
            radio.checked = true
        }
    })

})

const middleBox = document.querySelector(".middle")
middleBox.classList.add('active')
const defaultRadio =  middleBox.querySelector('input[type="radio"]')
if(defaultRadio){
    defaultRadio.checked = true
}