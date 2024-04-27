// Function to format the time
const formatTime = (createdAt) => {
    const date = new Date(createdAt);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

export {formatTime }