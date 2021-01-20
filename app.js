let firstName = "Justin" ;
let midI = "J"
let lastName = "Kelley"
let fullN = firstName + " " + midI + " " + lastName;
let nameCaps = fullN.toUpperCase();

myPersonal(nameCaps, "(Aspiring) Full Stack Developer / Previously a retail worker", "Ima cool dude i'd say so myself");

function myPersonal(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}
// Interests
console.log("My Interests: ");
myInterests("Sports & Outdoors"); 
myInterests("Diy Projects"); 
myInterests("Money"); 
myInterests("Video Games"); 
myInterests("Taking care of my dogs"); 

function myInterests (myInterests){
    console.log("* " + myInterests)
}

// Work Experience
console.log("My Previous Work Experience: ");
displayPosition("Home Depot Warehouse", "Assoc.","Loaded inventory to local stores.");
displayPosition("Alabaster Car Wash","Asst. Manager","Ensured wash efficiency and managed a team of employees.");
displayPosition("Marc1 Car Wash","Supervisor","Customer Service.");

function displayPosition(PrevJobs,Position,Role){
    console.log("* " + PrevJobs + ":  " + Position + "- " + Role)
}

// Skillz
console.log("My Skills: ")
displaySkillz("Music Production",true);
displaySkillz("HTML",true);
displaySkillz("Baseball",true);
displaySkillz("Singing",false);
displaySkillz("Cooking",true);
displaySkillz("Tap-Dancing",false);

function displaySkillz(Myskillz,bam2x){
    if (bam2x == true) {
        console.log ("* BAM: " + Myskillz);
    } else if (bam2x == false){
        console.log("* " + Myskillz)
    }
}