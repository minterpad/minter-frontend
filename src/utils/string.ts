export const hexToBytes = (str: string): string[] => {
    var hexArray = [];
    for (var i = 0; i < str.length; i++) {
        var hexValue = str.charCodeAt(i).toString(16);
        hexArray.push(hexValue);
    }
    return hexArray;
};

export const stringToHex = (str: string): string => {
    let hexString = '';

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        const hex = charCode.toString(16);
        hexString += hex.padStart(2, '0');
    }

    return hexString;
};
