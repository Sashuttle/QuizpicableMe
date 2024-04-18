
/*import axios from 'axios';

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

async function RandomizeObject(props) {
    const { object } = props;

    // Convert the object into an array of key-value pairs
    const entries = Object.entries(object);

    // Randomize the array
    const randomizedEntries = entries.sort(() => Math.random() - 0.5);
    console.log(randomizedEntries);
    console.log(randomizedObject);

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

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}

// Save the response data to local storage
localStorage.setItem('responseData', JSON.stringify(response.data));

// Retrieve the data from local storage
const storedData = localStorage.getItem('responseData');
const parsedData = JSON.parse(storedData);

// Use the retrieved data
console.log(parsedData);

// API call from platform page
const platformResponse = JSON.parse(localStorage.getItem('APIResponse'));
console.log(platformResponse);
*/
