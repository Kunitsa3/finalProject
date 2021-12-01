const COLLECTIONS_ARRAY_KEY = 'COLLECTIONS_ARRAY_KEY';

export const getCollectionsArray = () => JSON.parse(localStorage.getItem(COLLECTIONS_ARRAY_KEY)) || [];
const setCollectionsArray = collection => localStorage.setItem(COLLECTIONS_ARRAY_KEY, JSON.stringify(collection));
const setCollectionItem = collectionItem => setCollectionsArray(getCollectionsArray().concat(collectionItem));
export const editCollectionItem = collectionItem =>
  setCollectionsArray(
    getCollectionsArray()
      .filter(element => element.id !== collectionItem.id)
      .concat(collectionItem),
  );
export const deleteCollectionItem = collectionId =>
  setCollectionsArray(getCollectionsArray().filter(element => element.id !== collectionId));
export const deleteBookItem = (bookId, collectionId) => {
  const collectionInformation = getCollectionsArray().find(element => element.id === collectionId);
  const newCollectionItems = collectionInformation.item.filter(element => element.id !== bookId);
  const newCollectionInformation = { ...collectionInformation, item: newCollectionItems };
  setCollectionsArray(
    getCollectionsArray()
      .filter(element => element.id !== collectionId)
      .concat(newCollectionInformation),
  );
};
export const editBookItem = (bookItem, collectionId) => {
  const collectionInformation = getCollectionsArray().find(element => element.id === collectionId);
  console.log(collectionInformation);
  const newCollectionItems = collectionInformation.item.filter(element => element.id !== bookItem.id).concat(bookItem);
  console.log(newCollectionItems);
  const newCollectionInformation = { ...collectionInformation, item: newCollectionItems };
  console.log(newCollectionInformation);
  console.log(
    getCollectionsArray()
      .filter(element => element.id !== collectionId)
      .concat(newCollectionInformation),
  );
  console.log(getCollectionsArray());
  setCollectionsArray(
    getCollectionsArray()
      .filter(element => element.id !== collectionId)
      .concat(newCollectionInformation),
  );
};

export default setCollectionItem;
