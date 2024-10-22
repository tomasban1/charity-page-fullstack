export function isValidUsername(text) {
    const minLength = 3;
    const maxLength = 20;
    if (typeof text !== 'string') {
        return 'Vartotojo vardas turi buti tekstinis.'
    }

    if (text.length < minLength) {
        return `Vartotojo vardo ilgis turi buti maziausiai ${minLength} simboliu ilgio.`
    }

    if (text.length > maxLength) {
        return `Vartotojo vardo ilgis turi buti daugiausiai ${maxLength} simboliu ilgio.`
    }
    return '';
}

export function isValidPassword(text) {
    const minLength = 12;
    const maxLength = 100;
    if (typeof text !== 'string') {
        return 'Slaptazodis turi buti tekstinis.'
    }

    if (text.length < minLength) {
        return `Slaptazodis ilgis turi buti maziausiai ${minLength} simboliu ilgio.`
    }

    if (text.length > maxLength) {
        return `Slaptazodis ilgis turi buti daugiausiai ${maxLength} simboliu ilgio.`
    }
    return '';
}

export function isValidStory(txt) {
    const minLength = 10;
    const maxLength = 300;

    if (typeof txt !== 'string') {
        return 'Slaptazodis turi buti tekstinis.'
    }

    if (txt.length < minLength) {
        return false;
    }

    if (txt.length > maxLength) {
        return false;
    }

    return true;
}

export function isValidMoney(money) {
    if (typeof money !== 'number') {
        return 'Pinigai turi būti skaičių formatu.'
    }
}
