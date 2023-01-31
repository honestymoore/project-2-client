import { store } from './store.js'

//USER
export const signUp = (data) => {
	return fetch(`http://localhost:8000/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`http://localhost:8000/sign-in`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

// GUNS
export const indexGuns = () => {
	return fetch(`http://localhost:8000/guns`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const createGuns = (data) => {
    return fetch(`http://localhost:8000/guns`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const showGun = (id) => {
	return fetch(`http://localhost:8000/guns/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const updateGun = (data, id) => {
    return fetch(`http://localhost:8000/guns/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteGun = (id) => {
    return fetch(`http://localhost:8000/guns/${id}`, {
        method: 'DELETE',
        headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

// LOADOUTS
export const indexLoadout = () => {
    return fetch(`http://localhost:8000/loadouts`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`
		}
	})
}

export const createLoadout = (data) => {
    return fetch(`http://localhost:8000/loadouts`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const showLoadout = (id) => {
    return fetch(`http://localhost:8000/loadouts/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const updateLoadout = (data, id) => {
    return fetch(`http://localhost:8000/loadouts/${id}`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteLoadout = (id) => {
    return fetch(`http://localhost:8000/loadouts/${id}`, {
        method: 'DELETE',
        headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

// NOTES
export const createNote = (data) => {
    return fetch(`http://localhost:8000/notes`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}