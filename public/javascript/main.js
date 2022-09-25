const createElementsForData = (datae) => {
    const ul = document.createElement('ul');
    ul.classList.add('list');
    datae.forEach(student => {
        const li = document.createElement('li');
        const spanLastName = document.createElement('span');
        spanLastName.innerText = student.lastName;
        const spanNumber = document.createElement('span');
        spanNumber.innerText = student.code;
        li.appendChild(spanLastName);
        li.appendChild(spanNumber);
        li.classList.add('list-item');
        li.setAttribute('data-id', student.id);
        ul.appendChild(li);
        /*Add a auto-rdirection per click*/
        li.addEventListener('click', function() {
            window.location.href = `/student?id=${student.id}`;
        })
    });
    dataDiv.appendChild(ul);
}

const data = new XMLHttpRequest();
data.open('GET', './data/data.json', true);
data.send();
data.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const datae = JSON.parse(this.responseText);
        createElementsForData(datae);
    }
}

const dataDiv = document.querySelector('.data');

