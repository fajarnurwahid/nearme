// start: Button Loading
var btnLoadings = document.getElementsByClassName('btn-loading')

for(let i=0; i<btnLoadings.length; i++) {
    btnLoadings[i].addEventListener('click', function(e) {
        this.classList.add('active')
        setTimeout(function() {
            btnLoadings[i].classList.remove('active')
        }, 3000)
    })
}
// end: Button Loading