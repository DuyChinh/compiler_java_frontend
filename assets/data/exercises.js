const exercises = [
    {
        id: 1,
        title: "#md01.Hello World!",
        description: "In ra dòng chữ Hello World!",
        exe_input: "Không có đầu vào.",
        exe_output: "Ghi ra Hello World!",
        testCases: [
            { input: "", expected: "Hello World!"}
        ]
    },
    {
        id: 2,
        title: "#ll01.Tính tổng từ 1 đến n",
        description: "Nhập vào số nguyên n, tính tổng các số từ 1 đến n.",
        exe_input: "Số nguyên n",
        exe_output: "Ghi ra tổng",
        testCases: [
            { input: "5", expected: "15" },   // Tổng từ 1 đến 5
            { input: "0", expected: "0" },    // Trường hợp n = 0
            { input: "1", expected: "1" },    // Trường hợp n = 1
            { input: "3", expected: "6" },    // Tổng từ 1 đến 3
            { input: "50", expected: "1275" }, // Tổng từ 1 đến 50
            { input: "100", expected: "5050" }, // Tổng từ 1 đến 100
            { input: "20", expected: "210" },  // Tổng từ 1 đến 20
            { input: "7", expected: "28" },   // Tổng từ 1 đến 7
            { input: "8", expected: "36" },   // Tổng từ 1 đến 8
        ]
    },    
    {
        id: 3,
        title: "#ll02.Tính tổng các chữ số của n",
        description: "Nhập vào số nguyên n, tính tổng các chữ số của n.",
        exe_input: "Số nguyên n",
        exe_output: "Ghi tổng các chữ số của n",
        testCases: [
            { input: "123", expected: "6" },    // 1 + 2 + 3
            { input: "456", expected: "15" },   // 4 + 5 + 6
            { input: "789", expected: "24" },   // 7 + 8 + 9
            { input: "0", expected: "0" },      // Trường hợp n = 0
            { input: "999", expected: "27" },   // 9 + 9 + 9
            { input: "100", expected: "1" },    // 1 + 0 + 0
            { input: "555", expected: "15" },   // 5 + 5 + 5
            { input: "101", expected: "2" },    // 1 + 0 + 1
            { input: "1234", expected: "10" },  // 1 + 2 + 3 + 4
        
        ]
    }, 
    {
        id: 4,
        title: "#ll03. Tìm USCLN và BSCNN của hai số nguyên dương",
        description: "Nhập hai số nguyên dương a, b. Tính ước số chung lớn nhất (USCLN) và bội số chung nhỏ nhất (BSCNN).",
        exe_input: " Dòng đầu ghi số bộ test. Mỗi bộ test ghi trên một dòng 2 số nguyên a và b không quá 9 chữ số.",
        exe_output: "Ghi trên 1 dòng, lần lượt là USCLN, sau đó đến BSCNN, cách nhau bằng khoảng trống",
        testCases: [
            { input: "12 18", expected: "6 36" },   // USCLN: 6, BSCNN: 36
            { input: "15 20", expected: "5 60" },   // USCLN: 5, BSCNN: 60
            { input: "7 3", expected: "1 21" },     // USCLN: 1, BSCNN: 21
            { input: "10 25", expected: "5 50" },   // USCLN: 5, BSCNN: 50
            { input: "100 80", expected: "20 400" },
            { input: "12 34", expected: "2 204" },
            { input: "1234 5678", expected: "2 3503326" }
        ]
    }
];

export default exercises;