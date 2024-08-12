function myf()
{
    let a = parseInt(document.getElementById('id1').value)
    console.log(a);
    let b = parseInt(document.getElementById('id2').value)
    console.log(b);
    let c = document.getElementById('out')

    c.value= a+b;


}