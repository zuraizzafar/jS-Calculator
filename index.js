function del() {
    document.getElementById('inp').innerHTML = '0';
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
}
function decimal(a) {
    i=0;
    while(a>=1){
        a=a/10;
        i++;
    }
    return i;
}
function preOp(opr) {
    var int = document.getElementById('inp').innerHTML;
    sessionStorage.setItem("inp", int);
    document.getElementById('inp').innerHTML = '0';
    document.getElementById('out').innerHTML = sessionStorage.getItem("inp");
    sessionStorage.setItem("opr", opr);    
}
function equal() {
    var int=Number(document.getElementById('inp').innerHTML);
    var ints=Number(sessionStorage.getItem("inp"));
    var opr = sessionStorage.getItem('opr');
    if (opr=='/'){
        var eq = ints/int;
        document.getElementById('out').innerHTML = '= ' + eq;
    }
    else if (opr=='+'){
        var eq = ints+int;
        document.getElementById('out').innerHTML = '= ' + eq;
    }
    else if (opr=='-'){
        var eq = ints-int;
        document.getElementById('out').innerHTML = '= ' + eq;
    }
    else if (opr=='*'){
        var eq = ints*int;
        document.getElementById('out').innerHTML = '= ' + eq;
    }
}