function logo_clicked() {
    let logo = document.getElementById('pic')
    let content = document.getElementById('big-content')
    if (logo.style.opacity == 0.2){
        logo.style.opacity = 1
        content.classList.toggle('fade');
    }
    else{
        logo.style.opacity = 0.2
        content.classList.toggle('fade');
    }
}