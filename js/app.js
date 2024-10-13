const players = [
  {
    name: 'Burak',
    position: 'Defans',
    speed: 70,
    shooting: 75,
    passing: 90,
    dribbling: 70,
    defense: 90,
    physical: 88
  },
  {
    name: 'Tahsin',
    position: 'Defans',
    speed: 76,
    shooting: 88,
    passing: 90,
    dribbling: 73,
    defense: 90,
    physical: 80
  },
  {
    name: 'Berkay S.',
    position: 'Defans',
    speed: 82,
    shooting: 80,
    passing: 85,
    dribbling: 82,
    defense: 91,
    physical: 88
  },
  {
    name: 'Baran K.',
    position: 'Defans',
    speed: 77,
    shooting: 80,
    passing: 85,
    dribbling: 78,
    defense: 82,
    physical: 83
  },
  {
    name: 'Ömer İlyas',
    position: 'Defans',
    speed: 82,
    shooting: 72,
    passing: 70,
    dribbling: 77,
    defense: 82,
    physical: 77
  },
  {
    name: 'Halil',
    position: 'Orta Saha',
    speed: 74,
    shooting: 77,
    passing: 90,
    dribbling: 78,
    defense: 85,
    physical: 84
  },
  {
    name: 'Baki',
    position: 'Defans',
    speed: 82,
    shooting: 72,
    passing: 75,
    dribbling: 80,
    defense: 85,
    physical: 80
  },
  {
    name: 'İbo',
    position: 'Defans',
    speed: 82,
    shooting: 70,
    passing: 72,
    dribbling: 77,
    defense: 85,
    physical: 77
  },
  {
    name: 'Berkay G.',
    position: 'Defans',
    speed: 83,
    shooting: 80,
    passing: 84,
    dribbling: 79,
    defense: 83,
    physical: 80
  },
  {
    name: 'Berkay A.',
    position: 'Orta Saha',
    speed: 85,
    shooting: 75,
    passing: 74,
    dribbling: 87,
    defense: 80,
    physical: 88
  },
  {
    name: 'Salih',
    position: 'Orta Saha',
    speed: 88,
    shooting: 92,
    passing: 94,
    dribbling: 85,
    defense: 90,
    physical: 88
  },
  {
    name: 'Onur',
    position: 'Orta Saha',
    speed: 90,
    shooting: 92,
    passing: 94,
    dribbling: 90,
    defense: 90,
    physical: 84
  },
  {
    name: 'Yavuz',
    position: 'Orta Saha',
    speed: 83,
    shooting: 85,
    passing: 85,
    dribbling: 80,
    defense: 85,
    physical: 90
  },
  {
    name: 'Serhan',
    position: 'Forvet',
    speed: 72,
    shooting: 91,
    passing: 80,
    dribbling: 73,
    defense: 70,
    physical: 82
  },
   {
    name: 'Serdar',
    position: 'Forvet',
    speed:80,
    shooting:85,
    passing:77,
    dribbling:75,
    defense:78,
    physical:80
   },
  {
    name: 'Kerem',
    position: 'Forvet',
    speed: 89,
    shooting: 92,
    passing: 87,
    dribbling: 95,
    defense: 70,
    physical: 83
  },
  {
    name: 'Ahmet',
    position: 'Forvet',
    speed: 99,
    shooting: 90,
    passing: 82,
    dribbling: 96,
    defense: 70,
    physical: 82
  },
  {
    name: 'Yusuf B.',
    position: 'Forvet',
    speed: 80,
    shooting: 85,
    passing: 82,
    dribbling: 79,
    defense: 74,
    physical: 82
  },
  {
    name: 'Ömer Faruk',
    position: 'Forvet',
    speed: 84,
    shooting: 88,
    passing: 88,
    dribbling: 85,
    defense: 78,
    physical: 83
  },
  {
    name: 'Arda',
    position: 'Forvet',
    speed: 84,
    shooting: 88,
    passing: 82,
    dribbling: 85,
    defense: 74,
    physical: 82
  },
  {
    name: 'Muharrem',
    position: 'Defans',
    speed: 79,
    shooting: 73,
    passing: 75,
    dribbling: 78,
    defense: 85,
    physical: 82
  },
  {
    name: 'Erkan',
    position: 'Defans',
    speed: 77,
    shooting: 70,
    passing: 72,
    dribbling: 73,
    defense: 89,
    physical: 87
  },
  {
    name: 'Muharrem',
    position: 'Kaleci',
    speed: 90,
    shooting: 90,
    passing: 90,
    dribbling: 90,
    defense: 90,
    physical: 90
  },
  {
    name: 'Erkan',
    position: 'Kaleci',
    speed: 90,
    shooting: 90,
    passing: 90,
    dribbling: 90,
    defense: 90,
    physical: 90
  },
  {
    name: 'Hüseyin',
    position: 'Kaleci',
    speed: 90,
    shooting: 90,
    passing: 90,
    dribbling: 90,
    defense: 90,
    physical: 90
  }
]
function calculateAverageRating (player) {
  return (
    (player.speed +
      player.shooting +
      player.passing +
      player.dribbling +
      player.defense +
      player.physical) /
    6
  )
}

