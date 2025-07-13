const ans=document.getElementById("inp")
function genaratePassword(pswlen,pswupper,pswlower,pswsym,pswnmbr){
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const symbol="!@#$%^&*()_+";
const number="1234567890";

let include="";
let password ="";


include +=pswupper?upper:"";
include +=pswlower?lower:"";
include +=pswsym?symbol:"";
include +=pswnmbr?number:"";


if(pswlen<0){
    return (`password length must be more then 0`);
}
if(include.length === 0){
    return (`atleast one set of characters  should consider`);
}
for(let i=0;i< pswlen;i++){
        const randomIndex=Math.floor(Math.random() * include.length);
        password += include[randomIndex];
        
}
    return password;
}

function psw(){

const pswlen=12;
const pswupper=true;
const pswlower=true;
const pswsym=true;
const pswnmbr=true;

const password=genaratePassword(pswlen,
                        pswupper,
                        pswlower,
                        pswsym,
                        pswnmbr);
ans.value=password;
}

function copypsw(){
    ans.select();
    document.execCommand("copy");

}