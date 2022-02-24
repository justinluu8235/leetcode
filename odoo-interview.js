/*
products = {
   'IoT Box': {
       'BOX-06x02x02': 2.0,
       'BOX-20x20x12': 16.0,
       'BOX-16x16x16': 9.0,
       'BOX-08x08x08': 4.0,
   },
   'Scale-Up! The Business Game': {
       'BOX-16x16x16': 7.0,
       'BOX-10x08x08': 3.0,
       'BOX-23x17x12': 14.0,
   },
   'Basic Cash Drawer': {},
   'Shoes': {
       'BOX-06x02x02': 6.0,
   }
}


orders = {
   'S0101': {
       'Scale-Up! The Business Game': 15.0,
       'Basic Cash Drawer': 10.0,
       'IoT Box': 47.0,
       'Shoes': 5.0,
   },
   'S0102': {
       'IoT Box': 2.0,
       'Scale-Up! The Business Game': 10.0,
   },
   'S0103': {
       'Shoes': 50.0,
       'IoT Box': 500.0,
       'Scale-Up! The Business Game': 32.0,
       'Basic Cash Drawer': 10.0,
   },
}



Expected return :

packed_orders = {
    'S0101': {
        'Scale-Up! The Business Game': {
            'packs': [('BOX-23x17x12', 14.0),
                      ('BOX-10x08x08', 1.0)],
            'quantity': 15.0
        },
        'IoT Box': {
            'packs': [('BOX-20x20x12', 16.0),
                      ('BOX-20x20x12', 16.0),
                      ('BOX-16x16x16', 9.0),
                      ('BOX-08x08x08', 4.0),
                      ('BOX-06x02x02', 2.0)],
            'quantity': 47.0
        },
        'Basic Cash Drawer': {
            'packs': [],
            'quantity': 10.0
        },
        'Shoes': {
            'packs': [('BOX-06x02x02', 5.0)], 
            'quantity': 5.0
        }
    },
    'S0102': {...},
    'S0103': {...},
}

*/


let createOrder = (products, orders) => {

    for(let orderNum in orders){
        let order = orders[orderNum]
        for(let product in order){
            let obj = {
                'packs':  createPack(products,order[product], product ),

                'quantity': order[product]
            }
            order[product] = obj;
            

        }
    }

   
    return orders;
}



/*
products = {
   'IoT Box': {
       'BOX-06x02x02': 2.0,
       'BOX-20x20x12': 16.0,
       'BOX-16x16x16': 9.0,
       'BOX-08x08x08': 4.0,
   },
   'Scale-Up! The Business Game': {
       'BOX-16x16x16': 7.0,
       'BOX-10x08x08': 3.0,
       'BOX-23x17x12': 14.0,
   },
   'Basic Cash Drawer': {},
   'Shoes': {
       'BOX-06x02x02': 6.0,
   }
}



orderNeeded 'Scale-Up! The Business Game': 15.0,
*/
let createPack = (products, quantityNeeded, productNeeded ) => {

    let packs = [];
    let inventoryObj = products[productNeeded];

    let availableQuants = [];
    let map = new Map();
    for(let inventoryItem in inventoryObj){
        let quantity = inventoryObj[inventoryItem];
        availableQuants.push(quantity);
        map.set(quantity,inventoryItem)

    }
    availableQuants.sort((a,b) => {
        return a-b;
    })
    console.log(availableQuants);
  
    let currentQuantity = 0;
    let largestQuant = availableQuants[availableQuants.length - 1]
    let lastAdded = false;
    
    // find biggest inventory and add until adding one more overloads it
    while(currentQuantity + largestQuant <= quantityNeeded){
        currentQuantity += largestQuant
        let pack = [map.get(largestQuant) , largestQuant];
        
      
        packs.push(pack);
    }

    //go from smallest to biggest - if adding that number gets you over threshold, then add 
    for(let i =0; i< availableQuants.length; i++){
        if(currentQuantity + availableQuants[i] >= quantityNeeded){
            let pack = [map.get(availableQuants[i]) , availableQuants[i]];
             packs.push(pack);
             lastAdded = true;
             break;
        }
    }
    //if it doesn't then just add another max one 
    if(!lastAdded){
        currentQuantity += largestQuant
        let pack = [map.get(largestQuant) , largestQuant];
       
        packs.push(pack);
    }
    return packs;

}
// let quantityNeeded = 15.0
// let productNeeded = 'Scale-Up! The Business Game';
// let testProduct = {
//     'IoT Box': {
//         'BOX-06x02x02': 2.0,
//         'BOX-20x20x12': 16.0,
//         'BOX-16x16x16': 9.0,
//         'BOX-08x08x08': 4.0,
//     },
//     'Scale-Up! The Business Game': {
//         'BOX-16x16x16': 7.0,
//         'BOX-10x08x08': 3.0,
//         'BOX-23x17x12': 14.0,
//     },
//     'Basic Cash Drawer': {},
//     'Shoes': {
//         'BOX-06x02x02': 6.0,
//     }
//  }


//  createPack(testProduct,quantityNeeded, productNeeded )












let = products = {
    'IoT Box': {
        'BOX-06x02x02': 2.0,
        'BOX-20x20x12': 16.0,
        'BOX-16x16x16': 9.0,
        'BOX-08x08x08': 4.0,
    },
    'Scale-Up! The Business Game': {
        'BOX-16x16x16': 7.0,
        'BOX-10x08x08': 3.0,
        'BOX-23x17x12': 14.0,
    },
    'Basic Cash Drawer': {},
    'Shoes': {
        'BOX-06x02x02': 6.0,
    }
 }

 let orders = {
    'S0101': {
        'Scale-Up! The Business Game': 15.0,
        'Basic Cash Drawer': 10.0,
        'IoT Box': 47.0,
        'Shoes': 5.0,
    },
    'S0102': {
        'IoT Box': 2.0,
        'Scale-Up! The Business Game': 10.0,
    },
    'S0103': {
        'Shoes': 50.0,
        'IoT Box': 500.0,
        'Scale-Up! The Business Game': 32.0,
        'Basic Cash Drawer': 10.0,
    },
 }

let packed_orders = createOrder(products, orders);

console.log(packed_orders['S0101']['Basic Cash Drawer'])