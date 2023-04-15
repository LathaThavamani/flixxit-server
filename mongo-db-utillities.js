import { MongoClient, ObjectId } from "mongodb";

// export function getConnection() {
//     const connectionStirng = process.env.CONNECTION_STRING;
//     const connection = new MongoClient(connectionStirng)
//     return connection;
// }

export function getAllItems(collectionName, query) {
    const user = collectionName
        .findOne(query)
    return user;
}


export function createItem(collectionName, obj) {
    return collectionName
        .create(obj)
}


// export function deleteSingleItem(collectionName, id) {
//     return getConnection().connect().then(client => {
//         const db = client.db(process.env.DEFAULT_DATABASE)
//         return db.collection(collectionName)
//             .deleteOne({
//                 "_id": new ObjectId(id)
//             })

//     })
// }


// export function getSingleItem(collectionName, id) {
//     return getConnection().connect().then(client => {
//         const db = client.db(process.env.DEFAULT_DATABASE)
//         return db.collection(collectionName)
//             .findOne({
//                 "_id": new ObjectId(id)
//             })

//     })
// }


export function updateObjByFieldSingleItem(collectionName, id, field, newVal) {
    var query = {};
    query[field] = newVal;
    return collectionName
        .updateOne({
            "_id": new ObjectId(id)
        },
            {
                $set: query
            })

}

export function updateObjByFieldMultipleItem(collectionName, id, query) {
    return collectionName
        .updateOne({
            "_id": new ObjectId(id)
        },
            {
                $set: query
            })

}

