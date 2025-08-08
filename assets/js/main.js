import exercises from "../data/exercises.js";

// Giao diện bài tập
const exerciseSelect = document.getElementById("exerciseSelect");
const exerciseDescription = document.getElementById("exerciseDescription");
const exeInput = document.getElementById("exeInput");
const exeOutput = document.getElementById("exeOutput");
const testCaseContainer = document.getElementById("testCases");
const searchExercise = document.getElementById("searchExercise");
const loaders = document.querySelectorAll(".loader");
const loader_status = document.querySelector(".loader_status");
const language = document.getElementById("language");
const res_status_succ = document.querySelector(".res_status_success");
const res_status_err =  document.querySelector(".res_status_error");
const url = "https://compiler-java-39wz.onrender.com";

// Dữ liệu ví dụ về bài tập
const filterByType = document.getElementById("filterByType");

filterByType?.addEventListener("change", () => {
    const selectedType = filterByType.value;
    renderExerciseTable(selectedType);
});


// Hàm hiển thị dữ liệu bài tập vào bảng
function renderExerciseTable(filterType = "all") {
    const exerciseTable = document.getElementById("exerciseTable");
    exerciseTable.innerHTML = "";
    const filteredExercises = filterType === "all"
        ? exercises
        : exercises.filter((exercise) => exercise.type.toLowerCase() === filterType.toLowerCase());
    
    filteredExercises.forEach((exercise) => {
        const row = document.createElement("tr");
        row.classList.add("table-info"); 

        // Cột Tên Bài Tập
        const nameCell = document.createElement("td");
        nameCell.textContent = exercise?.title;

        // Cột Loại
        const typeCell = document.createElement("td");
        typeCell.textContent = exercise?.type;
        typeCell.classList.add("text-center");

        // Cột Độ Khó
        const difficultyCell = document.createElement("td");
        const badge = document.createElement("span");
        badge.textContent = exercise?.difficulty;

        // Thêm màu sắc cho badge dựa trên độ khó
        if (exercise?.difficulty.toLowerCase() === "easy") {
            badge.classList.add("badge", "bg-success"); // Xanh lá
        } else if (exercise?.difficulty.toLowerCase() === "medium") {
            badge.classList.add("badge", "bg-warning"); // Vàng
        } else if (exercise?.difficulty.toLowerCase() === "advanced") {
            badge.classList.add("badge", "bg-danger"); // Đỏ
        }

        difficultyCell.appendChild(badge);
        difficultyCell.classList.add("text-center");

        // Thêm các cột vào dòng
        row.appendChild(nameCell);
        row.appendChild(typeCell);
        row.appendChild(difficultyCell);

        // Thêm dòng vào bảng
        exerciseTable.appendChild(row);
    });
    handleChooseExe();
}

const handleChooseExe = () => {
    const tableInfo = document.getElementsByClassName("table-info");
    const filteredExercises = Array.from(tableInfo).map((row, index) => ({
        element: row,
        exercise: exercises[index],
    }));

    filteredExercises.forEach(({ element, exercise }) => {
        element.addEventListener("click", () => {
            exerciseSelect.value = exercise.id;
            exerciseSelect.dispatchEvent(new Event("change"));
            window.location.href = "index.html";
        });
    });
};


// Gọi hàm để hiển thị bảng
if(filterByType) {
    renderExerciseTable();
}


let selectedExercise = null;

exercises.forEach((exercise) => {
    const option = document.createElement("option");
    option.value = exercise.id;
    option.textContent = exercise.title;
    exerciseSelect.appendChild(option);
});

function renderExerciseList(filteredExercises) {
    exerciseSelect.innerHTML = ""; 
    filteredExercises.forEach((exercise) => {
        const option = document.createElement("option");
        option.value = exercise.id;
        option.textContent = exercise.title;
        exerciseSelect.appendChild(option);
    });

    // Mặc định chọn bài tập đầu tiên (nếu có)
    if (filteredExercises.length > 0) {
        exerciseSelect.value = filteredExercises[0].id;
        exerciseSelect.dispatchEvent(new Event("change"));
    } else {
        exerciseDescription.textContent = "Không tìm thấy bài tập nào.";
        testCaseContainer.innerHTML = "";
    }
}

