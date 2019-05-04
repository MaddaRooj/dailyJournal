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
    // deleteEntry: function (entryId) {
    //     return fetch(`${baseUrl}/${entryId}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(response => response.json());
    // },
    // editEntry: function (entryId, journalObject) {
    //     return fetch(`${baseUrl}/${entryId}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(journalObject)
    //     }).then(response => response.json());
    }
};
