function Name() {
    window.yn = prompt("Enter your name:");
    if (yn === null || yn.length > 20 || !isValidName(yn)) {
        alert("Name should consist only from 20 letters");
        return false;
    }
}

function isValidName(name) {
    for (let i = 0; i < name.length; i++) {
        let charCode = name.charCodeAt(i);
        if (!(charCode >= 65 && charCode <= 90) &&
            !(charCode >= 97 && charCode <= 122) &&
            !(charCode >= 1040 && charCode <= 1103) &&
            charCode !== 1025 && charCode !== 1105) {
            return false;
        }
    }
    return true;
}

function Age() {
    let birthDate = prompt("Enter date of birth (as YYYY-MM-DD):");
    if (birthDate === null) {
        return false;
    }
    let today = new Date();
    let birth = new Date(birthDate);
    if (isNaN(birth) || birth > today || birth.getFullYear() < 1950 || birth.getFullYear() > 2019) {
        alert("Wrong dob");
        return false;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    window.age = `${years} years, ${months} months and ${days} days`;
}

function Gender() {
    window.gender = prompt("Enter your gender (m/f):");
    if (gender === null || (gender !== 'm' && gender !== 'f')) {
        alert("Gender should be 'm' or 'f'");
        return false;
    }
    return true;
}

function Info() {
    let result = confirm("Save information?");
    if (!result) {
        return false;
    } else {
        let genderRecourse = (gender === 'm') ? 'mister' : 'miss';
        alert('Dear ' + genderRecourse + ' ' + yn + ', you are ' + age);
    }
}
