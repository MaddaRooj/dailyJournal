console.log('Hello World!');

const allJournalEntries = [];

const journalEntry1 = {
    date: 'April 11, 2019',
    conceptCovered: 'Java Objects/Functions',
    content: 'Hello World!',
    mood: 'happy'
}

const journalEntry2 = {
    date: 'April 10, 2019',
    conceptCovered: 'JavaScript Functions',
    content: 'I am a second journal entry!',
    mood: 'happy'
}

const journalEntry3 = {
    date: 'April 9, 2019',
    conceptCovered: 'JavaScript Functions',
    content: 'I am a third journal entry!',
    mood: 'happy'
}
const journalEntry4 = {
    date: 'April 8, 2019',
    conceptCovered: 'Group Projects',
    content: 'I know how to work in a group!',
    mood: 'happy'
}

allJournalEntries.push(journalEntry1, journalEntry2, journalEntry3, journalEntry4);
console.log('journal', allJournalEntries);

