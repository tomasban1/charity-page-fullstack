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