function segitiga(height) {
    for (var i = 1; i <= height; i++) {
        console.log('* '.repeat(i));
    }
}
var height = 10;
segitiga(height);
console.log("Tinggi segitiga adalah: ", height);
// untuk run
// npx tsc && node segitiga.js
