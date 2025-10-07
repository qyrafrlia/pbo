class Karyawan{
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    instanceOf() {
        return `${this.nama} bekerja sebagai ${this.jabatan} dengan gaji ${this.gaji}`;
    }
}

let karyawan = new Karyawan("Raihan", "CEO", "120000000");

console.log(karyawan.instanceOf());