const toEncrypt = document.querySelector('#inText');
const result = document.querySelector('#result');
const encryptBtn = document.querySelector('#encrypt');
const decryptBtn = document.querySelector('#decrypt');
const copyBtn = document.querySelector('#copy');


function encrypt(text){

    let eText = text.toLowerCase()
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('o', 'ober')
    .replaceAll('a', 'ai')
    .replaceAll('u', 'ufat');

    return eText;
    // console.log(eText);

    // result.value = eText;
}

function decrypt (text){
    
    let dText = text.toLowerCase()
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
    return dText;
}

// console.log(encrypt('HolA Mundo'));

encryptBtn.addEventListener('click', function (){
    result.value = encrypt(toEncrypt.value);
    document.querySelector('#inText').value ='';
    document.querySelector('.shown').style.display = 'none';
    document.querySelector('.hiden').style.display = 'flex';
    
});

decryptBtn.addEventListener('click', function (){
    result.value = decrypt(toEncrypt.value);
    document.querySelector('#inText').value ='';
    document.querySelector('.shown').style.display = 'none';
    document.querySelector('.hiden').style.display = 'flex';
})

copyBtn.addEventListener('click', function (){
    navigator.clipboard.writeText(result.value);
    document.querySelector('.shown').style.display = 'flex';
    document.querySelector('.hiden').style.display = 'none';
})


