
const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        removeThat();
        panel.classList.add('active');
    })
})

function removeThat(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