function removeVietnameseTones(str) {
    return str
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/đ/g, "d") 
        .replace(/Đ/g, "D") 
        .toLowerCase(); 
}

searchExercise.addEventListener("input", () => {
    const query = removeVietnameseTones(searchExercise.value); // Xóa dấu khỏi từ khóa tìm kiếm
    const filteredExercises = exercises.filter((exercise) =>
        removeVietnameseTones(exercise.title).includes(query) // Xóa dấu khỏi tiêu đề bài tập trước khi so sánh
    );
    renderExerciseList(filteredExercises);
});

// Khởi tạo danh sách bài tập
renderExerciseList(exercises);

const createTable = (selectedExercise) => {
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = ""; // Xóa toàn bộ nội dung cũ

    // Tạo bảng mới
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Thêm tiêu đề bảng
    thead.innerHTML = `
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
    `;

    const testCases = selectedExercise.testCases.slice(0, 2);
    // testCases.forEach(testCase => {
    //     const row = document.createElement("tr");
    //     row.innerHTML = `
    //         <td>${testCase.input}</td>
    //         <td>${testCase.expected}</td>
    //     `;
    //     tbody.appendChild(row);
    // });

    testCases.forEach(testCase => {
        const row = document.createElement("tr");
    
        // Xử lý chuỗi input và expected để thay thế '\n' bằng thẻ HTML <br>
        const formattedInput = testCase.input.replace(/\n/g, "<br>");
        const formattedExpected = testCase.expected.replace(/\n/g, "<br>");
    
        row.innerHTML = `
            <td>${formattedInput}</td>
            <td>${formattedExpected}</td>
        `;
        tbody.appendChild(row);
    });
    

    // Kết hợp các phần của bảng
    table.appendChild(thead);
    table.appendChild(tbody);

    tableContainer.appendChild(table);
}

// Xử lý khi chọn bài tập
exerciseSelect.addEventListener("change", () => {
    const exerciseId = parseInt(exerciseSelect.value);
    selectedExercise = exercises.find((ex) => ex.id === exerciseId);

    if (selectedExercise) {
        exerciseDescription.textContent = "Đề bài: " + selectedExercise.description;
        exeInput.textContent = "Đầu vào: " + selectedExercise?.exe_input;
        exeOutput.textContent = "Kết quả: " + selectedExercise?.exe_output;
        createTable(selectedExercise);
        

        // Hiển thị test case
        // testCaseContainer.innerHTML = "";
        // selectedExercise.testCases.forEach((testCase, index) => {
        //     const div = document.createElement("div");
        //     div.classList.add("test-case");
        //     div.id = `test-case-${index}`;
        //     div.textContent = `Input: ${testCase.input}, Expected: ${testCase.expected}`;
        //     testCaseContainer.appendChild(div);
        // });
    }
});

const addTest = async()=> {
    testCaseContainer.innerHTML = "";
    selectedExercise.testCases.forEach((testCase, index) => {
        const div = document.createElement("div");
        div.classList.add("test-case");
        div.id = `test-case-${index}`;
        // div.textContent = `Input: ${testCase.input}, Expected: ${testCase.expected}`;
        div.textContent = `Test case ${index + 1}`;
        testCaseContainer.appendChild(div);
    });
}

// Mặc định chọn bài tập đầu tiên
exerciseSelect.value = exercises[0].id;
exerciseSelect.dispatchEvent(new Event("change"));

// submit file
document.getElementById("fileUpload").addEventListener("change", (event) => {
    const file = event.target.files[0]; // Lấy file người dùng tải lên
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result; // Nội dung file
            document.getElementById("javaCode").value = content; // Hiển thị vào textarea
        };
        reader.readAsText(file); // Đọc file dưới dạng text
    }
});

