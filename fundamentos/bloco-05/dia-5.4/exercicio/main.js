window.onload = function () {
    let select = document.getElementsByTagName('select')[0];
    select.addEventListener('change', function () {
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;

        localStorage.setItem('5.4-backgroundColor', selected.value);
    })

    let selectFont = document.getElementById('fontColor');
    let body = document.getElementsByTagName("body")[0];
    selectFont.addEventListener('change', function () {
        let selectedColorFont = selectFont.selectedOptions[0];
        body.style.color = selectedColorFont.value;

        localStorage.setItem('5.4-changeColor', selectedColorFont.value);
        
    })

    let inputFontSize = document.querySelector('input[name="font-size"]')
    inputFontSize.addEventListener('change', function () {
        let p = document.getElementsByTagName('p')[0];
        p.style.fontSize = inputFontSize.value + 'px';

        localStorage.setItem('5.4-changeSize', inputFontSize.value + 'px');
    })

    let heightLine = document.getElementById('line');
    heightLine.addEventListener('change',function(){
        let p = document.getElementsByTagName('p')[0];
        p.style.lineHeight = heightLine.value + 'px'

        localStorage.setItem('5.4-changeHeightLine', heightLine.value + 'px');
    })

    let changeFontFamily = document.getElementById('family-font');
    changeFontFamily.addEventListener('change', function(){
        let p = document.getElementsByTagName('p')[0];
        p.style.fontFamily = changeFontFamily.value;
        
        localStorage.setItem('5.4-changeFontFamily', changeFontFamily.value);
        
    })


    let savedBackground = localStorage.getItem('5.4-backgroundColor');
    document.body.style.backgroundColor = savedBackground;

    let savedSize = localStorage.getItem('5.4-changeSize');
    document.getElementsByTagName('p')[0].style.fontSize = savedSize;

    let savedFontColor = localStorage.getItem('5.4-changeColor');
    document.getElementsByTagName('body')[0].style.color = savedFontColor;

    let savedHeightLine = localStorage.getItem('5.4-changeHeightLine');
    document.getElementsByTagName('p')[0].style.lineHeight = savedHeightLine;

    let savedFontFamily = localStorage.getItem('5.4-changeFontFamily');
    document.getElementsByTagName('p')[0].style.fontFamily = savedFontFamily;
}



