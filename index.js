let playersList = JSON.parse(localStorage.getItem("playersList")) || [];
// hàm sinh id
function createId() {
    return Math.floor(Math.random() * 9999999999999) + new Date().getMilliseconds();
}
// hàm thêm người chơi mới
function add() {
    let score = 0;
    let playerName = document.getElementById("infor").value;
    let playerInfor = {
        playerName: playerName,
        score: 0,
        id: createId()
    }
    playersList.push(playerInfor);
    localStorage.setItem("playersList", JSON.stringify(playersList));
    renderPlayerList();

}
// hàm render danh sách
function renderPlayerList() {
    let element = "";
    let totalScore = 0;
    for (let i = 0; i < playersList.length; i++) {
        element +=
            `
            <div class="main__body">
                <div class="main__body--left">
                    <div class="player">
                        <span onclick="deletePlayers(${playersList[i].id})" class="material-symbols-outlined">close</span>
                        <i class="fa-sharp fa-solid fa-crown"></i>
                        <span>${playersList[i].playerName}</span>
                    </div>
                </div>
                <div class="main__body-right">
                    <div class="score__change">
                        <div id="minus" class="score__change--minus-plus" onclick="minusScore(${playersList[i].id})">-</div>
                        <div id="count${playersList[i].id}" class="score__change--total">${playersList[i].score}</div>
                        <div id="plus" class="score__change--minus-plus" onclick="plusScore(${playersList[i].id})">+</div>
                    </div>
                </div>
            </div>`
        let totalPlayers = playersList.length;
        totalScore += playersList[i].score;
        console.log(totalScore);
        document.getElementById("totalPlayers").innerHTML = totalPlayers;
        
    }
    document.getElementById("totalPoints").innerHTML = totalScore;
    document.getElementById("mainBody").innerHTML = element;
    
}
renderPlayerList()
// hàm giảm số điểm người chơi
function minusScore(id) {
    console.log("id", id)
    let minusResult = 0
    for (let i = 0; i < playersList.length; i++) {
        if (playersList[i].id == id) {
            --playersList[i].score
        }
    }
    localStorage.setItem("playersList", JSON.stringify(playersList));
    renderPlayerList();
}
//hàm tăng số điểm người chơi
function plusScore(id) {
    console.log("id", id)
    let minusResult = 0
    for (let i = 0; i < playersList.length; i++) {
        if (playersList[i].id == id) {
            ++playersList[i].score
        }
    }
    localStorage.setItem("playersList", JSON.stringify(playersList));
    renderPlayerList();
}
//hàm xóa người chơi
function deletePlayers(id) {
    console.log("id", id)
    for (let i = 0; playersList.length; i++) {
        if (playersList[i].id == id) {
            playersList.splice(i, 1);
            localStorage.setItem("playersList", JSON.stringify(playersList));
            renderPlayerList();
        }
    }
}

