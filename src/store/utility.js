//this is a utility function, which takes oldObject javascript object
// and return updated object.
export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues  // will be a javascript object
    }
};