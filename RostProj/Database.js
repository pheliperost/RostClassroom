import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveItem(listItem){
    listItem.id = new Date().getTime();
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');
    
    if(response) savedItems = JSON.parse(response);
    savedItems.push(listItem);
    
    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}


module.exports = {
    saveItem
}

