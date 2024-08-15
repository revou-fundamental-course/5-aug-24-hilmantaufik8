// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmi-form');
    const beratInput = document.getElementById('berat');
    const tinggiInput = document.getElementById('tinggi');
    const usiaInput = document.getElementById('usia');
    const jenisKelaminRadios = document.getElementsByName('jenis-kelamin');
    const resultDiv = document.getElementById('result');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        calculateBMI();
    });

    document.querySelector('.reset').addEventListener('click', () => {
        beratInput.value = '';
        tinggiInput.value = '';
        usiaInput.value = '';
        jenisKelaminRadios.forEach(radio => radio.checked = false);
        resultDiv.innerText = '';
    });

    function calculateBMI() {
        const berat = parseFloat(beratInput.value);
        const tinggi = parseFloat(tinggiInput.value) / 100; // cm to m

        if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0) {
            resultDiv.innerText = 'Masukkan nilai yang valid!';
            return;
        }

        const bmi = berat / (tinggi * tinggi);
        let category = '';

        if (bmi < 18.5) {
            category = 'Kurus';
        } else if (bmi < 24.9) {
            category = 'Normal';
        } else if (bmi < 29.9) {
            category = 'Kegemukan';
        } else {
            category = 'Obesitas';
        }

        resultDiv.innerHTML = `BMI Anda: <strong>${bmi.toFixed(2)}</strong><br>Kategori: <strong>${category}</strong>`;
    }
});
