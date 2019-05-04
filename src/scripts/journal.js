console.log('Hello World!');

API.getJournalEntries().then(renderJournalEntries);

const journalText = document.querySelector("#journaltext");
const journalMood = document.querySelector("#mood");
const journalConcept = document.querySelector("#journalConcept");
const journalDate = document.querySelector("#journalDate");

function newjournalObject() {
    const newJournal = {
        date: journalDate.value,
        conceptCovered: journalConcept.value,
        content: journalText.value,
        mood: journalMood.value
    };
    API.saveNewEntry(newJournal).then(renderJournalEntries);
};

document.querySelector("#submit").addEventListener("click", function () {
    event.preventDefault();
    newjournalObject();
});