/* =========================
   DATA
========================= */

let faculty = [];
let subjects = [];
let classrooms = [];
let labs = [];
let sections = [];
let timeSlots = [];

let timetable = [];
let versions = [];


/* =========================
   FACULTY
========================= */

function addFaculty() {

    const name = document.getElementById("facultyName").value.trim();
    const blocked = document.getElementById("facultyBlocked").value.trim();

    if (name === "") {
        alert("Please enter faculty name.");
        return;
    }

    faculty.push({
        name: name,
        blocked: blocked
    });

    document.getElementById("facultyName").value = "";
    document.getElementById("facultyBlocked").value = "";

    displayFaculty();
    updateCounts();
    updateDropdowns();
}


function displayFaculty() {

    const list = document.getElementById("facultyList");

    list.innerHTML = "";

    faculty.forEach(function(item, index) {

        const li = document.createElement("li");

        li.textContent =
            (index + 1) + ". " +
            item.name +
            (item.blocked ? " | Blocked: " + item.blocked : "");

        list.appendChild(li);
    });
}


/* =========================
   SUBJECTS
========================= */

function addSubject() {

    const name =
        document.getElementById("subjectName").value.trim();

    const facultyName =
        document.getElementById("subjectFaculty").value;

    const section =
        document.getElementById("subjectSection").value;

    const type =
        document.getElementById("subjectType").value;

    const hours =
        Number(document.getElementById("subjectHours").value);

    if (name === "" || facultyName === "" || section === "" || hours <= 0) {

        alert("Please enter all subject details.");

        return;
    }

    subjects.push({
        name: name,
        faculty: facultyName,
        section: section,
        type: type,
        hours: hours
    });

    document.getElementById("subjectName").value = "";
    document.getElementById("subjectHours").value = "";

    displaySubjects();
    updateCounts();
}


function displaySubjects() {

    const list = document.getElementById("subjectList");

    list.innerHTML = "";

    subjects.forEach(function(item, index) {

        const li = document.createElement("li");

        li.textContent =
            (index + 1) + ". " +
            item.name +
            " | Faculty: " + item.faculty +
            " | Section: " + item.section +
            " | " + item.type +
            " | " + item.hours + " hrs/week";

        list.appendChild(li);
    });
}


/* =========================
   CLASSROOMS
========================= */

function addClassroom() {

    const name =
        document.getElementById("classroomName").value.trim();

    const capacity =
        Number(document.getElementById("classroomCapacity").value);

    if (name === "" || capacity <= 0) {

        alert("Please enter classroom name and capacity.");

        return;
    }

    classrooms.push({
        name: name,
        capacity: capacity
    });

    document.getElementById("classroomName").value = "";
    document.getElementById("classroomCapacity").value = "";

    displayClassrooms();
    updateCounts();
}


function displayClassrooms() {

    const list = document.getElementById("classroomList");

    list.innerHTML = "";

    classrooms.forEach(function(item, index) {

        const li = document.createElement("li");

        li.textContent =
            (index + 1) + ". " +
            item.name +
            " | Capacity: " +
            item.capacity;

        list.appendChild(li);
    });
}


/* =========================
   LABS
========================= */

function addLab() {

    const name =
        document.getElementById("labName").value.trim();

    const equipment =
        document.getElementById("labEquipment").value.trim();

    if (name === "") {

        alert("Please enter lab name.");

        return;
    }

    labs.push({
        name: name,
        equipment: equipment
    });

    document.getElementById("labName").value = "";
    document.getElementById("labEquipment").value = "";

    displayLabs();
    updateCounts();
}


function displayLabs() {

    const list = document.getElementById("labList");

    list.innerHTML = "";

    labs.forEach(function(item, index) {

        const li = document.createElement("li");

        li.textContent =
            (index + 1) + ". " +
            item.name +
            (item.equipment
                ? " | Equipment: " + item.equipment
                : "");

        list.appendChild(li);
    });
}


/* =========================
   SECTIONS
========================= */

function addSection() {

    const name =
        document.getElementById("sectionName").value.trim();

    const department =
        document.getElementById("departmentName").value.trim();

    if (name === "" || department === "")