//compiler
document.getElementById("runCode2").addEventListener("click", async function (e) {
    e.preventDefault();
    loaders[0].classList.remove("hidden");
    const code = document.getElementById("javaCode").value; 
    const input = document.getElementById("javaInput").value; 
    const output = document.getElementById("output"); 
    // const url = "https://compilerjava-production.up.railway.app";
    // const url = "http://localhost:3001";

    try {
        const response = await fetch(`${url}/compile-${language.value}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code, input }),
        });

        const data = await response.json();
        if (data.error) {
            output.value = `Error: ${data.error}`;
        } else {
            output.value = data.output;
        }
    } catch (err) {
        output.textContent = "An error occurred: " + err.message;
    }
    loaders[0].classList.add("hidden");
});

// Bảng kết quả
const resultTable = document.getElementById("resultTable");

// Hàm cập nhật bảng kết quả
function updateResultTable(num_test) {
    const row = document.createElement("tr");
    if (num_test === selectedExercise.testCases.length) {
        row.classList.add("table-success"); 
    } else {
        row.classList.add("table-danger"); 
    }

    // Cột Thời Gian Nộp
    const timeCell = document.createElement("td");
    const currentTime = new Date();
    timeCell.textContent = currentTime.toLocaleString(); 
    timeCell.classList.add("text-center");

    // Cột Tên Bài Tập
    const nameCell = document.createElement("td");
    nameCell.textContent = selectedExercise.title;

    // Cột Test Cases (Đúng/All)
    const testCaseCell = document.createElement("td");
    testCaseCell.innerHTML = `<span class="badge bg-primary" style="font-size: 16px">${num_test}/${selectedExercise.testCases.length}</span>`;
    testCaseCell.classList.add("text-center");

    const languageCell = document.createElement("td");
    languageCell.textContent = language.value;
    languageCell.classList.add("text-center");
    languageCell.classList.add("text-uppercase");




    // Cột Trạng Thái
    const statusCell = document.createElement("td");
    statusCell.textContent = num_test === selectedExercise.testCases.length ? "AC" : "WA";
    statusCell.classList.add(num_test === selectedExercise.testCases.length ? "text-success" : "text-danger");
    statusCell.classList.add("text-center");
    // Thêm các cột vào dòng
    row.appendChild(nameCell);
    row.appendChild(timeCell);
    row.appendChild(testCaseCell);
    row.appendChild(languageCell);
    row.appendChild(statusCell);

    // Thêm dòng vào bảng
    resultTable.appendChild(row);
}

// Gọi hàm updateResultTable khi các test cases được kiểm tra xong
document.getElementById("runCode").addEventListener("click", async function (e) {
    e.preventDefault();
    res_status_succ.classList.add("hidden");
    res_status_err.classList.add("hidden");
    loaders[1].classList.remove("hidden");
    loader_status.textContent = "running " + selectedExercise.title;
    loader_status.classList.remove("hidden");
    const fileInput = document.getElementById("fileUpload");
    let code = document.getElementById("javaCode").value; 

    if (!selectedExercise) {
        alert("Vui lòng chọn bài tập!");
        return;
    }
    // const url = "http://localhost:3001";

    let cnt = 0;
    const runPromises = selectedExercise.testCases.map(async (testCase, index) => {
        await addTest();
        const response = await fetch(`${url}/test`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code,
                input: testCase.input,
                language: language.value,
            }),
        });
        if(response.ok) {
            const result = await response.json();
            const testCaseDiv = document.getElementById(`test-case-${index}`);

            if (result?.output?.trim() === testCase.expected) {
                cnt += 1;
                testCaseDiv.classList.add("passed");
                testCaseDiv.classList.remove("failed");
            } else {
                testCaseDiv.classList.add("failed");
                testCaseDiv.classList.remove("passed");
            }
        };
    });
    await Promise.all(runPromises); 
    if(cnt == selectedExercise.testCases.length) {
        res_status_succ.classList.remove("hidden");
    } else {
        res_status_err.classList.remove("hidden");
    }
    loaders[1].classList.add("hidden");
    loader_status.classList.add("hidden");

    // Cập nhật bảng kết quả sau khi chạy xong
    updateResultTable(cnt);
});

