const url = "http://localhost:3000/players";


async function renderTable(){
    let response = await fetch(url)
    const data = await response.json();
    viewTable(data);
}


function viewTable(players){
    let playersHTML = "";
    for (const player of players) {
        playersHTML += `<tr>`;
        for (const key in player) {
            console.log(key, player[key]);
            playersHTML += `<td>${player[key]}</td>`
        }
        playersHTML += `<td><button type="button" class="btn btn-danger" onclick="deletePlayer('${player.id}')">Törles</button></td>`
        playersHTML += "</tr>";
    }
    document.getElementById("body").innerHTML = playersHTML;
}

async function deletePlayer(id) {
    console.log("torles", id);
    const urldelete = `${url}/${id}`;
    let response = await fetch(urldelete, {
        method: "DELETE"
    })

    renderTable();
}

renderTable();