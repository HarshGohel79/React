let students = [
    { id: "1", name: "Rahul", email: "rahul@gmail.com" },
    { id: "2", name: "Sohil", email: "sohil@gmail.com" },
    { id: "3", name: "Jay", email: "jay@gmail.com" },
];

function getAll() {
    localStorage.setItem("object", JSON.stringify(students));
    let objData = localStorage.getItem("object");
    // console.log(abc)
    let objArr = JSON.parse(objData);
    // console.log(objArr)

    let html = `
    <thead class="thead">
        <tr class="bg-dark text-light">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>`;

    objArr.map((student) => {
        html =
            html +
            `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>
                        <button onclick="edit(${student.id})" class="btn btn-warning">Edit</button>
                        <button onclick="delete1(${student.id})" class="btn btn-danger">Delete</button>
                    </td>
                </tr>`;
    });

    document.querySelector(".tableData").innerHTML = html + "</tbody>";
}
getAll();
index = 4;
function add() {
    let name1 = document.getElementById("sname").value;
    let email = document.getElementById("semail").value;

    obj = { id: index++, name: name1, email: email };
    // console.log(students);

    if (name1 == "" || email == "") {
        alert("Student's name and email both are required..!")
    }
    else {
        alert("New student added successfully..!");
        students.push(obj);
    }
    getAll();
}

function delete1(id) {
    // students = students.filter(student=>student.id !== id)
    students = students.filter((student) => student.id != id);
    console.log(students)
    getAll();
}

function edit(id) {
    document.getElementById("add-form").style.display = "none";
    document.getElementById("update-form").style.display = "block";
    // alert(id)

    document.getElementById("eid").value = id;

    // console.log(students)

    let student = students.find((student) => student.id == id);

    // console.log(student.name); 
    // console.log(document.getElementById("sname"));

    document.getElementById("uname").value = student.name;
    document.getElementById("uemail").value = student.email;

}

function update() {
    let nm = document.getElementById("uname").value;
    let em = document.getElementById("uemail").value;
    let id = document.getElementById("eid").value;

    let student = students.find((student) => student.id == id);

    // console.log(student.email)

    if (nm == student.name && em == student.email) {
      alert("No changes found...!");
    } else {
        alert("Details updated successfully..!");
      student.name = nm;
      student.email = em;
      getAll();
    }
}

function addStudent() {
    document.getElementById("add-form").style.display = "block";
    document.getElementById("update-form").style.display = "none";
}
