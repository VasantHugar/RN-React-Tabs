import Call from 'react-native-phone-call';

export const call = (phoneNumber) => {
    const args = {
        number: phoneNumber, // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
      Call(args).catch(console.error)
};