function checkIsValidCopy(original, copy) {
    if (original.length !== copy.length) return false;

    const SIMBOLOS = '#+:. ';
    const MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz';

    const map = {
        '#': '+:. ',
        '+': ':. ',
        ':': '. ',
        '.': ' '
    };

    const filter_obj = [...MAYUSCULAS, ...MINUSCULAS].reduce((obj, char) => {
        const patron = [char];
        if (char >= 'A' && char <= 'Z') {
            patron.push(char.toLowerCase());
        }
        patron.push(...(map[char] ?? [...SIMBOLOS]));
        obj[char] = patron.join('');
        return obj;
    }, {...map});
    console.log(filter_obj);

    return original.split('').every((letra_actual, i) => {
        const copia_actual = copy.charAt(i);
        let filtro = letra_actual + filter_obj[letra_actual];
        return filtro.includes(copia_actual);
    });
}