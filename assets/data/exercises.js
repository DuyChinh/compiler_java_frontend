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
    },
    {
        "id": 5,
        "title": "#ll04. Tìm ước số nguyên tố lớn nhất của N",
        "description": "Cho số nguyên dương N. Hãy đưa ra ước số nguyên tố lớn nhất của N.",
        "exe_input": "Mỗi bộ test chứa một số nguyên dương N.",
        "exe_output": "Đưa ra kết quả mỗi test theo từng dòng là ước số nguyên tố lớn nhất của N.",
        "testCases": [
            { "input": "315", "expected": "7" },
            { "input": "31", "expected": "31" },
            { "input": "10", "expected": "5" },
            { "input": "256", "expected": "2" },
            { "input": "123456", "expected": "643" },
            { "input": "999991", "expected": "999991" },
            { "input": "49", "expected": "7" },
            { "input": "77", "expected": "11" },
            { "input": "2", "expected": "2" },
            { "input": "987654321", "expected": "3803" }
        ]
    },
    {
        id: 6,
        "title": "#ll05.liệt kê và đếm",
        "description": "Cho một dãy các số nguyên dương không quá 9 chữ số, mỗi số cách nhau vài khoảng trống, có thể xuống dòng. Hãy tìm các số không giảm (các chữ số theo thứ tự từ trái qua phải tạo thành dãy không giảm) và đếm số lần xuất hiện của các số đó.",
        "exe_input": "Gồm các số nguyên dương không quá 9 chữ số. Không quá 100000 số.",
        "exe_output": " Ghi ra các số không giảm kèm theo số lần xuất hiện. Các số được liệt kê theo thứ tự sắp xếp số lần xuất hiện giảm dần. Các số có số lần xuất hiện bằng nhau thì số nào xuất hiện trước in ra trước.",
        "testCases": [
            { "input": "123 321 23456 123 123 23456 3523 123 321 4567 8988 78 7654 9899 3456 123 678 999 78 3456 987654321 4546 63543 4656 13432 4563 123471 659837 454945 34355 9087 9977 98534 3456 23134" , "expected": "123 5\n3456 3\n23456 2\n78 2\n4567 1\n678 1\n999 1" }
        ]
    }
    
];

export default exercises;