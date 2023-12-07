export const getCurrentDate = () => {
    const currentDate = new Date();

    // Define an array of month names for formatting
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get day, date, month, and year
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
    const dayOfMonth = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // Create and return the formatted string
    return `${dayOfWeek}, ${dayOfMonth} ${month}, ${year}`;
};

