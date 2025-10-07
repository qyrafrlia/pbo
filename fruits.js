class FruitBasket {
    constructor() {
        this.fruits = [];
    }

    addItem(item) {
        this.fruits.push(item);
        console.log(`Kamu baru saja menambahkan ${item}`);
    }

    getInformation() {
        console.log(`List buah di keranjang : ${this.fruits}`);
    }

    removeItem(item) {
        this.fruits.pop(item);
        console.log(`Kamu baru saja menghapus ${item}`);
    }
}

const fruits = new FruitBasket();
fruits.addItem("Lemon");
fruits.addItem("Kelapa");
fruits.getInformation();
fruits.removeItem("Lemon");
fruits.getInformation();