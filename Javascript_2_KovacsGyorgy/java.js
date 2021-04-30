let no = 21;
let fact = 1;
    let a = "<td>0!</td><td>1</td>";
    document.getElementsByTagName("tr")[0].innerHTML = a;
    for(i = 1; i < no; i++){
        fact = fact*i;
        document.getElementsByTagName("table")[0].appendChild(document.createElement("tr"));
        let b = "<td>"+i+"!</td><td>"+fact+"</td>";
        document.getElementsByTagName("tr")[i].innerHTML = b;
    }