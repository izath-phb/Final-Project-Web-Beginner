# Kalkulator Nilai

Proyek ini mencakup fungsi TypeScript untuk menghitung rata-rata nilai dari empat mata pelajaran dan menentukan grade huruf berdasarkan skor rata-rata.

## Fungsi

### `getGrade(average: number): string`

Fungsi ini menentukan grade huruf berdasarkan skor rata-rata.

**Parameter:**

- `average` (number): Skor rata-rata untuk menentukan grade.

**Mengembalikan:**

- (string): Grade huruf yang sesuai dengan skor rata-rata. Grade ditentukan sebagai berikut:
  - `A` untuk skor 90 dan ke atas
  - `B` untuk skor antara 80 dan 89
  - `C` untuk skor antara 70 dan 79
  - `D` untuk skor antara 60 dan 69
  - `E` untuk skor di bawah 60

### `calculateAverageAndGrade(
  pemrogramanWeb: number,
  pemrogramanKomputer: number,
  statistika: number,
  sistemBasisData: number
): string`

Fungsi ini menghitung rata-rata nilai dari empat mata pelajaran dan mengembalikan string terformat dengan rata-rata dan grade huruf yang sesuai.

**Parameter:**

- `pemrogramanWeb` (number): Nilai untuk mata pelajaran "Pemrograman Web".
- `pemrogramanKomputer` (number): Nilai untuk mata pelajaran "Pemrograman Komputer".
- `statistika` (number): Nilai untuk mata pelajaran "Statistika".
- `sistemBasisData` (number): Nilai untuk mata pelajaran "Sistem Basis Data".

**Mengembalikan:**

- (string): String terformat yang menunjukkan rata-rata nilai dan grade huruf. Rata-rata nilai ditampilkan dengan dua tempat desimal.

**Kesalahan:**

- Melemparkan error jika salah satu nilai berada di luar rentang [0, 100].

## Penggunaan

Anda dapat menggunakan fungsi `calculateAverageAndGrade` untuk menghitung dan menampilkan rata-rata nilai serta grade untuk sekumpulan nilai mata pelajaran.

```typescript
try {
    const pemrogramanWeb = 85;
    const pemrogramanKomputer = 78;
    const statistika = 92;
    const sistemBasisData = 88;

    console.log(calculateAverageAndGrade(pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData));
} catch (error) {
    console.error(error instanceof Error ? error.message : 'Kesalahan tidak dikenal');
}
