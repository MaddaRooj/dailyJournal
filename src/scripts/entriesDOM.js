const entryLog = document.querySelector('.entryLog');

function renderJournalEntries() {
    API.getJournalEntries().then(entries => {
        console.log("entries", entries);
        entryLog.innerHTML = "";
        entries.forEach(entry => {
            console.table(entry);
            buildJournalDOM(entry);
        })
    });
}

const filterJournalEntries = (entry) => {
    buildJournalDOM(entry);
};