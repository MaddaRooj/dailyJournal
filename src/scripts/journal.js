console.log('Hello World!');

// const journalEntries = [
//     {
//         date: 'April 11, 2019',
//         conceptCovered: 'Java Objects/Functions',
//         content: 'Hello World!',
//         mood: 'happy'
//     },
//     {
//         date: 'April 10, 2019',
//         conceptCovered: 'JavaScript Functions',
//         content: 'I am a second journal entry!',
//         mood: 'happy'
//     },
//     {
//         date: 'April 9, 2019',
//         conceptCovered: 'JavaScript Functions',
//         content: 'I am a third journal entry!',
//         mood: 'happy'
//     },
//     {
//         date: 'April 8, 2019',
//         conceptCovered: 'Group Projects',
//         content: 'I know how to work in a group!',
//         mood: 'happy'
//     }
// ]

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
const renderJournalEntries = (entries) => {
    journalEntries.forEach(function(entry){
        let x = makeJournalEntryComponent(entry);
        entryLog.innerHTML += x;
        console.log(x);
    })
}

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

