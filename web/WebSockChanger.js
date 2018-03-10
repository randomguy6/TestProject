/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = hideForm;
var socket = new Websocket("ws://localhost:8080/WebsocketProject/actions");

function showForm() {
    document.getElementById('_form').style.display = 'block';
}
function hideForm() {
    document.getElementById('_form').style.display = 'none';
}
function submitForm() {
    var form = document.getElementById('_form');
    var procSpeed = form.elements[_processorSpeed].value;
    var procCore = form.elements[_processorCore].value;
    var ramCap = form.elements[_ramCap].value;
    var ramSpeed = form.elements[_ramSpeed].value;
    var net = form.elements[_type].value;
    addServer(procSpeed, procCore, ramCap, ramSpeed, net);
    hideForm();
}

function addServer(procSpeed, procCore, ramCap, ramSpeed, networkType) {
    var server = {
        pSpeed = procSpeed,
        pCore = procCore,
        rCap = ramCap,
        rSpeed = ramSpeed,
        nType = networkType
    };
    socket.send(JSON.stringify(server));
}
function showServers(server) {
    var doc = document.getElementById('people');
}