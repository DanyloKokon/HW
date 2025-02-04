const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
  /*
   * Збільшуємо кількість годин гравця по id. Повернути масив гравців зі зміненою кількістю годин лише одного гравця
   *
   */
const playerId = 'player-3';
    const increaseTimePlayed = players.map(function(player) {
        if (player.id === playerId) {
            return {
            ...player,
            timePlayed: player.timePlayed + 100
            }
        }
        return player
        })
        console.table(increaseTimePlayed)

//   const upgradePlayer = function (players, playerIdToUpdate) {}
//   upgradePlayer(players, 'player-3')
    
    
  /*
   * Змінюємо властивість online на протилежну. Повернути масив гравців зі зміненою властивістю online
   */
   

  const changePlayers = players.map(function(player) {
    return {
      ...player,
      online: !player.online
    }
    })
    console.table(changePlayers)
  