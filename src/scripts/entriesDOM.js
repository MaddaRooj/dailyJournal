const entryLog = document.querySelector('.entryLog');

const renderJournalEntries = 
    API.getJournalEntries().then(entries => {
        entries.forEach(entry => {
            console.table(entry);
            buildJournalDOM(entry);
        })
    });

const filterJournalEntries = (entry) => {
    buildJournalDOM(entry);
};