function logo_clicked() {
    let logo = document.getElementById('pic')
    if (logo.style.opacity == 0.5)
        logo.style.opacity = 1
    else{
        logo.style.opacity = 0.5
    }
}