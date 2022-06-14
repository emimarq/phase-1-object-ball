function gameObject() {
  return Obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players: {
        "Alan Anderson": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1"
        },

        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assists: "12",
          steals: "12",
          blocks: "12",
          slamDunks: "7"
        },

        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assists: "10",
          steals: "3",
          blocks: "1",
          slamDunks: "15"
        },

        "Mason Plumlee": {
          number: "1",
          shoe: "19",
          points: "26",
          rebounds: "12",
          assists: "6",
          steals: "3",
          blocks: "8",
          slamDunks: "5"
        },

        "Jason Terry": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1"
        }
      }
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assists: "1",
          steals: "2",
          blocks: "7",
          slamDunks: "2"
        },

        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "12",
          rebounds: "4",
          assists: "7",
          steals: "7",
          blocks: "15",
          slamDunks: "10"
        },

        "DeSagna Diop": {
          number: "2",
          shoe: "14",
          points: "24",
          rebounds: "12",
          assists: "12",
          steals: "4",
          blocks: "5",
          slamDunks: "5"
        },

        "Ben Gordon": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assists: "2",
          steals: "1",
          blocks: "1",
          slamDunks: "0"
        },

        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assists: "12",
          steals: "22",
          blocks: "5",
          slamDunks: "12"
        }
      }
    }
  }
}


//Handles getting key value pairs for players
function allPlayers() {
  const game = gameObject()
  const homePlayers = game.home.players
  const awayPlayers = game.away.players
  // debugger
  return Object.assign({}, homePlayers, awayPlayers)
}

//Retrieves player's points
function numPointsScored(playerInput) {
  for (const playerName in allPlayers()) {
    if (playerName === playerInput) {
      return allPlayers()[playerName].points
    }
  }
}
console.log("Alan Anderson's Points: ", numPointsScored("Alan Anderson"))

//Retrieves player's shoe size
function shoeSize(playerInput) {
  for (const playerShoe in allPlayers()) {
    if (playerShoe === playerInput) {
      return allPlayers()[playerShoe].shoe
    }
  }
}
console.log("Ben Gordon's Shoe Size: ", shoeSize("Mason Plumlee"))

// Accesses the teams
function handlesTeams() {
  const game = gameObject()
  const homeTeam = game.home
  const awayTeam = game.away
  // debugger
  console.log(Object.keys(game.home.teamName))
  // const team = Object.assign({}, homeTeam, awayTeam)
  // console.log(team)
}

handlesTeams()

// // function teamColors(teamC) {
// //     console.log(handlesTeams())
// // }
// // teamColors()
// // console.log("Color Of Selected Team: ", teamColors("colors"))