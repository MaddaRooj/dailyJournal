const baseUrl = "http://localhost:3000/journalEntries";

const API = {
    getJournalEntries: function () {
        return fetch(baseUrl).then(results => results.json());
    },
    getOneEntry: function (id) {
        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },
    saveNewEntry: function (newjournalObject) {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newjournalObject)
        }).then(response => response.json());
    // },
    // deleteChicken: function (chickenId) {
    //     return fetch(`${baseUrl}/${chickenId}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(response => response.json());
    // },
    // editChicken: function (chickenId, chickenObject) {
    //     return fetch(`${baseUrl}/${chickenId}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(chickenObject)
    //     }).then(response => response.json());
    }
};
