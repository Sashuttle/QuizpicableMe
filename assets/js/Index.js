/**
 * Makes a GET request using the axios library to retrieve data from a specified URL.
 * @param {Object} props - The props object.
 * @param {Object} props.object - The object to be randomized.
 * @returns {JSX.Element} - The JSX element representing the randomized object.
 */
async function RandomizeObject(props) {
    // Convert the object into an array of key-value pairs
    const entries = Object.entries(props.object);
    console.log(entries);

    // Randomize the array
    const randomizedEntries = entries.sort(() => Math.random() - 0.5);

    // Convert the array back into an object
    const randomizedObject = Object.fromEntries(randomizedEntries);

    // Render the randomized object
    return (
        <div>
            {Object.entries(randomizedObject).map(([key, value], index) => (
                <div key={index}>
                    <strong>{key}</strong>: {value}
                </div>
            ))}
        </div>
    );
}

export default RandomizeObject;

import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://watchmode.p.rapidapi.com/autocomplete-search/',
    params: {
        search_value: 'Breaking Bad',
        search_type: '1'
    },
    headers: {
        'X-RapidAPI-Key': '43abf24eaamsh1f883c9ade1f96cp1151b5jsnf508ba84085e',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
    // Save the response data to local storage
    localStorage.setItem('responseData', JSON.stringify(response.data));
} catch (error) {
    console.error(error);
}

// Retrieve the data from local storage
const storedData = localStorage.getItem('responseData');
const parsedData = JSON.parse(storedData);

// Use the retrieved data
console.log(parsedData);
