import { 
	indexGun, 
	indexLoadout,
	createGun,
	createLoadout,
	showGun,
	showLoadout,
	updateGun,
	updateLoadout,
	deleteGun,
	deleteLoadout,
} from './api.js'

import { 
	onIndexGunSuccess,
	onIndexLoadoutSuccess,
	onGunFailure,
	onLoadoutFailure,
	onCreateGunSuccess,
	onCreateLoadoutSuccess,
	onShowGunSuccess, 
	onShowLoadoutSuccess,
	onUpdateGunSuccess,
	onUpdateLoadoutSuccess,
	onDeleteGunSuccess,
	onDeleteLoadoutSuccess
} from './ui.js'

const createGunForm = document.querySelector('#create-gun-form')
const indexGunContainer = document.querySelector('#index-gun-container')
const showGunContainer = document.querySelector('#show-gun-container')

// GUNS
indexGun()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexGunSuccess(res.guns)
    })
    .catch(onGunFailure)

createGunForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const gunData = {
			gun: {
				name: event.target['name'].value,
				class: event.target['class'].value,
				skin: event.target['skin'].value,
			},
		}
    createGun(gunData)
			.then(onCreateGunSuccess)
			.catch(onGunFailure)
})

indexGunContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    showGun(id)
			.then((res) => res.json())
			.then((res) => onShowGunSuccess(res.gun))
			.catch(onGunFailure)
})

showGunContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const gunData = {
		gun: {
			name: event.target['name'].value,
			class: event.target['class'].value,
			skin: event.target['skin'].value,
			loadout: event.target['loadout'].value
		},
	}

    if (!id) return

	updateGun(gunData, id)
		.then(onUpdateGunSuccess)
		.catch(onGunFailure)
})

showGunContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

    if (!id) return

	deleteGun(id)
		.then(onDeleteGunSuccess)
		.catch(onGunFailure)
})

// LOADOUT
const createLoadoutForm = document.querySelector('#create-loadout-form')
const indexLoadoutContainer = document.querySelector('#index-loadout-container')
const showLoadoutContainer = document.querySelector('#show-loadout-container')

indexLoadout()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexLoadoutSuccess(res.loadouts)
    })
    .catch(onLoadoutFailure)

createLoadoutForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const loadoutData = {
			loadout: {
				name: event.target['name'].value,
			},
		}
    createLoadout(loadoutData)
			.then(onCreateLoadoutSuccess)
			.catch(onLoadoutFailure)
})

indexLoadoutContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    showLoadout(id)
			.then((res) => res.json())
			.then((res) => onShowLoadoutSuccess(res.loadout))
			.catch(onLoadoutFailure)
})

showLoadoutContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const loadoutData = {
		loadout: {
			name: event.target['name'].value,
		},
	}

    if (!id) return

	updateLoadout(loadoutData, id)
		.then(onUpdateLoadoutSuccess)
		.catch(onLoadoutFailure)
})

showLoadoutContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

    if (!id) return

	deleteLoadout(id)
		.then(onDeleteLoadoutSuccess)
		.catch(onLoadoutFailure)
})