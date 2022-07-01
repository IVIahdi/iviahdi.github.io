function logo_clicked() {
    let logo = document.getElementById('logo')
    let content = document.getElementById('big-content')
    logo.classList.toggle("fade")
    logo.classList.toggle("animate__heartBeat")
    content.classList.toggle("fade")
}