players.forEach(player => {
  player.averageRating = calculateAverageRating(player)
})

function generatePlayerSelect () {
  const playersSelectDiv = document.getElementById('playersSelect')

  players.forEach((player, index) => {
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = `player_${index}`
    checkbox.value = index

checkbox.addEventListener('change', updateSelectedPlayerCount);

    label.appendChild(checkbox)
    label.appendChild(
      document.createTextNode(`${player.name} - ${player.position}`)
    )

    playersSelectDiv.appendChild(label)
  })
}

generatePlayerSelect()

function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function distributeTeams () {
  const selectedPlayers = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map(checkbox => players[checkbox.value])

  if (selectedPlayers.length !== 14) {
    alert('Lütfen tam olarak 14 oyuncu seçin!')
    return
  }

  const team1 = []
  const team2 = []

  const goalkeepers = selectedPlayers.filter(
    player => player.position === 'Kaleci'
  )

  if (goalkeepers.length === 2) {
    team1.push(goalkeepers[0])
    team2.push(goalkeepers[1])
  } else if (goalkeepers.length > 2 || goalkeepers.length < 2) {
    alert('2 kaleci seçiniz!')
    return
  }

  const nonGoalkeepers = selectedPlayers.filter(
    player => player.position !== 'Kaleci'
  )

  const shuffledPlayers = shuffleArray(nonGoalkeepers)

  shuffledPlayers.forEach(player => {
    if (team1.length < 7) {
      team1.push(player)
    } else {
      team2.push(player)
    }
  })

  displayTeams(team1, team2)
}

function displayTeams (team1, team2) {
  const team1List = document.getElementById('team1').querySelector('ul')
  const team2List = document.getElementById('team2').querySelector('ul')

  team1List.innerHTML = ''
  team2List.innerHTML = ''

  let team1TotalRating = 0
  let team2TotalRating = 0

  team1.forEach(player => {
    const li = document.createElement('li')
    li.textContent = `${player.name} - ${
      player.position
    } (Rating: ${player.averageRating.toFixed(2)})`
    team1List.appendChild(li)
    team1TotalRating += player.averageRating
  })

  team2.forEach(player => {
    const li = document.createElement('li')
    li.textContent = `${player.name} - ${
      player.position
    } (Rating: ${player.averageRating.toFixed(2)})`
    team2List.appendChild(li)
    team2TotalRating += player.averageRating
  })

  const team1AvgRating = team1TotalRating / team1.length || 0
  const team2AvgRating = team2TotalRating / team2.length || 0

  document.getElementById('team1AvgRating').textContent =
    team1AvgRating.toFixed(2)
  document.getElementById('team2AvgRating').textContent =
    team2AvgRating.toFixed(2)
}

function updateSelectedPlayerCount() {
  const selectedPlayersCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
  document.getElementById('selectedPlayerCount').textContent = selectedPlayersCount;
}

function renderPlayerSelection(players) {
  const playersSelectDiv = document.getElementById('playersSelect');
  players.forEach((player, index) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = index; 
    checkbox.addEventListener('change', updateSelectedPlayerCount);
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(player.name)); 
    
    playersSelectDiv.appendChild(label);
    playersSelectDiv.appendChild(document.createElement('br'));
  });
}