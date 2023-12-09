const result = document.querySelector('#resultTemp');

celToFah = (cel) => {
    const fah = Math.round((cel * 9) / 5 + 32);
    result.innerHTML = `${fah} °Fahrenheit`;
}

fahToCel = (fah) => {
    const cel = Math.round((fah - 32) * 5 / 9);
    result.innerHTML = `${cel} °Celsius`;
}
const covertTemp = () => {
    const tempValue = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const selectedValue = temp_diff.options[tempSelected.selectedIndex].value;

    if (selectedValue == 'cel') {
        celToFah(tempValue);
    } else {
        fahToCel(tempValue);
    }

};