
// Create a new date instance dynamically with JS
// let d = new Date();

// let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


/* Global Variables */
const apiKey = "7754dfc7c9ccb8267af96e79ff58857e";
const URL = "https://api.openweathermap.org/data/2.5/weather?appid=7754dfc7c9ccb8267af96e79ff58857e&units=imperial&zip="
const zipCode = document.querySelector('#zip');
const btn = document.querySelector('#generate');
const comment = document.querySelector('#feelings');
const dateVar = document.querySelector('#date');
const tempVar = document.querySelector('#temp');
const contentVar = document.querySelector('#content');




const postData = async (url = '', data = {}) => {
    console.log("Req Data", data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log("Res Data", newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}



async function weatherRequest() {
    const currZip = zipCode.value
    const commentNow = comment.value
    const reqURL = URL + "" + currZip
    const res = await fetch(reqURL)
    const data = await res.json();

    if (data.cod != 200) {
        alert(data.message);
        return false;
    }
    //Data returned from API Call is valid
    const tempNow = data.main.temp;
    const d = new Date();;
    const newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

    console.log(data)
    const postRes = await postData("postdata", { temp: tempNow, date: newDate, comment: commentNow });

    const updateRes = updateUI();
}

async function updateUI() {
    const res = await fetch("/getdata")
    const data = await res.json();
    console.log("UpdateUI", data)
    dateVar.innerText = data.date;
    tempVar.innerText = data.temp;
    contentVar.innerText = data.comment;

}



//Add Listener to the Generate button
btn.addEventListener("click", weatherRequest)
