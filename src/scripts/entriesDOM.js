const entryLog = document.querySelector('.entryLog');

const renderJournalEntries = 
    API.getJournalEntries().then(entries => {
        entries.forEach(entry => {
            console.table(entry);
            let postEntry = makeJournalEntryComponent(entry);
            entryLog.innerHTML += postEntry;
        })
    });