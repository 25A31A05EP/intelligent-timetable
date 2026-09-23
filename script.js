const subjects = [
    {
        day: "Monday",
        time: "9:00 - 10:00",
        subject: "Java",
        faculty: "Ravi",
        room: "C101"
    },
    {
        day: "Monday",
        time: "10:00 - 11:00",
        subject: "DBMS",
        faculty: "Priya",
        room: "C102"
    },
    {
        day: "Monday",
        time: "11:00 - 12:00",
        subject: "Python",
        faculty: "Kiran",
        room: "C103"
    },
    {
        day: "Tuesday",
        time: "9:00 - 10:00",
        subject: "Computer Networks",
        faculty: "Anitha",
        room: "C101"
    },
    {
        day: "Tuesday",
        time: "10:00 - 11:00",
        subject: "Operating Systems",
        faculty: "Rahul",
        room: "C102"
    },
    {
        day: "Tuesday",
        time: "11:00 - 12:00",
        subject: "Mathematics",
        faculty: "Priya",
        room: "C103"
    }
];


function generateTimetable() {

    const table = document.getElementById("timetableBody");

    table.innerHTML = "";

    subjects.forEach((item, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.day}</td>
            <td>${item.time}</td>
            <td>${item.subject}</td>
            <td>${item.faculty}</td>
            <td>${item.room}</td>
        `;

        table.appendChild(row);
    });

    document.getElementById("message").innerText =
        "✅ Timetable generated successfully!";
}


function checkClashes() {

    let clashes = 0;

    const rows = document.querySelectorAll("#timetableBody tr");

    rows.forEach(row => {
        row.classList.remove("clash");
    });

    for (let i = 0; i < subjects.length; i++) {

        for (let j = i + 1; j < subjects.length; j++) {

            const first = subjects[i];
            const second = subjects[j];

            if (
                first.day === second.day &&
                first.time === second.time
            ) {

                if (
                    first.faculty === second.faculty ||
                    first.room === second.room
                ) {

                    clashes++;

                    rows[i].classList.add("clash");
                    rows[j].classList.add("clash");
                }
            }
        }
    }

    document.getElementById("clashCount").innerText = clashes;

    if (clashes === 0) {

        document.getElementById("message").innerText =
            "✅ No clashes detected! Timetable is clash-free.";

    } else {

        document.getElementById("message").innerText =
            "⚠️ " + clashes + " clash(es) detected!";
    }
}


function clearTimetable() {

    document.getElementById("timetableBody").innerHTML = "";

    document.getElementById("clashCount").innerText = "0";

    document.getElementById("message").innerText =
        "Timetable cleared.";
      }
let faculty = [];

function addFaculty() {

    const input = document.getElementById("facultyName");

    const name = input.value.trim();

    if (name === "") {
        alert("Please enter faculty name.");
        return;
    }

    faculty.push(name);

    displayFaculty();

    input.value = "";
}


function displayFaculty() {

    const list = document.getElementById("facultyList");

    list.innerHTML = "";

    faculty.forEach((name, index) => {

        const li = document.createElement("li");

        li.innerHTML = (index + 1) + ". " + name;

        list.appendChild(li);

    });
}
