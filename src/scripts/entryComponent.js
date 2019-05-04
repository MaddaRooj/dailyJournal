const makeJournalEntryComponent = (journalEntry) => {
    return `<div>
                <h1>${journalEntry.conceptCovered}</h1>
                <h3>${journalEntry.date}</h3>
                <h3>Mood: ${journalEntry.mood}</h3>
                <p>${journalEntry.content}</p>
            </div>`
};