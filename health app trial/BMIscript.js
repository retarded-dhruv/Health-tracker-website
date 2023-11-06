
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiValueOutput = document.getElementById('bmiValue');
const bmiCategoryOutput = document.getElementById('bmiCategory');
const calculateBMIButton = document.getElementById('calculateBMI');

calculateBMIButton.addEventListener('click', calculateBMI);

function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // Convert height to meters
    const weight = parseFloat(weightInput.value);
    
    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        const bmiRounded = bmi.toFixed(2);
        bmiValueOutput.textContent = bmiRounded;
        const bmiCategory = getBMICategory(bmi);
        bmiCategoryOutput.textContent = `Category: ${bmiCategory}`;
    } else {
        bmiValueOutput.textContent = 'Invalid input';
        bmiCategoryOutput.textContent = 'Category: -';
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
