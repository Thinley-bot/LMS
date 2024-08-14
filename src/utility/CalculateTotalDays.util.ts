export function calculateTotalDays(start_date, end_date) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    return endDate.getDate() - startDate.getDate();
}
