import { 
	indexGuns,
	indexLoadout,
	createGuns,
	createLoadout,
	showGun,
	showLoadout,
	updateGun,
	updateLoadout,
	deleteGun,
	deleteLoadout,
	createNote,
	signIn,
	signUp,
} from './api.js'
import { store } from './store.js'
import {
	onIndexGunSuccess,
	onCreateGunSuccess,
	onCreateLoadoutSuccess,
	onFailure,
	onShowGunSuccess,
	onUpdateGunSuccess,
	onDeleteGunSuccess,
	onSignUpSuccess,
	onSignInSuccess,
	onIndexLoadoutSuccess,
	onUpdateLoadoutSuccess,
	onShowLoadoutSuccess,
	onDeleteLoadoutSuccess,
	onIndexNoteSuccess,
	onCreateNoteSuccess
} from './ui.js'

const indexGunsContainer = document.querySelector('#index-gun-container')
const indexLoadoutContainer = document.querySelector('#index-loadout-container')
const createLoadoutForm = document.querySelector('#create-loadout-form')
const createGunsForm = document.querySelector('#create-guns-form')
const showGunContainer = document.querySelector('#show-gun-container')
const showLoadoutContainer = document.querySelector('#show-loadout-container')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')
const addNoteContainer = document.querySelector('#add-note-container')

//GUNS
indexGuns()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexGunSuccess(res.guns)
    })
    .catch(onFailure)

createGunsForm.addEventListener('submit', (event) => {
	event.preventDefault()
	
	const gunData = {
			gun: {
				name: event.target['name'].value,
				class: event.target['class'].value,
				skin: event.target['skin'].value,
				loadout: event.target['loadout'].value
			},
		}
	createGuns(gunData)
			.then(onCreateGunSuccess)
			.catch(onFailure)
})

indexGunsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showGun(id)
		.then((res) => res.json())
		.then((res) => {
			onShowGunSuccess(res.gun)
		})
		.catch(onFailure)
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
	updateGun(gunData, id)
		.then(onUpdateGunSuccess)
		.catch(onFailure)
})

showGunContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteGun(id)
		.then(onDeleteGunSuccess)
		.catch(onFailure)
})

//USER
signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData).then(onSignUpSuccess).catch(onFailure)
})

signInContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => onSignInSuccess(res.token))
		.then(indexLoadout)
		.then((res) => res.json())
		.then((res) => onIndexLoadoutSuccess(res.loadouts))
		.then(indexGuns)
		.then((res) => res.json())
		.then((res) => onIndexGunSuccess(res.guns))
		.catch(onFailure)
})

//LOADOUTS
indexLoadout()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexLoadoutSuccess(res.loadouts)
    })
    .catch(onFailure)

indexLoadoutContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showLoadout(id)
		.then((res) => res.json())
		.then((res) => {
			onShowLoadoutSuccess(res.loadout)
		})
		.catch(onFailure)
})

createLoadoutForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const loadoutData = {
			loadout: {
				name: event.target['name'].value
			},
		}
    createLoadout(loadoutData)
			.then(onCreateLoadoutSuccess)
			.catch(onFailure)
})

showLoadoutContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const loadoutData = {
		loadout: {
			name: event.target['name'].value
		},
	}
	updateLoadout(loadoutData, id)
		.then(onUpdateLoadoutSuccess)
		.catch(onFailure)
})

showLoadoutContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteLoadout(id)
		.then(onDeleteLoadoutSuccess)
		.catch(onFailure)
})

// NOTES
addNoteContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const noteData = {
		note: {
			title: event.target['title'].value,
			content: event.target['content'].value,
			loadoutId: store.currentLoadoutId
		},
	}
	createNote(noteData)
		.then(onCreateNoteSuccess)
		.catch(onFailure)
})