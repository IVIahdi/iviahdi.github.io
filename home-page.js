function logo_clicked() {
    let logo = document.getElementById('logo')
    let content = document.getElementById('big-content')
    logo.classList.toggle("fade")
    logo.classList.toggle("animate__heartBeat")
    content.classList.toggle("fade")
}
function add(){
    var table = document.getElementById('table')
    var row = table.insertRow()
    var cell = row.insertCell().innerHTML = '<td><input type="text"></td>'
    var select = ''
    cell = row.insertCell().innerHTML = '<td><input type="text"></td>'
    cell = row.insertCell().innerHTML = '<td><input type="text"></td>'
}