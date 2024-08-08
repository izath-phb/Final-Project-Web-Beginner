function getGrade(average) {
    if (average >= 90)
        return 'A';
    if (average >= 80)
        return 'B';
    if (average >= 70)
        return 'C';
    if (average >= 60)
        return 'D';
    return 'E';
}
function calculateAverageAndGrade(pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData) {
    if (pemrogramanWeb < 0 || pemrogramanWeb > 100 ||
        pemrogramanKomputer < 0 || pemrogramanKomputer > 100 ||
        statistika < 0 || statistika > 100 ||
        sistemBasisData < 0 || sistemBasisData > 100) {
        throw new Error('Nilai harus antara 0 hingga 100');
    }
    var average = (pemrogramanWeb + pemrogramanKomputer + statistika + sistemBasisData) / 4;
    var grade = getGrade(average);
    // Menggunakan template literals dengan backticks
    return "Rata-rata nilai: ".concat(average.toFixed(2), "\nGrade: ").concat(grade);
}
try {
    var pemrogramanWeb = 85;
    var pemrogramanKomputer = 78;
    var statistika = 92;
    var sistemBasisData = 88;
    console.log(calculateAverageAndGrade(pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData));
}
catch (error) {
    console.error(error instanceof Error ? error.message : 'Unknown error');
}
