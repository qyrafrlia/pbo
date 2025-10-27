class bonus{
    gaji(persen){
        console.log();
    }
}
class karyawanTetap extends bonus{
    gaji(persen, nama){
        this.gajiAwal = 8000000;
        this.bonus =this.gajiAwal * persen / 100;
        console.log(`Gaji ${nama} Sebesar : ${this.gajiAwal + this.bonus}`);
    }
}
class karyawanKontrak extends bonus{
    gaji(persen, nama){
        this.gajiAwal = 6000000;
        this.bonus =this.gajiAwal * persen / 100;
        console.log(`Gaji ${nama} Sebesar : ${this.gajiAwal + this.bonus}`);
    }
}

const tetap = new karyawanTetap();
tetap.gaji(10, "Budi");

const kontrak = new karyawanKontrak ();
kontrak.gaji(5, "Sita");