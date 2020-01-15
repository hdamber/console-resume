//my name
let myName = "Hallie Damber"
console.log("Name: " + myName.toUpperCase());


//my career
let career = "Student"
console.log("Career: " + career);


//my description
let summary = "Current software development student aspiring to grow and exceed in coding. "
console.log("Description: " + summary);

console.log(' ');

// my interests
let interests = ["video games", "singing", "reading", "traveling"]
console.log("My Interests: ");
for (i = 0; i < interests.length; i++){
console.log('* ' + interests[i])
}
console.log(' ');

// past work experience 
let pos1 = { position: "Style Consultant", company: "Target", description: "I created a guest first experience by awknowledging guests needs efficiently. Follow and make department sales goals on a monthly, quarterly, and annual basis. Responsible for invetory, pricing, merchandising, and displays." }
let pos2 = { position: "Accessories Specialist", company: "Forever 21", description: "Effectively executed visual merchandising and marketing initiatives. Interfaced with customers to determine purchasing needs, directed them to appropriate items, and recommended additional products to upsale and meet sales goals." }
let pos3 = { position: "Team Member", company: "Stevi B's Pizza Buffet", description: "Interacted with customers on a dailt basis with excellent communication skills. Prepared quality food and took orders efficiently." }
let pos4 = { position: "Secretary", company: "ACI", description: "Handled highly-sensitive data on a regular basis. Utilized a variety of data entry and word processing programs. Prepared sales and policy contracts." }

function displayPosition(compName, position, jobDescription) {
    console.log('* Worked at ' + compName + ', my position was ' + position + '. ' + jobDescription)
}

displayPosition(pos1.company, pos1.position, pos1.description);
displayPosition(pos2.company, pos2.position, pos2.description);
displayPosition(pos3.company, pos3.position, pos3.description);
displayPosition(pos4.company, pos4.position, pos4.description);

console.log(' ');


// my skills
function displaySkills(skillName, skill) {
    if (skill == true) {
        console.log('* BAM: ' + skillName)
    }
    else if (skill ==false) {
        console.log('* ' + skillName)
    }
}
displaySkills('Sleeping', true);
displaySkills('Breathing', true);
displaySkills('Singing', false);
displaySkills('Reading', false);