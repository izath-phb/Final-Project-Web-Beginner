function getGrade(average: number): string {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'E';
}

function calculateAverageAndGrade(
    pemrogramanWeb: number,
    pemrogramanKomputer: number,
    statistika: number,
    sistemBasisData: number
): string {
    if (pemrogramanWeb < 0 || pemrogramanWeb > 100 ||
        pemrogramanKomputer < 0 || pemrogramanKomputer > 100 ||
        statistika < 0 || statistika > 100 ||
        sistemBasisData < 0 || sistemBasisData > 100) {
        throw new Error('Nilai harus antara 0 hingga 100');
    }
    
    const average = (pemrogramanWeb + pemrogramanKomputer + statistika + sistemBasisData) / 4;
    const grade = getGrade(average);

    // Menggunakan template literals dengan backticks
    return `Rata-rata nilai: ${average.toFixed(2)}\nGrade: ${grade}`;
}

try {
    const pemrogramanWeb = 85;
    const pemrogramanKomputer = 78;
    const statistika = 92;
    const sistemBasisData = 88;

    console.log(calculateAverageAndGrade(pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData));
} catch (error) {
    console.error(error instanceof Error ? error.message : 'Unknown error');
}
