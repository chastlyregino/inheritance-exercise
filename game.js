const character = {

    attack(target) {
        console.log(`${target.name} takes damage`)
    },

    heal(target) {
        console.log(`${target.name} player is healed`)
    },

    changeName(newName) {
        this.name = newName
    },
}
  
function Player(name) {
    this.name = name
}

Object.assign(Player.prototype, character)

const player1 = new Player('player1')

const player2 = new Player('player2')

player1.attack(player2)

player2.heal(player2)

player1.changeName('player3')

player1.heal(player1)
