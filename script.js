async function main(){

    let a = await fetch("");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    div.getElementsByTagName("td");
    console.log(tds);
}

main();
