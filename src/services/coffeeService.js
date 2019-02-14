export default class CoffeeService {

    getResource = async () => {
        const res = await fetch('http://localhost:3000/db.json'),
              resjson = await res.json();
        return resjson;
    }
    getAllBest = async () => {
        const res = await this.getResource();
        return res.bestsellers;
    }

    getAllCoffee = async () => {
        const res = await this.getResource();
        return await res.coffee;
    }

    getAllGoods = async () => {
        const res = await this.getResource();
        return await res.goods;
    }

    getCoffeeByName = async (id) => {
        const coffees = await this.getAllCoffee();
        return coffees.find(item => item.name === id )
    }
}

