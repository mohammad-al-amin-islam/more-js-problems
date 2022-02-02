let phones = [
    { name: 'poco m2', price: 13600, camera: 13, storage: 64 },
    { name: 'iphone13', price: 136000, camera: 13, storage: 64 },
    { name: 'samsumung s21', price: 100600, camera: 103, storage: 512 },
    { name: 'vivo', price: 19600, camera: 63, storage: 32 },
    { name: 'oppo', price: 20600, camera: 63, storage: 32 },
    { name: 'nokia', price: 15999, camera: 63, storage: 32 }
]
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest
}

const result = cheapestPhone(phones);
console.log('cheapest phone from the given is:',result);