function buildJournalDOM(entry) {
  let formattedDate = new Date(entry.date);
  const month = formattedDate.toLocaleString("en-us", { month: "long" });
  let dateFormat = entry.date.split("-");
  // build journal card container
  let journalCard = document.createElement("section");
  journalCard.setAttribute("id", `journal-${entry.id}`);
  journalCard.setAttribute("class", "journal_card");

  // build header element
  let journalconcept = document.createElement("h1");
  journalconcept.textContent = entry.conceptCovered;

  // build journal details
  let journalDetails = document.createElement("div");
  journalDetails.innerHTML = `
          <h2>${month} ${dateFormat[2]}, ${dateFormat[0]}</h2>
          <h3>Mood: ${entry.mood}</h3>
          <p>${entry.content}</p>
        `;

  let editBtn = document.createElement("button");
  editBtn.setAttribute("class", "edit_btn");
  editBtn.textContent = "Edit Entry";
  editBtn.addEventListener("click", () => {
    console.log(`You are editing Journal Entry ${entry.id}`)
    document.querySelector("#journalConcept").focus();
    document.querySelector("#submit").textContent = `Edit Journal ${entry.id}`;
    journalConcept.value = entry.conceptCovered;
    journalDate.value = entry.date;
    journalText.value = entry.content;
    journalMood.value = entry.mood;
    journalId.value = entry.id;
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete_btn");
  deleteBtn.textContent = "Delete Entry";
  deleteBtn.addEventListener("click", () => {
    let result = confirm(`Are you sure you want to delete Journal ${entry.id}?`);
    if (result) {
      API.deleteEntry(entry.id).then(renderJournalEntries);
    }
  });

  journalCard.appendChild(journalconcept);
  journalCard.appendChild(journalDetails);
  journalCard.appendChild(editBtn);
  journalCard.appendChild(deleteBtn);
  entryLog.appendChild(journalCard);
}