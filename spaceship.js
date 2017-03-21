class Spaceship {
	constructor(name, crew, phasers, shields) {
		this.name = name
		this.phasers = phasers
		this.shields = shields
		this.crew = crew
		this.cloaked = false
		this.warpDrive = 'disengaged'
		this.phasersCharge = 'uncharged'
		this.docked = (crew.length == 0) ? true : false

		crew.forEach((crewMember) => {
			crewMember.currentShip = this
		})
	}
}

