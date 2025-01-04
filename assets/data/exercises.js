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
        description: "Cho 2 số nguyên a, b. Hãy tính tổng, hiệu, tích, thương của 2 số đó.",
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
        title: "#ll00. Tổng chẵn, lẻ",
        description: "Cho một mảng số nguyên a gồm n phần tử. Hãy tính tổng các số chẵn và tổng các số lẻ trong mảng.",
        exe_input: "Ghi số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên a[i] (0 ≤ a[i] ≤ 10^9).",
        exe_output: "Ghi ra 2 số nguyên, tổng các số chẵn và tổng các số lẻ, cách nhau bởi dấu cách.",
        testCases: [
            { input: "6 1 2 3 4 5 3", expected: "6 12" },   
            { input: "4 2 4 6 8", expected: "20 0" },    
            { input: "3 1 3 5", expected: "0 9" },    
            { input: "4 0 1 2 3", expected: "2 4" },    
            { input: "5 4 4 4 4 4", expected: "20 0" }, 
            { input: "5 1000000000 999999999 1000000000 999999999 0", expected: "2000000000 1999999998" }, 
        ]
    },
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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
        "id": 7,
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
        id: 8,
        title: "#lp05.Liệt kê và đếm",
        description: "Cho một dãy các số nguyên dương không quá 9 chữ số, mỗi số cách nhau vài khoảng trống, có thể xuống dòng. Hãy tìm các số không giảm (các chữ số theo thứ tự từ trái qua phải tạo thành dãy không giảm) và đếm số lần xuất hiện của các số đó.",
        exe_input: "Gồm các số nguyên dương không quá 9 chữ số. Không quá 100000 số.",
        exe_output: " Ghi ra các số không giảm kèm theo số lần xuất hiện. Các số được liệt kê theo thứ tự sắp xếp số lần xuất hiện giảm dần. Các số có số lần xuất hiện bằng nhau thì số nào xuất hiện trước in ra trước.",
        testCases: [
            { "input": "123 321 23456 123 123 23456 3523 123 321 4567 8988 78 7654 9899 3456 123 678 999 78 3456 987654321 4546 63543 4656 13432 4563 123471 659837 454945 34355 9087 9977 98534 3456 23134" , "expected": "123 5\n3456 3\n23456 2\n78 2\n4567 1\n678 1\n999 1" }
        ]
    },
    {
        id: 9,
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
        id: 10, 
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
    },
    {
        id: 14,
        title: "#arr01. Trộn 2 dãy và sắp xếp",
        description: "Cho hai dãy số nguyên dương A và B không quá 100 phần tử, các giá trị trong dãy không quá 30000 và số phần tử của hai dãy bằng nhau. Hãy trộn hai dãy với nhau sao cho dãy A được đưa vào các vị trí có chỉ số chẵn, dãy B được đưa vào các vị trí có chỉ số lẻ. Đồng thời, dãy A được sắp xếp tăng dần, còn dãy B được sắp xếp giảm dần. (Chú ý: chỉ số tính từ 0)",
        exe_input: "Ghi trên 1 dòng, đầu tiên là số phần tử của dãy, sau đó là n phần tử của dãy A, n phần tử dãy B cách nhau bởi dấu cách.",
        exe_input: "Ghi ra dãy kết quả",
        testCases:[
            { input: "5 1 2 3 1 2 3 1 2 3 1", expected: "1 3 1 3 2 2 2 1 3 1" },
            { input: "4 4 2 7 1 5 6 2 8", expected: "1 8 2 6 4 5 7 2"},
            { input: "3 10 20 30 25 15 5", expected: "10 25 20 15 30 5" },
            { input: "2 50 10 40 20",expected: "10 40 50 20" },
            { input: "6 3 1 4 2 6 5 9 8 7 10 12 0", expected: "1 12 2 10 3 9 4 8 5 7 6 0" }
        ]
    },
    { 
        id: 15,
        title: "#arr02. Mảng đối xứng",
        description: "Nhập một dãy số nguyên có n phần tử (n không quá 100, các phần tử trong dãy không quá 109).Hãy viết chương trình kiểm tra xem dãy có phải đối xứng hay không. Nếu đúng in ra YES, nếu sai in ra NO.",
        exe_input: "Đầu tiên là số phần tử của dãy, sau đó ghi ra dãy đó, mỗi số cách nhau một khoảng trống.",
        exe_output: "In ra YES nếu dãy đối xứng, ngược lại in ra NO.",
        testCases: [
            { input: "5 1 2 3 2 1", expected: "YES" },
            { input: "4 1 2 3 2 1", expected: "NO" },
            { input: "6 1 2 3 3 2 1", expected: "YES" },
            { input: "3 1 2 1", expected: "YES" },
            { input: "4 1 2 3 1", expected: "NO" },
            { input: "7 1 2 3 4 3 2 1", expected: "YES" }
        ]
    },
    { 
        id: 16,
        title: "#arr03. Số lớn thứ hai trong dãy",
        description: "Nhập một dãy số nguyên có n phần tử (n không quá 100, các phần tử trong dãy không quá 10^9). Hãy viết chương trình tìm số lớn thứ hai trong dãy. Nếu không tồn tại số lớn thứ hai (tức tất cả các phần tử đều giống nhau hoặc chỉ có một phần tử), in ra NO.",
        exe_input: "Đầu tiên là số phần tử của dãy, sau đó ghi ra dãy đó, mỗi số cách nhau một khoảng trống.",
        exe_output: "In ra số lớn thứ hai nếu tồn tại, ngược lại in ra NO.",
        testCases: [
            { input: "5 1 2 3 4 5", expected: "4" },
            { input: "4 10 10 10 10", expected: "NO" },
            { input: "6 5 3 9 1 9 2", expected: "5" },
            { input: "3 100 50 100", expected: "50" },
            { input: "1 42", expected: "NO" },
            { input: "5 2 3 2 3 2", expected: "2" },
            { input: "10 1 2 3 4 5 6 7 8 9 10", expected: "9" },
            { input: "2 1000000000 999999999", expected: "999999999" }
        ]
    },
    { 
        id: 17,
        title: "#arr04. Số lớn thứ ba trong dãy",
        description: "Nhập một dãy số nguyên có n phần tử (n không quá 100, các phần tử trong dãy không quá 10^9). Hãy viết chương trình tìm số lớn thứ ba trong dãy. Nếu không tồn tại số lớn thứ ba (tức là có ít hơn ba phần tử hoặc tất cả các phần tử không đủ đa dạng), in ra NO.",
        exe_input: "Đầu tiên là số phần tử của dãy, sau đó ghi ra dãy đó, mỗi số cách nhau một khoảng trống.",
        exe_output: "In ra số lớn thứ ba nếu tồn tại, ngược lại in ra NO.",
        testCases: [
            { input: "5 1 2 3 4 5", expected: "3" },
            { input: "4 10 10 10 10", expected: "NO" },
            { input: "6 5 3 9 1 9 2", expected: "3" },
            { input: "3 100 50 100", expected: "50" },
            { input: "2 42 42", expected: "NO" },
            { input: "5 2 3 2 3 2", expected: "2" },
            { input: "10 1 2 3 4 5 6 7 8 9 10", expected: "8" },
            { input: "3 1000000000 999999999 999999998", expected: "999999998" }
        ]
    },
    { 
        id: 18,
        title: "#arr4. Dãy con tăng dài nhất",
        description: "Nhập một dãy số nguyên có n phần tử (1 ≤ n ≤ 1000, các phần tử trong dãy không vượt quá 10^9). Hãy viết chương trình tìm độ dài và dãy con tăng dài nhất trong dãy đã cho.",
        exe_input: "Đầu tiên là số phần tử của dãy, sau đó ghi ra dãy đó, mỗi số cách nhau một khoảng trống.",
        exe_output: "In ra độ dài của dãy con tăng dài nhất, sau đó là dãy con tăng đó. Các phần tử trong dãy con tăng cách nhau một khoảng trống. Nếu có nhiều dãy con tăng dài nhất, in ra dãy con đầu tiên tìm được.",
        testCases: [
            { input: "6 5 2 8 6 3 6", expected: "3 2 8 6" },
            { input: "10 1 3 5 4 7 2 8 4 5 6", expected: "6 1 3 4 7 8 6" },
            { input: "8 10 22 9 33 21 50 41 60", expected: "5 10 22 33 50 60" },
            { input: "1 100", expected: "1 100" },
            { input: "9 3 4 -1 0 6 2 3", expected: "4 3 4 6 3" },
            { input: "4 1 2 3 4", expected: "4 1 2 3 4" },
            { input: "12 10 22 9 33 21 50 41 60 80 1 2 3", expected: "6 10 22 33 50 60 80" }
        ]
    }
            
];

export default exercises;