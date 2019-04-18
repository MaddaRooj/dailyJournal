console.log('Hello World!');

const entryLog = document.querySelector('.entryLog');

const makeJournalEntryComponent = (journalEntry) => {
    return `            <div>
                <h1>${journalEntry.conceptCovered}</h1>
                <h3>${journalEntry.date}</h3>
                <h3>Mood: ${journalEntry.mood}</h3>
                <p>${journalEntry.content}</p>
            </div>`
}

// Utilize fetch to retrieve posts from our JSON database
fetch(`http://localhost:3000/journalEntries`)
    .then(journalEntries => journalEntries.json())
    .then(entries => {
        entries.forEach(entry => {
            console.table(entry);
            let postEntry = makeJournalEntryComponent(entry);
            entryLog.innerHTML += postEntry;
        })
    })

// FIRST METHOD / FOREACH LOOP ON ARRAY
// const renderJournalEntries = (entries) => {
//     journalEntries.forEach(function(entry){
//         let x = makeJournalEntryComponent(entry);
//         entryLog.innerHTML += x;
//         console.log(x);
//     })
// }

// ALTERNATE METHOD / FOR LOOP -----------------------------------------------------
// const renderJournalEntries = (entries) => {
//     for (let i = 0; i < entries.length; i++){
//         let entry = makeJournalEntryComponent(entries[i]);
//         entryLog.innerHTML += entry;
//         console.log(entry);
//     }
// }
// Invoke the render function
// renderJournalEntries(journalEntries);

