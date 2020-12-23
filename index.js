function del() {
    document.getElementById('inp').innerHTML = '0';
    document.getElementById('inp').focus();
}
function buttonp(num) {
    var int=document.getElementById('inp').innerHTML;
    var a=decimal(int);
    if(a==0){
        int = (int*1)+num;
    }
    else {
        int = (int*10)+num;
    }
    document.getElementById('inp').innerHTML = int;
    document.getElementById('inp').focus();
}
function decimal(a) {
    i=0;
    while(a>=1){
        a=a/10;
        i++;
    }
    return i;
}