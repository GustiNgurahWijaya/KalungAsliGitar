function hitungLuas(){
    let nilaiAlas = document.getElementById('nilaiAlas').value;
    let nilaiTinggi = document.getElementById('nilaiTinggi').value;

    nilaiAlas = parseFloat(nilaiAlas);
    nilaiTinggi = parseFloat(nilaiTinggi);

    let hasilLuas = 0.5 * nilaiAlas * nilaiTinggi;

    document.getElementById('hasilLuas').value = hasilLuas;
}

function resetNilaiLuas(){
    let nilaiAlas = document.getElementById('nilaiAlas');
    let nilaiTinggi = document.getElementById('nilaiTinggi');
    let hasilLuas = document.getElementById('hasilLuas');

    nilaiAlas.value = "";
    nilaiTinggi.value = "";
    hasilLuas.value = "";
}


function hitungKeliling(){
    let nilaiSisiA = document.getElementById('nilaiSisiA').value;
    let nilaiSisiB = document.getElementById('nilaiSisiB').value;
    let nilaiSisiC = document.getElementById('nilaiSisiC').value;

    nilaiSisiA = parseFloat(nilaiSisiA);
    nilaiSisiB = parseFloat(nilaiSisiB);
    nilaiSisiC = parseFloat(nilaiSisiC);

    let hasilKeliling = nilaiSisiA + nilaiSisiB + nilaiSisiC;

    document.getElementById('hasilKeliling').value = hasilKeliling;
}

function resetNilaiKeliling(){
    let nilaiSisiA = document.getElementById('nilaiSisiA');
    let nilaiSisiB = document.getElementById('nilaiSisiB');
    let nilaiSisiC = document.getElementById('nilaiSisiC');
    let hasilKeliling = document.getElementById('hasilKeliling');

    nilaiSisiA.value = "";
    nilaiSisiB.value = "";
    nilaiSisiC.value = "";
    hasilKeliling.value = "";
}

function hitungKelilingJajarGenjang(){
    let nilaiSisiA = document.getElementById('nilaiSisiA').value;
    let nilaiSisiB = document.getElementById('nilaiSisiB').value;

    nilaiSisiA = parseFloat(nilaiSisiA);
    nilaiSisiB = parseFloat(nilaiSisiB);

    let hasilKelilingJajarGenjang = 2 * (nilaiSisiA + nilaiSisiB);

    document.getElementById('hasilKelilingJajarGenjang').value = hasilKelilingJajarGenjang;
}

function resetNilaiKelilingJajarGenjang(){
    let nilaiSisiA = document.getElementById('nilaiSisiA');
    let nilaiSisiB = document.getElementById('nilaiSisiB');
    let hasilKelilingJajarGenjang = document.getElementById('hasilKelilingJajarGenjang');

    nilaiSisiA.value = "";
    nilaiSisiB.value = "";
    hasilKelilingJajarGenjang.value = "";
}
