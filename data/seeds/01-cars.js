// STRETCH
const cars = [
    {
        vin:'2134567891019',
        make:'toyota',
        model:'prius',
        mileage:214000,
        title:'clean',
        transmission:'manual',
    },
    {
        vin:'2134567891019',
        make:'toyota',
        model:'corolla',
        mileage:14000,
        title:'salvage',
    },
    {
        vin:'2134567891019',
        make:'ford',
        model:'focus',
        mileage:214000,
    }

]

//this code is meant to seed data into a table call cars in the database.

//exports.seed = function(knex) => this function is typically used for populating datababase with initial data.

//.truncate() => method, ensures start with an empty table beofre inserting new data to avoid duplicates or conflict.

//knex('cars').insert(cars) => inserts data into the cars table.

// exports.seed = function(knex){
//     return knex('cars')
//     .truncate().then(()=>{
//         return knex('cars').insert(cars)
//     })    
// } 

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}


