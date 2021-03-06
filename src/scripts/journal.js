console.log('Hello World!');

const journalText = document.querySelector("#journaltext");
const journalMood = document.querySelector("#mood");
const journalConcept = document.querySelector("#journalConcept");
const journalDate = document.querySelector("#journalDate");
const journalId = document.querySelector("#entryIdInput");

const happyFilter = document.querySelector("#happy");
const mehFilter = document.querySelector("#meh");
const sadFilter = document.querySelector("#sad");
const allFilter = document.querySelector("#all");

renderJournalEntries();

function newjournalObject() {
    const newJournal = {
        date: journalDate.value,
        conceptCovered: journalConcept.value,
        content: journalText.value,
        mood: journalMood.value
    };
    if (journalId.value !== ""){
        API.editEntry(journalId.value, newJournal).then(() => renderJournalEntries());
    }
    else {
        API.saveNewEntry(newJournal).then(() => renderJournalEntries());
    }
};

document.querySelector("#submit").addEventListener("click", function () {
    event.preventDefault();
    newjournalObject();
    setTimeout("location.reload(true);", 500);
});

happyFilter.addEventListener("click", function () {
    entryLog.innerHTML = "";
    API.getJournalEntries().then(entries => {
        entries.filter(entry => {
            if (entry.mood === "Happy") {
                filterJournalEntries(entry);
            }
        })
    })
});

mehFilter.addEventListener("click", function () {
    entryLog.innerHTML = "";
    API.getJournalEntries().then(entries => {
        entries.filter(entry => {
            if (entry.mood === "Meh") {
                filterJournalEntries(entry);
            }
        })
    })
})

sadFilter.addEventListener("click", function () {
    entryLog.innerHTML = "";
    API.getJournalEntries().then(entries => {
        entries.filter(entry => {
            if (entry.mood === "Sad") {
                filterJournalEntries(entry);
            }
        })
    })
});

allFilter.addEventListener("click", function () {
    entryLog.innerHTML = "";
    API.getJournalEntries().then(entries => {
        entries.forEach(entry => {
            filterJournalEntries(entry);
        })
    })
});

