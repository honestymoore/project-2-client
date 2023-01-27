// GUNS
export const indexGun = () => {
    return fetch(`http://localhost:8000/guns`)
}

export const createGun = (data) => {
    return fetch(`http://localhost:8000/guns`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showGun = (id) => {
    return fetch(`http://localhost:8000/guns/${id}`)
}

export const updateGun = (data, id) => {
    return fetch(`http://localhost:8000/guns/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteGun = (id) => {
    return fetch(`http://localhost:8000/guns/${id}`, {
        method: 'DELETE'
    })
}

// LOADOUTS
export const indexLoadout = () => {
    return fetch(`http://localhost:8000/loadouts`)
}

export const createLoadout = (data) => {
    return fetch(`http://localhost:8000/loadouts`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showLoadout = (id) => {
    return fetch(`http://localhost:8000/loadouts/${id}`)
}

export const updateLoadout = (data, id) => {
    return fetch(`http://localhost:8000/loadouts/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteLoadout = (id) => {
    return fetch(`http://localhost:8000/loadouts/${id}`, {
        method: 'DELETE'
    })
}
// NOTE

export const createNote = (data) => {
    return fetch(`http://localhost:8000/notes`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}