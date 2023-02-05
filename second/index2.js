const { form } = document.forms;

function getInputs(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const values = JSON.stringify(Object.fromEntries(formData.entries()));

  const answers = document.createElement("div");
  answers.className = "answers";
  answers.innerHTML = `<p>${values}</p>`;
  document.body.append(answers);
}

form.addEventListener("submit", getInputs);

fetch("package.json", {
  method: "GET",
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error();
  })
  .then((data) => {
    alert("данные получены");
  })
  .catch((err) => {
    console.log("ошибка", err);
  });
