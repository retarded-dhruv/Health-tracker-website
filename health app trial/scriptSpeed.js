// Get references to step and calories elements
const stepValue = document.getElementById('step-value');
const caloriesValue = document.getElementById('calories-value');

// Calories burned per step (example value, can be adjusted)
const caloriesPerStep = 0.05;

// Initialize step count and calories burned
let stepCount = 0;
let caloriesBurned = 0;

// Get references to the step range, its value element, and the "Add Steps" button
const stepRange = document.getElementById('step-range');
const stepRangeValue = document.getElementById('step-range-value');
const addRangeStepsButton = document.getElementById('add-range-steps-button');

// Function to update step count and calories burned
function updateStepCount() {
    const stepsToAdd = parseInt(stepRange.value);
    stepCount += stepsToAdd;
    caloriesBurned = stepCount * caloriesPerStep;
    stepValue.textContent = stepCount;
    caloriesValue.textContent = caloriesBurned.toFixed(2);
    stepRangeValue.textContent = stepsToAdd;
}

// Add event listener to the step range
stepRange.addEventListener('input', updateStepCount);

// Add event listener to the "Add Steps" button
addRangeStepsButton.addEventListener('click', updateStepCount);

// Initialize with zero steps and calories burned
updateStepCount();

