let URI = 'http://5c64f3d8c969210014a32f30.mockapi.io/api/listData'

async function getAllDataFromServer() {
    try {
        let response = await fetch(URI)
        let responseJon = await response.json()
        return responseJon
    } catch (error) {
        throw error
    }
}

async function insertDataFromServer(params) {
    try {
        let response = await fetch(URI, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        let responseJon = await response.json()
        return responseJon
    } catch (error) {
        throw error
    }
}

async function updateDataFromServer(id, params) {
    try {
        let response = await fetch(URI + "/" + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        let responseJon = await response.json()
        return responseJon
    } catch (error) {
        throw error
    }
}

async function deleteDataFromServer(id) {
    try {
        let response = await fetch(URI + "/" + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let responseJon = await response.json()
        return responseJon
    } catch (error) {
        throw error
    }
}
export {
    getAllDataFromServer,
    insertDataFromServer,
    updateDataFromServer,
    deleteDataFromServer
}
