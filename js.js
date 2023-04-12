const contents = document.getElementsByClassName('content');
for (let i = 0; i < contents.length; i++) {
    contents[i].style.color = 'red';
}

const pps = document.getElementsByClassName('pp');
for (let i = 0; i < pps.length; i++) {
    pps[i].style.color = 'blue';
}

const aa = document.getElementsByClassName("pp");
aa[0].style.color = 'blue';


const idElement = document.getElementById('id');
idElement.textContent = '새로운 내용';
idElement.style.fontSize = '50px';

const line = document.getElementsByClassName('list-item')[0];
line.style.fontStyle = 'italic';

const listItems = document.getElementsByTagName('li');
const thirdListItem = listItems[2];
thirdListItem.style.backgroundColor = 'yellow';

const idchange = document.querySelectorAll('#id99');
    for(let i =0; i<idchange.length;i++){
        idchange[i].style.color = "purple";
    }
