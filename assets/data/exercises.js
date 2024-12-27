const exercises = [
    {
        id: 1,
        title: "#md01.Hello World!",
        description: "In ra dòng chữ Hello World!",
        testCases: [
            { input: "", expected: "Hello World!"}
        ]
    },
    {
        id: 2,
        title: "#ll01.Tính tổng từ 1 đến n",
        description: "Nhập vào số nguyên n, tính tổng các số từ 1 đến n.",
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
    }
    
];

export default exercises;