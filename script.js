const frm=document.querySelector('#frm');
const output=document.querySelector('#output');
const loading=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');
const btnSave=document.querySelector('#btn-save');

function generateQRCode(e){
console.log("Hi");
e.preventDefault();
const url=document.querySelector
('#url').value;
const size=document.querySelector
('#size').value;
const clrdark=document.querySelector
('#colorDark').value;
const clrLight=document.querySelector
('#colorLight').value;

if (url===""){
    alert("Plese Enter Your Website Link");
}
else{
    //loading img show//
loading.style.display='flex';
setTimeout(()=>{

    //hide loading img//
    loading.style.display='none';
    qrcodeElement.innerHTML="";



    const qrcode=new QRCode('qrcode',{
        text:url,
        width:size,
        height:size,
        colorDark:clrdark,
        colorLight:clrLight,
        correctLevel:QRCode.CorrectLevel.H
    });
},3000);

 }
}

frm.addEventListener('submit',generateQRCode);


btnSave.addEventListener('click',()=>{
    setTimeout(()=>{
const imgSrc=qrcodeElement.querySelector('img').src;
btnSave.href=imgSrc;
btnSave.download='qrcode';
},50);
});