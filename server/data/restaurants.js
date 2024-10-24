// Fill this in
let restaurantData = [
    {
        id: 0,
        name: "Vivace Ristorante",
        phone: "(650) 637-0611",
        address: "1910 Ralston Ave, Belmont, CA 94002",
        photo: "/images/rest-1.jpg"
    },
    {
        id: 1,
        name: "Godfather's Burger Lounge",
        phone: "650-637-9257",
        address: "1500 El Camino Real, Belmont, CA",
        photo: "/images/rest-2.jpg"
    },
    {
        id: 2,
        name: "China Village Restaurant",
        phone: "650-593-1831",
        address: "600 Ralston Ave, Belmont, CA",
        photo: "/images/rest-3.jpg"
    },
    {
        id: 3,
        name: "Hobee's",
        phone: "(+1) 650-596-0400",
        address: "1101 Shoreway Rd, Belmont, CA 94002",
        photo: "/images/rest-4.jpg"
    },
    {
        id: 4,
        name: "Sushi Kuu",
        phone: "650-592-1878",
        address: "1001 Alameda de Las Pulgas, Belmont, CA",
        photo: "/images/rest-5.jpg"
    },
    {
        id: 5,
        name: "Victoria's Kitchen",
        phone: "(650) 594-0000",
        address: "390 El Camino Real ste v, Belmont, CA",
        photo: "/images/rest-6.jpg"
    },
    {
        id: 6,
        name: "Cafe Bliss",
        phone: "(650) 595-1520",
        address: "2039 Ralston Ave, Belmont, CA",
        photo: "/images/rest-7.jpg"
    },
    {
        id: 7,
        name: "Spoon & Fork",
        phone: "(650) 832-1517",
        address: "1480 El Camino Real, Belmont, CA",
        photo: "/images/rest-8.jpg"
    },
    {
        id: 8,
        name: "Blue Sky Café",
        phone: "(650) 595-0228",
        address: "1625 El Camino Real #9, Belmont, CA",
        photo: "/images/rest-9.jpg"
    }

];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    newRestaurant.id = getNextId();
    restaurantData.push(newRestaurant);
    return newRestaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const index = restaurantData.findIndex(restaurant => restaurant.id === id);
    if (index !== -1) {
        const deletedRestaurant = restaurantData.splice(index, 1);
        return deletedRestaurant
    }
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };