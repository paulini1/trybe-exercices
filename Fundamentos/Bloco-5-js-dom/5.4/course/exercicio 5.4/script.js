window.onload = function (){
    let select = document.querySelector('select');
    select.addEventListener('change',function(){
        let selected = select.selectedOptions[0]
        document.body.style.backgroundColor = selected.value;
        localStorage.setItem('5.4-backgroundColor',selected.value);
    })
    let inputFontSize = document.querySelector('input[name="font-size"]');
    inputFontSize.addEventListener('change',function(){
        let p =document.querySelector('p');
        p.style.fontSize = `${inputFontSize.value}px`;
        localStorage.setItem('5.4-fontSize',`${inputFontSize.value}px`);
    })
    let backgroundSaved = localStorage.getItem('5.4-backgroundColor');
    document.body.style.backgroundColor= backgroundSaved;

    let fontSizeSaved = localStorage.getItem('5.4-fontSize');
    let p = document.querySelector('p');
    p.style.fontSize = fontSizeSaved;
}