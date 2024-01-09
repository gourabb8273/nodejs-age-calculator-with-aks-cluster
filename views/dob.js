function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageMessage = document.getElementById('age-message');
  
    if (!dobInput.value) {
        alert('Please enter a valid date of birth.');
        return;
    }

    const dob = new Date(dobInput.value);
    const today = new Date();
  
    if (dob > today) {
        alert('Please enter a valid date of birth!');
        dobInput.value = '';
        ageMessage.textContent = ''; 
        return;
    }

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
        if (ageDays < 0) {
            const lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageDays += lastMonthDays;
            ageMonths--;
        }
    }
  
    let yearText = 'years';
    let monthText = 'months';
    let dayText = 'days';

    if (ageYears === 1) {
        yearText = 'year';
    }

    if (ageMonths === 1) {
        monthText = 'month';
    }

    if (ageDays === 1) {
        dayText = 'day';
    }

    let ageText = '';

    if (ageYears > 0) {
        ageText += `${ageYears} ${yearText}`;
    }
    
    if (ageMonths > 0) {
        if (ageText.length > 0) {
            ageText += ', ';
        }
        ageText += `${ageMonths} ${monthText}`;
    }
    
    if (ageDays > 0) {
        if (ageText.length > 0) {
            ageText += ', ';
        }
        ageText += `${ageDays} ${dayText}`;
    }
    
    ageMessage.textContent = `Your age is ${ageText}.`;
}
