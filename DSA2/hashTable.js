class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        return key % this.size;
    }

    //Chaning the set method to handle collisions using separate chaining

    set(key, value) {
        let index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        this.table[index].push([key, value]);
    }

    get(key) {
        let index = this.hash(key);

        if (!this.table[index]) {
            return undefined;
        }

        for (let pair of this.table[index]) {
            console.log(pair)
            if (pair[0] === key) {
                return pair[1]
            }
        }

        return undefined;
    }

    //Linear probing method to handle collisions
    setLProbing(key, value) {
        let index = this.hash(key);

        while (this.table[index] !== undefined) {
            // 5 + 1 = 6 % 10 =
            index = (index + 1) % this.size; // 6
        }

        this.table[index] = [key, value];
    }

    getLProbing(key) {
        let index = this.hash(key);
        let start = index;
        let i = 1;

        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1]
            }

            index = (index + i * i) % this.size;
            i++;

            if (index === start) {
                break;

            }

            return undefined;
        }
    }

    setQ(key, value) {
        let hash = this.hash(key);
        let index = hash; let i = 1;

        while (this.table[index] !== undefined) {
            index = (hash + i * i) % this.size; i++;
        }

        this.table[index] = [key, value];
    }



    print() {
        console.log(this.table);
    }


}

let hashT = new HashTable(10);
hashT.setQ(25, "This is not posible");
hashT.setQ(5, "posible")
hashT.setQ(2, "This");
console.log(hashT.getLProbing(5))