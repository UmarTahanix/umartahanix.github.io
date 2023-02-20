let addContact = document.getElementById('add');
let block = document.getElementsByClassName('container');
let Name = document.getElementById('name'); 
let number = document.getElementById('number');

addContact.addEventListener('click', ()=>{
    let contact = document.createElement('div');
    contact.classList.add('displaying');
    
    let nameSection = document.createElement('p');
    nameSection.classList.add('nameDisplay');
    nameSection.innerText = Name.value ;  
    contact.appendChild(nameSection);

    let numberSection = document.createElement('p');
    numberSection.classList.add('numberDisplay');
    numberSection.innerText = number.value;  
    contact.appendChild(numberSection);
    
    let removeButton = document.createElement('button');
    removeButton.innerText='Remove';
    removeButton.classList.add('remove');
    contact.appendChild(removeButton);

    if((Name.value === "") && (number.value === ""))
    {
        alert('Please enter the name and the phone number !');
    }
    
    else if (Name.value === "")
    {
        alert('Please enter the name !');
    }
    
    else if (number.value === "")
    {
        alert('Please enter the phone number !');
    }

    else 
    {
        block[0].appendChild(contact);
    }
    
    Name.value="";
    number.value="";

    removeButton.addEventListener('click', function(){
        block[0].removeChild(contact);
    })
})