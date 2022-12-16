const url = "http://localhost:3000/players";


async function renderTable(){
    let response = await fetch(url)
    const data = await response.json();
    viewTable(data);
}


function viewTable(){
    let playersHTML = "";
    for (const player of players) {
        playersHTML += `<tr>`;
        for (const key in player) {
            console.log(key, player[key]);
            playersHTML += `<td>${player[key]}</td>`
        }
        playersHTML += "</tr>";
    }
    document.getElementById("body").innerHTML = playersHTML;
}

viewTable();
renderTable();