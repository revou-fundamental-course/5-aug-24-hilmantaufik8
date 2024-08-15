// js/script.js

//Pengisian data di form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmi-form');
    const beratInput = document.getElementById('berat');
    const tinggiInput = document.getElementById('tinggi');
    const usiaInput = document.getElementById('usia');
    const jenisKelaminRadios = document.getElementsByName('jenis-kelamin');
    const resultDiv = document.getElementById('result');
    
    //Penambahan fungsi tombol Hitung BMI
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        calculateBMI();
    });

    //Penambahan fungsi tombol Reset dan menghilangkan hasil hitungan
    document.querySelector('.reset').addEventListener('click', () => {
        beratInput.value = '';
        tinggiInput.value = '';
        usiaInput.value = '';
        jenisKelaminRadios.forEach(radio => radio.checked = false);
        resultDiv.innerHTML = '';
    });

    //Proses penghitungan BMI
    function calculateBMI() {
        const berat = parseFloat(beratInput.value);
        const tinggi = parseFloat(tinggiInput.value) / 100; // Konversi cm ke meter

        if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0) {
            resultDiv.innerText = 'Masukkan nilai yang valid!';
            return;
        }

        const bmi = berat / (tinggi * tinggi); //Rumus menghitung BMI
        let category = '';
    

        //kondisi-kondisi hasil perhitungan BMI
        if (bmi < 18.5) {
            category = 'Kurus';
            advice = 'Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.';
        } else if (bmi < 24.9) {
            category = 'Normal';
            advice = 'Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.';
        } else if (bmi < 29.9) {
            category = 'Kegemukan';
            advice = 'Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
        } else {
            category = 'Obesitas';
            advice = 'Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.';
        }

        //hasil yang ditampilkan sesuai perhitungan dan kondisi BMI serta saran
        resultDiv.innerHTML = `
        BMI Anda: <strong>${bmi.toFixed(2)}</strong><br>
        Kategori: <strong>${category}</strong><br>
        <p class="advice">${advice}</p>
    `;
    }
});
