import { store } from './store.js'

const indexGunsContainer = document.querySelector('#index-gun-container')
const messageUserContainer = document.querySelector('#message-user-container')
const messageContainer = document.querySelector('#message-container')
const showGunContainer = document.querySelector('#show-gun-container')
const indexLoadoutContainer = document.querySelector('#index-loadout-container')
const showLoadoutContainer = document.querySelector('#show-loadout-container')
const authContainer = document.querySelector('#auth-container')
const indexContainer = document.querySelector('#index-container')
const indexNoteContainer = document.querySelector('#index-note-container')

// GUNS
export const onIndexGunSuccess = (guns) => {
    guns.forEach(gun => {
        const div = document.createElement('div')
        div.classList.add('content-card')
        div.innerHTML = 
        `
            <h3>${gun.name}</h3>
            <button type="button" class="btn btn-dark" data-id="${gun._id}">Show Gun</button>
        `
        indexGunsContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = 
    `
        <h3>You've got an error!</h3>
        <p>${error}</p>
    `
}

export const onCreateGunSuccess = () => {
    messageContainer.innerText = 'You have added a gun!'
}

export const onShowGunSuccess = (gun) => {
    indexContainer.classList.add('hide')
    showGunContainer.classList.remove('hide')
    const div = document.createElement('div')
    div.innerHTML = 
    `
        <div class="row">
            <div class="col">
                <h3>${gun.name}</h3>
                <p>${gun.class}</p>
                <p>${gun.skin}</p>
                <p>${gun._id}</p>
                <p>${gun.loadout}</p>
            </div>
        <div class="col">
            <form data-id="${gun._id}">
                <input type="text" name="name" value="${gun.name}" />
                <input type="text" name="class" value="${gun.class}" />
                <input type="text" name="skin" value="${gun.skin}" />
                <input type="text" name="loadout" value="${gun.loadout}"/>
                <input class="btn btn-dark" type="submit" value="Update Gun" />
            </form>
            <div id="alert-container">
            <button class="btn btn-dark" data-id="${gun._id}">Delete Gun</button>
            </div>
        </div>
    </div>
    `
    showGunContainer.appendChild(div)
}

export const onUpdateGunSuccess = () => {
    messageContainer.innerText = 'Update was successful.'
}

export const onDeleteGunSuccess = () => {
    messageContainer.innerText = 'Gun Deletion Successful.'
}

// USERS
export const onSignUpSuccess = () => {
    messageUserContainer.innerHTML = 'You have created a new user!'
}

export const onSignInSuccess = (userToken) => {
    messageUserContainer.innerHTML = 'Signed In!'
    store.userToken = userToken
    authContainer.classList.add('hide')
    indexContainer.classList.remove('hide')
}

// LOADOUTS
export const onIndexLoadoutSuccess = (loadouts) => {
    loadouts.forEach(loadout => {
        const div = document.createElement('div')
        div.classList.add('content-card')
        div.innerHTML = 
        `
            <h3>${loadout.name}</h3>
            <button type="button" class="btn btn-dark" data-id="${loadout._id}">Show Loadout</button>
        `
        indexLoadoutContainer.appendChild(div)
    })
}

export const onCreateLoadoutSuccess = () => {
    messageContainer.innerText = 'You have created a new loadout!'
}

export const onShowLoadoutSuccess = (loadout) => {
    indexContainer.classList.add('hide')
	showLoadoutContainer.classList.remove('hide')
    const div = document.createElement('div')
    div.innerHTML = 
    `
        <div class="row">
            <div class="col">
                <h3>${loadout.name}</h3>
            </div>
            <div class="col">
                <form data-id="${loadout._id}">
                    <input type="text" name="name" value="${loadout.name}" />
                    <input type="submit" class="btn btn-dark" value="Update Loadout" />
        </form>

        <button class="btn btn-dark" data-id="${loadout._id}">Delete Loadout</button>
        <button  id="add-note-button" type="button" class="btn btn-dark" data-id="${loadout._id}">Add Loadout Note</button>
        </div>
    </div>
`
    showLoadoutContainer.appendChild(div)
}

export const onUpdateLoadoutSuccess = () => {
    messageContainer.innerText = 'The loadout has been successfully updated!'
}

export const onDeleteLoadoutSuccess = () => {
    messageContainer.innerText = 'Loadout Deletion Successful.'
}

//NOTES
export const onIndexNoteSuccess = (notes) => {
    notes.forEach(note => {
        const div = document.createElement('div')
        div.classList.add('content-card')
        div.innerHTML = 
        `
            <h3>${note.name}</h3>
            <button type="button" class="btn btn-dark" data-id="${note._id}">Show Note</button>
        `
        indexNoteContainer.appendChild(div)
    })
}

export const onCreateNoteSuccess = () => {
    messageContainer.innerHTML = 'Note Created.'
}