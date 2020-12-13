const { json } = require("express")

let select
let selectSub
let inputDateStart
let inputDateEnd
let inputReason
let inputContact
let inputDocument 
let inputRemarks

window.onload = function (e) {
    liff.init(function (data) {
        initGetInput(data);
    });
};

function initGetInput(data) {
    select = document.querySelector('[id="type_main"]');
    selectSub = document.querySelector('[id="type_sub"]');
    inputDateStart = document.querySelector('[id="date_start"]');
    inputDateEnd = document.querySelector('[id="date_end"]');
    inputReason = document.querySelector('[id="reason"]');
    inputContact = document.querySelector('[id="contact"]');
    inputDocument = document.querySelector('[id="document"]');
    inputRemarks = document.querySelector('[id="remarks"]');
    // 申請ボタンクリック時
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        let jsonStr = creatJson();
        liff.sendMessages([{
          type: "text",
          text: jsonStr
        }]).then(function () {
          liff.closeWindow();
        }).catch(function (error) {
          window.alert("Error sending message: " + error);
        });
    });
}

function creatJson() {
    let jsonData = {};
    jsonData[select.id] = select.text;
    jsonData[selectSub.id] = selectSub.text;
    jsonData[inputDateStart.id] = inputDateStart.value;
    jsonData[inputDateEnd.id] = inputDateEnd.value;
    jsonData[inputReason.id] = inputReason.text;
    jsonData[inputContact.id] = inputContact.text;
    jsonData[inputDocument.id] = inputDocument.text;
    jsonData[inputRemarks.id] = inputRemarks.text;

    return JSON.stringify(json);
}