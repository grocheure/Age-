import { DateTime } from 'luxon';
import datepicker from 'js-datepicker';
import 'js-datepicker/dist/datepicker.min.css';
import './style.css';

// 1. Initialize the datepicker
const picker = datepicker('#birth-date', {
  formatter: (input, date, instance) => {
    // This formats the date nicely for the input field
    const value = date.toLocaleDateString();
    input.value = value;
  },
  maxDate: new Date(), // Prevents picking future dates
  position: 'br',      // Positions the calendar bottom-right
});

const calculateBtn = document.getElementById('calculate-btn');
const resultDisplay = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  // 2. Get the date object from the picker
  const selectedDate = picker.dateSelected;

  if (!selectedDate) {
    alert("Pick a date first, bro!");
    return;
  }

  // 3. Process with Luxon
  const birthDateTime = DateTime.fromJSDate(selectedDate);
  const now = DateTime.now();
  const diff = now.diff(birthDateTime, ['years', 'months', 'days']).toObject();

  // 4. Output the result
  resultDisplay.innerText = `You are ${Math.floor(diff.years)} years and ${Math.floor(diff.months)} months old!`;
  
});