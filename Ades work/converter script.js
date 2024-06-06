function convert() {
    let inputWeight = parseFloat(document.getElementById('inputWeight').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let result = document.getElementById('result');

    if (isNaN(inputWeight)) {
        result.innerText = 'Please enter a valid number';
        return;
    }

    let convertedWeight;
    if (fromUnit === 'kg') {
        if (toUnit === 'lb') {
            convertedWeight = inputWeight * 2.20462; // 1 kg = 2.20462 lbs
        } else if (toUnit === 'oz') {
            convertedWeight = inputWeight * 35.274; // 1 kg = 35.274 oz
        } else {
            convertedWeight = inputWeight;
        }
    } else if (fromUnit === 'lb') {
        if (toUnit === 'kg') {
            convertedWeight = inputWeight * 0.453592; // 1 lb = 0.453592 kg
        } else if (toUnit === 'oz') {
            convertedWeight = inputWeight * 16; // 1 lb = 16 oz
        } else {
            convertedWeight = inputWeight;
        }
    } else if (fromUnit === 'oz') {
        if (toUnit === 'kg') {
            convertedWeight = inputWeight * 0.0283495; // 1 oz = 0.0283495 kg
        } else if (toUnit === 'lb') {
            convertedWeight = inputWeight * 0.0625; // 1 oz = 0.0625 lb
        } else {
            convertedWeight = inputWeight;
        }
    }

    result.innerText = `${inputWeight} ${fromUnit} is equal to ${convertedWeight.toFixed(2)} ${toUnit}`;
}
