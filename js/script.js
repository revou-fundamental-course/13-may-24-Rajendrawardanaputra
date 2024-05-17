function calculateArea() {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const area = 0.5 * base * height;
    document.getElementById('result').innerText = 'Luas Segitiga: ' + area;
}
