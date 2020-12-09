window.onload = function (e) {
    liff.init(function (data) {
        initSelect(data);
    });
};

function initSelect(data) {
    let select = document.querySelector('[class="type_main"]');
    let selectSub = document.querySelector('[class="type_sub"]');
    let inputDateStart = document.querySelector('[id="date_input_start"]');
    let inputDateEnd = document.querySelector('[id="date_input_end"]');
    select.onchange = event => {
        switch(select.value) {
            case '4':
            case '6':
            case '7':
            case '8':
                selectSub.style.display = 'none';
                inputDateStart.type = "datetime-local";
                inputDateEnd.type = "datetime-local";
                break;
            case '11':
                selectSub.style.display = 'inline';
                inputDateStart.type = "date";
                inputDateEnd.type = "date";
                break;
            default:
                selectSub.style.display = 'none';
                inputDateStart.type = "date";
                inputDateEnd.type = "date";
                break;
        }
    }
    selectSub.onchange = event => {
        switch(selectSub.value) {
            case '3':
            case '4':
            case '5':
            case '6':
                inputDateStart.type = "datetime-local";
                inputDateEnd.type = "datetime-local";
                break;
            default:
                inputDateStart.type = "date";
                inputDateEnd.type = "date";
                break;
        }
    }
}