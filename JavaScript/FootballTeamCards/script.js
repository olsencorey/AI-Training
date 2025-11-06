const footballTeam = {
  team: "Manchester City",
  year: 2024,
  headCoach: "Pep Guardiola",
  players: [
    {
      name: "Ederson Moraes",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Kyle Walker",
      position: "defender",
      isCaptain: true // Example captain
    },
    {
      name: "Rúben Dias",
      position: "defender",
      isCaptain: false
    },
    {
      name: "John Stones",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Joško Gvardiol",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Kevin De Bruyne",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Rodri",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Phil Foden",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Bernardo Silva",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Erling Haaland",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Julián Álvarez",
      position: "forward",
      isCaptain: false
    }
  ]
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

team.innerText = footballTeam.team;
year.innerText = footballTeam.year;
headCoach.innerText = footballTeam.headCoach;

const playerCards = document.getElementById("player-cards");

function renderPlayers(players) {
  playerCards.innerHTML = players.map(player => `
    <div class="player-card">
      <h2>${player.isCaptain ? '(Captain) ' : ''}${player.name}</h2>
      <p>Position: ${player.position}</p>
    </div>
    `).join('');
}

// render players initially
renderPlayers(footballTeam.players);

// handle dropdown changes

const players = document.getElementById("players");
players.addEventListener('change', function() {
  const selected = players.value;
  if (selected === "all") {
    renderPlayers(footballTeam.players);
  } else {
    const filtered = footballTeam.players.filter(player => player.position === selected);
    renderPlayers(filtered);
  }
});

