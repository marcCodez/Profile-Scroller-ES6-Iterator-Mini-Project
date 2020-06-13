// hardcoded data
const data = [
    {
        name: 'John Smith',
        age: 33,
        gender: 'male',
        lookingfor: 'female',
        location: 'Melbourne AU',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Jane White',
        age: 28,
        gender: 'female',
        lookingfor: 'male',
        location: 'Sydney AU',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Jake Paul',
        age: 33,
        gender: 'male',
        lookingfor: 'female',
        location: 'Adelaide AU',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    }

];

// pass the data in the profileIterator function
const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Create event for next button
document.querySelector('#next').addEventListener('click', nextProfile);

// Next profile Display
function nextProfile() {

    const currentProfile = profiles.next().value;

    // Add a condition if it finishes looping through the array
    if(currentProfile !== undefined){
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}
        </li>
        <li class ="list-group-item">Age: ${currentProfile.age}
        </li>
        <li class ="list-group-item">Location: ${currentProfile.location}
        </li>
        <li class ="list-group-item">Preference: ${currentProfile.gender} 
        looking for ${currentProfile.lookingfor}
        </li>
    </ul>
    `;
    } else {
        // No more profiles
        window.location.reload();
    }

    document.querySelector('#imageDisplay').innerHTML = `<img
    src="${currentProfile.image}">`;
}

// Profile Iterator
function profileIterator(profiles) {
    // counter
let nextIndex = 0;

// return object with next function
return {
    next: function(){
        return nextIndex < profiles.length ?
        {value: profiles[nextIndex++], done: false} :
        {done: true}
    }
};

}