// Guns
const indexGunContainer = document.querySelector('#index-gun-container')
const gunMessageContainer = document.querySelector('#gun-message-container')
const showGunContainer = document.querySelector('#show-gun-container')

export const onIndexGunSuccess = (guns) => {
    guns.forEach(gun => {
        const div = document.createElement('div')
        div.innerHTML = 
        `
            <h3>${gun.name} ${gun.loadout}</h3>
            <button data-id="${gun._id}">Show Gun</button>
        `
        indexGunContainer.appendChild(div)
    })
}

export const onGunFailure = (error) => {
    gunMessageContainer.innerHTML = 
    `
        <h3>You've got an error!</h3>
        <p>${error}</p>
    `
}

export const onCreateGunSuccess = () => {
    gunMessageContainer.innerText = 'You have added a gun!'
}

export const onShowGunSuccess = (gun) => {
    const div = document.createElement('div')
    div.innerHTML = 
    `
        <h3>${gun.name}</h3>
        <p>${gun.class}</p>
        <p>${gun.skin}</p>
        <p>${gun._id}</p>

        <form data-id="${gun._id}">
            <input type="text" name="name" value="${gun.name}" />
            <input type="text" name="class" value="${gun.class}" />
            <input type="text" name="skin" value="${gun.skin}" />
            <input type="submit" value="Update Gun" />
        </form>

        <button data-id="${gun._id}">Delete Gun</button>

    `
    showGunContainer.appendChild(div)
}

export const onUpdateGunSuccess = () => {
    gunMessageContainer.innerText = 'Update was successful.'
}

export const onDeleteGunSuccess = () => {
    gunMessageContainer.innerText = 'Gun Deletion Successful.'
}

// LOADOUTS
const indexLoadoutContainer = document.querySelector('#index-loadout-container')
const loadoutMessageContainer = document.querySelector('#loadout-message-container')
const showLoadoutContainer = document.querySelector('#show-loadout-container')

export const onIndexLoadoutSuccess = (loadouts) => {
    loadouts.forEach(loadout => {
        const div = document.createElement('div')
        div.innerHTML = 
        `
            <h3>${loadout.name}</h3>
            <button data-id="${loadout._id}">Show Loadout</button>
        `
        indexLoadoutContainer.appendChild(div)
    })
}

export const onLoadoutFailure = (error) => {
    loadoutMessageContainer.innerHTML = 
    `
        <h3>You've got an error!</h3>
        <p>${error}</p>
    `
}

export const onCreateLoadoutSuccess = () => {
    loadoutMessageContainer.innerText = 'You have created a new loadout!'
}

export const onShowLoadoutSuccess = (loadout) => {
    const div = document.createElement('div')
    div.innerHTML = 
    `
        <h3>${loadout.name}</h3>

        <form data-id="${loadout._id}">
            <input type="text" name="name" value="${loadout.name}" />
            <input type="submit" value="Update Loadout" />
        </form>

        <button data-id="${loadout._id}">Delete Loadout</button>

    `
    showLoadoutContainer.appendChild(div)
}

export const onUpdateLoadoutSuccess = () => {
    loadoutMessageContainer.innerText = 'The loadout has been successfully updated!'
}

export const onDeleteLoadoutSuccess = () => {
    loadoutMessageContainer.innerText = 'Loadout Deletion Successful.'
}