class ApiService {

    static fetchCuisines() {
        return fetch("http://localhost:3000/cuisines")
            .then(response => response.json())
    }

    static addCuisine(newCuisine) {
        return fetch("http://localhost:3000/cuisines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newCuisine)
        })
            .then(response => {

                if (response.ok) {
                    return response.json()
                } else {
                    throw Error("Yikes!")
                }
            })
    }

    static deleteCuisine(id) {
        return fetch(`http://localhost:3000/cuisines/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
    }
}