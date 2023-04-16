import { MongoClient, ObjectId } from "mongodb";

export function getAllItems(collectionName, query) {
    const user = collectionName
        .findOne(query)
    return user;
}

// Insert user
export function createItem(collectionName, obj) {
    return collectionName
        .create(obj)
}

// Update single field
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

// Update multiple field
export function updateObjByFieldMultipleItem(collectionName, id, query) {
    return collectionName
        .updateOne({
            "_id": new ObjectId(id)
        },
            {
                $set: query
            })

}

