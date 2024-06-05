const Player = ['Cristiano Ronaldo', 'Lionel Messi', 'Neymar', 'Sam Morsy', 'Omari Hutchinson', 'Morgan Gibbs-White', 'Callum Hudson-Odoi', 'Kobbie Mainoo', 'Nathan Broadhead', 'Kylian Mbappe']

const Team = ['Ipswich Town', 'Nottingham Forest', 'Manchester United', 'Chelsea', 'Real Madrid', 'Barcelona', 'Inter Milan', 'AC Milan', 'PSG', 'Colchester United']

function cost(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Amount = ['Thousand Pounds', 'Pounds', 'Million Pounds']

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

function generateTransfer() {
    const randomPlayer = getRandomElement(Player);
    const randomTeam = getRandomElement(Team);
    let randomCost = cost(1, 999);
    const randomAmount = getRandomElement(Amount);
    console.log(`${randomPlayer} has joined ${randomTeam} for ${randomCost} ${randomAmount}`);
}

generateTransfer()