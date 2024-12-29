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
        title: "#md02.Tính tổng, hiệu, tích, thương",
        description: "In ra dòng chữ Hello World!",
        exe_input: "2 số nguyên a, b (0 < a, b ≤ 10^9)",
        exe_output: "Ghi kết quả trên một dòng gồm tổng, hiệu, tích, thương(int), cách nhau bằng khoảng trắng",
        testCases: [
            { input: "2 3", expected: "5 -1 6 0" }, 
            { input: "400 200", expected: "600 200 80000 2" },
            { input: "15 12", expected: "27 3 180 1" },
            { input: "45 12", expected: "57 33 540 3" },
            { input: "4000 213", expected: "4213 3787 852000 18" },
        ]
    },
    {
        id: 3,
        title: "#lp01.Tính tổng từ 1 đến n",
        description: "Nhập vào số nguyên n, tính tổng các số từ 1 đến n.",
        exe_input: "Số nguyên n",
        exe_output: "Ghi ra tổng",
        testCases: [
            { input: "5", expected: "15" },   
            { input: "0", expected: "0" },    
            { input: "1", expected: "1" },    
            { input: "3", expected: "6" },    
            { input: "50", expected: "1275" }, 
            { input: "100", expected: "5050" }, 
            { input: "20", expected: "210" },  
            { input: "7", expected: "28" },  
            { input: "8", expected: "36" },  
        ]
    },    
    {
        id: 4,
        title: "#lp02.Tính tổng các chữ số của n",
        description: "Nhập vào số nguyên n, tính tổng các chữ số của n.",
        exe_input: "Số nguyên n",
        exe_output: "Ghi tổng các chữ số của n",
        testCases: [
            { input: "123", expected: "6" },   
            { input: "456", expected: "15" },   
            { input: "789", expected: "24" },  
            { input: "0", expected: "0" },      
            { input: "999", expected: "27" },   
            { input: "100", expected: "1" },    
            { input: "555", expected: "15" },   
            { input: "101", expected: "2" },    
            { input: "1234", expected: "10" },  
        
        ]
    }, 
    {
        id: 5,
        title: "#lp03. Tìm USCLN và BSCNN của hai số nguyên dương",
        description: "Nhập hai số nguyên dương a, b. Tính ước số chung lớn nhất (USCLN) và bội số chung nhỏ nhất (BSCNN).",
        exe_input: " Dòng đầu ghi số bộ test. Mỗi bộ test ghi trên một dòng 2 số nguyên a và b không quá 9 chữ số.",
        exe_output: "Ghi trên 1 dòng, lần lượt là USCLN, sau đó đến BSCNN, cách nhau bằng khoảng trống",
        testCases: [
            { input: "12 18", expected: "6 36" },   
            { input: "15 20", expected: "5 60" },   
            { input: "7 3", expected: "1 21" },     
            { input: "10 25", expected: "5 50" },   
            { input: "100 80", expected: "20 400" },
            { input: "12 34", expected: "2 204" },
            { input: "1234 5678", expected: "2 3503326" }
        ]
    },
    {
        "id": 6,
        title: "#lp04. Tìm ước số nguyên tố lớn nhất của N",
        description: "Cho số nguyên dương N. Hãy đưa ra ước số nguyên tố lớn nhất của N.",
        exe_input: "Mỗi bộ test chứa một số nguyên dương N.",
        exe_output: "Đưa ra kết quả mỗi test theo từng dòng là ước số nguyên tố lớn nhất của N.",
        testCases: [
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
        id: 7,
        title: "#lp05.Liệt kê và đếm",
        description: "Cho một dãy các số nguyên dương không quá 9 chữ số, mỗi số cách nhau vài khoảng trống, có thể xuống dòng. Hãy tìm các số không giảm (các chữ số theo thứ tự từ trái qua phải tạo thành dãy không giảm) và đếm số lần xuất hiện của các số đó.",
        exe_input: "Gồm các số nguyên dương không quá 9 chữ số. Không quá 100000 số.",
        exe_output: " Ghi ra các số không giảm kèm theo số lần xuất hiện. Các số được liệt kê theo thứ tự sắp xếp số lần xuất hiện giảm dần. Các số có số lần xuất hiện bằng nhau thì số nào xuất hiện trước in ra trước.",
        testCases: [
            { "input": "123 321 23456 123 123 23456 3523 123 321 4567 8988 78 7654 9899 3456 123 678 999 78 3456 987654321 4546 63543 4656 13432 4563 123471 659837 454945 34355 9087 9977 98534 3456 23134" , "expected": "123 5\n3456 3\n23456 2\n78 2\n4567 1\n678 1\n999 1" }
        ]
    },
    {
        id: 8,
        title: "#str01. Đếm số kí tự là chữ, số và kí tự đặc biệt trong chuỗi",
        description: "Viết chương trình đếm số lượng ký tự chữ cái, số và kí tự đặc biệt trong một chuỗi.",
        exe_input: "Một chuỗi không quá 200 ký tự.",
        exe_output: "In ra 3 số nguyên cách nhau bởi dấu cách, lần lượt là số lượng ký tự chữ cái, số và ký tự đặc biệt trong chuỗi.",
        testCases: [
            { input: "a!bc123@#", expected: "3 3 3" },
            { input: "!@#$/^&*", expected: "0 0 8" }, 
            { input: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", expected: "52 10 0" }, 
            { input: "   ", expected: "0 0 3" }, 
            { input: "a1!", expected: "1 1 1" }, 
            { input: "你好123!@#", expected: "2 3 3" } 
        ]
        
    },
    {
        id: 9, 
        title: "#str02. Chuỗi palindrome",
        description: "Viết chương trình kiểm tra xem một chuỗi có phải là palindrome hay không. Chuỗi palindrome là chuỗi đọc xuôi hay đọc ngược đều giống nhau.",
        exe_input: "Một chuỗi không quá 200 ký tự.",
        exe_output: "In ra YES nếu chuỗi là palindrome, ngược lại in ra NO.",
        testCases: [
            { input: "abba", expected: "YES" },
            { input: "abccfcba", expected: "NO" },
            { input: "t", expected: "YES" },
            { input: "A man a plan a canal PanamA", expected: "YES" },
            { input: "abccba7993hdyksdl;kdk", expected: "NO" },
            { input: "abn121nba", expected: "YES" },
        ]
    }, 
    {
        id: 10,
        title: "#str03. Chuẩn hoá xâu họ tên",
        description: "Một xâu họ tên được coi là viết chuẩn nếu chữ cái đầu tiên mỗi từ được viết hoa, các chữ cái khác viết thường. Các từ cách nhau đúng một dấu cách và không có khoảng trống thừa ở. đầu và cuối xâu. Hãy viết chương trình đưa các xâu họ tên về dạng chuẩn.",
        exe_input: "Một xâu không quá 100 ký tự.",
        exe_input: "Ghi ra xâu ký tự họ tên đã chuẩn hóa.",
        testCases: [
            { input: "   bUi Trung   DUY", expected: "Bui Trung Duy" },
            { input: "tRan    TRUNG kiEN   ", expected: "Tran Trung Kien"},
            { input: "   vO le hOA bINh   " , expected: "Vo Le Hoa Binh" },
            { input: "   NGUYEN   VAN   AN   ", expected: "Nguyen Van An" },
            { input: "   Pham   Minh   Khoi   ", expected: "Pham Minh Khoi" },
            { input: "   nguyen   van   a   ", expected: "Nguyen Van A" },
        ]
    },
    {
        id: 11,
        title: "#str04. Địa chỉ gmail",
        description: "Địa chỉ email được tạo ra bằng cách viết đầy đủ tên và ghép với các chữ cái đầu của họ và tên đệm. Cho trước các xâu họ tên (có thể không chuẩn). Hãy tạo ra các địa email tương ứng.",
        exe_input: "Xâu họ tên (không quá 50 ký tự)",
        exe_output: "Ghi ra địa chỉ email tạo ra.",
        testCases: [
            { input: "  tRan    TRUNG kiEN   ", expected: "kientt@gmail.com"},
            { input: "   vO le hOA bINh   " , expected: "binhvlh@gmail.com"},
            { input: "   NGUYEN   VAN   AN   ", expected: "annv@gmail.com"},
            { input: "   Pham   Minh   Khoi   ", expected: "khoipm@gmail.com"},
            { input: "   ho tan  TAI   ", expected: "taiht@gmail.com"},
            { input: "   le phAm Thanh LOng   ", expected: "longlpt@gmail.com"},
        ]
    },
    {
        id: 12,
        title: "#str05. Rút gọn xâu kí tự.",
        description: "Cho một xâu S. Mỗi bước, bạn được phép xóa đi 2 kí tự liền nhau mà giống nhau. Chẳng hạn xâu “aabcc” có thể trở thành “bcc” hoặc “aab” sau 1 lần xóa. Hỏi xâu cuối cùng thu được là gì? Nếu xâu rỗng, in ra “Empty String”.",
        exe_input: "Một xâu S chỉ gồm các chữ cái thường, có độ dài không vượt quá 100.",
        exe_output: "Ghi ra kết quả cuối cùng",
        testCases: [
            { input: "aaabccddd", expected: "abd" },
            { input: "baab", expected: "Empty String" },
            { input: "aa", expected: "Empty String" },
            { input: "abcddcba", expected: "Empty String" },
            { input: "abccba", expected: "Empty String" },
            { input: "abccbccbar", expected: "abar" }
        ]
    }
];

export default exercises;