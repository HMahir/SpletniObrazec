function toggleDivs() {
    const isOškodovanecChecked = document.getElementById('ena').checked;
    console.log((document.getElementById("ena").checked));
    const isPooblaščenecChecked = document.getElementById('dva').checked;

    document.getElementById('priimekID').classList.toggle('hidden', !isOškodovanecChecked && !isPooblaščenecChecked);

    document.getElementById('davcnaID').classList.toggle('hidden', !isPooblaščenecChecked);
    }

function selectRole(vlagatelj) {
        document.getElementById(vlagatelj).checked = true; 
        toggleDivs(); 
    
    }
function toggleFields() {
        const checkbox = document.getElementById("tujec");
        const extraFields = document.getElementById("extraFields");
        
        if (checkbox.checked) {
            extraFields.style.display = "block";
        } else {
            extraFields.style.display = "none";
        }
}
function samoStevilke(vnosnoPolje) {
    vnosnoPolje.value = vnosnoPolje.value.replace(/[^0-9]/g, '');
}
function selectRadio(id) {
    const radioButton = document.getElementById(id);
    radioButton.checked = true;
    selectRole();
}

function selectRole() {
    const oškodovanecContainer = document.querySelector('.levi');
    const pooblaščenecContainer = document.querySelector('.desni');

    if (document.getElementById('ena').checked) {
        oškodovanecContainer.classList.add('selected');
        pooblaščenecContainer.classList.remove('selected');
    } else if (document.getElementById('dva').checked) {
        pooblaščenecContainer.classList.add('selected');
        oškodovanecContainer.classList.remove('selected');
    } else {
        oškodovanecContainer.classList.remove('selected');
        pooblaščenecContainer.classList.remove('selected');
    }

    toggleDivs();
}
function selectRadio2(id) {
    const radioButton = document.getElementById(id);
    radioButton.checked = true;
    selectRole2();
}
function selectRole2() {
    const fizicnaContainer = document.querySelector('.levi2');
    const pravnaContainer = document.querySelector('.desni2');
    const leasingContainer = document.querySelector('.levi3');

    if (document.getElementById('fizicnaID').checked) {
        fizicnaContainer.classList.add('selected');
        pravnaContainer.classList.remove('selected');
        leasingContainer.classList.remove('selected');
    } else if (document.getElementById('pravnaID').checked) {
        pravnaContainer.classList.add('selected');
        fizicnaContainer.classList.remove('selected');
        leasingContainer.classList.remove('selected');
    } else if (document.getElementById('leasingID').checked) {
        leasingContainer.classList.add('selected');
        fizicnaContainer.classList.remove('selected');
        pravnaContainer.classList.remove('selected');
    } else {
        fizicnaContainer.classList.remove('selected');
        pravnaContainer.classList.remove('selected');
        leasingContainer.classList.remove('selected');
    }
}