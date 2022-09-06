function jsToHtml(value) {
    var ul = document.getElementById('ul');
    var li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
    
}


let form = document.querySelector('form');
let btn = form.querySelector('button');

let pwd = document.getElementById('pwd');
pwd.addEventListener('focusin', function() {
    pwd.setAttribute('type', 'text');
})
pwd.addEventListener('focusout', function() {
    pwd.setAttribute('type', 'password');
})

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
    var fnStr = func.toString().replace(STRIP_COMMENTS, ''); // transforme l'info en str
    var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if(result === null)
        result = [];
    return result;
}

class Employer {
    constructor(fname, lname, email, pwd, address, phone, contrat, birth, entry, exp){

        for(let i = 0; i < arguments.length; i++) {
            this[getParamNames(Employer)[i]] = arguments[i];
        }
    }
    fullname() {
        return this.fname + '_' + this.lname;
    }
    acronyme() {
        return this.fname[0] + this.lname[0];
    }
    calculAge() {
        let age = this.birth;
        let ageMill = new Date(age);
        let currentDate = new Date();
        let diff = currentDate - ageMill;
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
    }
}
let tabObj = [];
let i = 0;
btn.addEventListener('click', function() {
    console.log(form.checkValidity());
    console.log(form.length)
    if(form.checkValidity() == false) {
        alert("Rempli tous les champs Bro !");
        for (let i = 1; i < 21; i=i+2) {
            if(form.children[i].checkValidity() == false) {
                form.children[i].classList.add('wrong');
            }
            else {
                form.children[i].classList.remove('wrong');
            }
    }
    }
    else {
        
        let tab = [];
    for (let i = 1; i < 19; i=i+2) {
        form.children[i].classList.remove('wrong');
            let value = form.children[i].value;
            tab.push(value);
            console.log(form.children[i].value);
    }

    
    //condition differente adresse
    for (let j = 0; j < tabObj.length; j++) {
        if(tab[2] == tabObj[j].email) {
            alert('adresse mail déjà utilisé');
            testEmail.style.border = "red 2px solid";
            return false;
        }
        testEmail.style.border = "none";
        if(tab[5] == tabObj[j].phone) {
            alert('numéro de téléphone déjà utilisé');
            testPhone.style.border = "red 2px solid";
            return false;
        }
        form.children[5].classList.remove('wrong');
        testPhone.style.border = "none";
    }
    form.children[5].classList.remove('wrong');
    let newEmploye = new Employer(tab[0], tab[1], tab[2], tab[3], tab[4], tab[5], tab[6], tab[7])
    tabObj.push(newEmploye);
    console.log(tabObj)
    
    let table = document.querySelector('table');
    let tbody = table.querySelector('tbody');
    
    let newUser = '<tr><td><img src="https://avatars.dicebear.com/api/initials/' + newEmploye.acronyme() + '.svg">'+ newEmploye.fullname()+' </td><td>'
    + tab[2] + '</td><td>'
    + tab[4] + '</td><td>'
    + tab[5] + '</td><td>'
    + tab[6] + '</td><td>'
     + newEmploye.calculAge() + '</td><td><button id="modal" onclick="modal(' +i+')">Voir +</button></td><td><button onclick="supprimer(' + i + ')">delete</button></td></tr>';
     
    tbody.innerHTML += newUser;
    i++;
}
    })


//verif email/phone possibilities
let testEmail = document.getElementById('email');
let testPhone = document.getElementById('phone');
testEmail.addEventListener('keyup', ()=> {
    for (let j = 0; j < tabObj.length; j++) {
        console.log(tabObj[j].email);
        if(testEmail.value == tabObj[j].email) {
            testEmail.style.border = "red 2px solid";
            return false;
        }
        else {
            testEmail.style.border = "green 2px solid"
        }
    }
})
testPhone.addEventListener('keyup', ()=> {
    for (let j = 0; j < tabObj.length; j++) {
        console.log(testPhone.value.length);
        if((testPhone.value.length !== 10) || (isNaN(testPhone.value))) {
            testPhone.style.border = "red 2px solid";
            return false;
        }
        if(testPhone.value == tabObj[j].phone) {
            testPhone.style.border = "red 2px solid";
            return false;
        }
        else {
            testPhone.style.border = "green 2px solid"
        }
    }
})


//Modal
let divModal = document.getElementById('modalContent');

function modal(i) {
 console.log(tabObj[i].fname)
    let modal = tabObj[i];
    console.log('modal')
console.log(modal);
divModal.style.display = "flex";
let newModal = '<ul><li>Prénom : ' + modal.fname +  '</li><li>Nom : '+ modal.lname+'</li><li>email : '+ modal.email+ '</li><li>age : '+ modal.calculAge() +' ans</li><li>mdp : '+modal.pwd + '</li><li>contrat : '+ modal.contrat+'</li><li>Adresse : '+ modal.address+'</li><li>tel :' + modal.phone +'</li><li>date entrée : '+ modal.entry +'</li><li></li><button id="outModal" onclick="closeModal()">X</button></ul>'
divModal.innerHTML = newModal;
}

function closeModal() {
    divModal.style.display = "none";
}

function supprimer(i) {
    console.log(i)
}