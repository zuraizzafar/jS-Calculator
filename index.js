function del() {
    document.getElementById('inp').value = '';
    document.getElementById('inp').focus();
}
function buttonp(num) {
    var int=document.getElementById('inp').value;
    var a=decimal(int);
    if(a==0){
        int = (int*1)+num;
    }
    else {
        int = (int*10)+num;
    }
    document.getElementById('inp').value = int;
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