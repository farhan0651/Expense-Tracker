export function getFormattedDate(date) {
    if (!date) {
        return 'Invalid Date';
    }
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}