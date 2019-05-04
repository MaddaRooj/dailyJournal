function buildJournalDOM(entry) {
  // build journal card container
  let journalCard = document.createElement("section");
  journalCard.setAttribute("id", `journal-${entry.id}`);
  journalCard.setAttribute("class", "journal_card");

  // build header element
  let journalConcept = document.createElement("h1");
  journalConcept.textContent = entry.conceptCovered;

  // build journal details
  let journalDetails = document.createElement("div");
  journalDetails.innerHTML = `
          <h3>Date: ${entry.date}</h3>
          <h3>Mood: ${entry.mood}</h3>
          <p>${entry.content}</p>
        `;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Entry";
  deleteBtn.addEventListener("click", () => {
    let result = confirm(`Are you sure you want to delete Journal ${entry.id}?`);
    if (result) {
      API.deleteEntry(entry.id).then(renderJournalEntries);
    }
  });

  journalCard.appendChild(journalConcept);
  journalCard.appendChild(journalDetails);
  journalCard.appendChild(deleteBtn);
  entryLog.appendChild(journalCard);
}