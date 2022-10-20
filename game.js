const character = {

    attack: (target) => {
        console.log(`${target.name} takes damage`)
    },

    heal: (target) => {
        console.log(`${target.name} player is healed`)
    }
}
  
const player1 = Object.create(character, {
    name: {value: 'player 1'}
})

const player2 = Object.create(character, {
    name: {value: 'player 2'}
})

player1.attack(player2)

player2.heal(player2)
