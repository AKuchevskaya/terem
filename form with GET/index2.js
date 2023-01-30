


const { form } = document.forms;

function getInputs(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const values = JSON.stringify(Object.fromEntries(formData.entries()));
    
    const answers = document.createElement('div');
    answers.className = 'answers';
    answers.innerHTML = `<p>${values}</p>`;
    document.body.append(answers);
}

form.addEventListener('submit', getInputs);

function getJSON() {
    fetch('???', {
        method: 'GET'
    })
    .then((res) => {
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log('ошибка', err);
    })
}