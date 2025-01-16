const exercises = [
    {
        id: 1,
        title: "#md01.Hello World!",
        type: "Begin",
        difficulty: "Easy",
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
        type: "Begin",
        difficulty: "Easy",
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
        type: "Loop",
        difficulty: "Easy",
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
        type: "Loop",
        difficulty: "Easy",
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
        type: "Loop",
        difficulty: "Easy",
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
        type: "Loop",
        difficulty: "Easy",
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
        id: 7,
        title: "#lp04. Tìm ước số nguyên tố lớn nhất của N",
        type: "Loop",
        difficulty: "Medium",
        description: "Cho số nguyên dương N. Hãy đưa ra ước số nguyên tố lớn nhất của N.",
        exe_input: "Mỗi bộ test chứa một số nguyên dương N.",
        exe_output: "Đưa ra kết quả mỗi test theo từng dòng là ước số nguyên tố lớn nhất của N.",
        testCases: [
            { input: "315", expected: "7" },
            { input: "31", expected: "31" },
            { input: "10", expected: "5" },
            { input: "256", expected: "2" },
            { input: "123456", expected: "643" },
            { input: "999991", expected: "999991" },
            { input: "49", expected: "7" },
            { input: "77", expected: "11" },
            { input: "2", expected: "2" },
            { input: "987654321", expected: "3803" }
        ]
    },
    {
        id: 8,
        title: "#lp05.Liệt kê và đếm",
        type: "Loop",
        difficulty: "Medium",
        description: "Cho một dãy các số nguyên dương không quá 9 chữ số, mỗi số cách nhau vài khoảng trống, có thể xuống dòng. Hãy tìm các số không giảm (các chữ số theo thứ tự từ trái qua phải tạo thành dãy không giảm) và đếm số lần xuất hiện của các số đó.",
        exe_input: "Gồm các số nguyên dương không quá 9 chữ số. Không quá 100000 số.",
        exe_output: " Ghi ra các số không giảm kèm theo số lần xuất hiện. Các số được liệt kê theo thứ tự sắp xếp số lần xuất hiện giảm dần. Các số có số lần xuất hiện bằng nhau thì số nào xuất hiện trước in ra trước.",
        testCases: [
            { input: "123 321 23456 123 123 23456 3523 123 321 4567 8988 78 7654 9899 3456 123 678 999 78 3456 987654321 4546 63543 4656 13432 4563 123471 659837 454945 34355 9087 9977 98534 3456 23134" , expected: "123 5\n3456 3\n23456 2\n78 2\n4567 1\n678 1\n999 1" }
        ]
    },
    {
        id: 9,
        title: "#str01. Đếm số kí tự là chữ, số và kí tự đặc biệt trong chuỗi",
        type: "String",
        difficulty: "Easy",
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
        type: "String",
        difficulty: "Easy",
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
        type: "String",
        difficulty: "Easy",
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
        type: "String",
        difficulty: "Medium",
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
        type: "String",
        difficulty: "Advanced",
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
        type: "Array",
        difficulty: "Easy",
        description: "Cho hai dãy số nguyên dương A và B không quá 100 phần tử, các giá trị trong dãy không quá 30000 và số phần tử của hai dãy bằng nhau. Hãy trộn hai dãy với nhau sao cho dãy A được đưa vào các vị trí có chỉ số chẵn, dãy B được đưa vào các vị trí có chỉ số lẻ. Đồng thời, dãy A được sắp xếp tăng dần, còn dãy B được sắp xếp giảm dần. (Chú ý: chỉ số tính từ 0)",
        exe_input: "Ghi trên 1 dòng, đầu tiên là số phần tử của dãy, sau đó là n phần tử của dãy A, n phần tử dãy B cách nhau bởi dấu cách.",
        exe_output: "Ghi ra dãy kết quả",
        testCases:[
            { input: "5 1 2 3 1 2 3 1 2 3 1", expected: "1 3 1 3 2 2 2 1 3 1" },
            { input: "4 4 2 7 1 5 6 2 8", expected: "1 8 2 6 4 5 7 2"},
            { input: "3 10 20 30 25 15 5", expected: "10 25 20 15 30 5" },
            { input: "2 50 10 40 20",expected: "10 40 50 20" },
            { input: "6 3 1 4 2 6 5 9 8 7 10 12 0", expected: "1 12 2 10 3 9 4 8 5 7 6 0" },
            { input: "4 1 2 3 4 4 3 2 1", expected: "1 4 2 3 3 2 4 1" },
            { input: "5 1 2 3 4 5 5 4 3 2 1", expected: "1 5 2 4 3 3 4 2 5 1" }
        ]
    },
    { 
        id: 15,
        title: "#arr02. Mảng đối xứng",
        type: "Array",
        difficulty: "Easy",
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
        type: "Array",
        difficulty: "Easy",
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
        type: "Array",
        difficulty: "Easy",
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
        title: "#arr05. Dãy con tăng dài nhất",
        type: "Array",
        difficulty: "Medium",
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
    },
    //newest
    {
        id: 19,
        title: "#arr06. Dãy con tổng lớn nhất",
        type: "Array",
        difficulty: "Medium",
        description: "Nhập một dãy số nguyên có n phần tử (1 ≤ n ≤ 1000, các phần tử trong dãy không vượt quá 10^9). Hãy viết chương trình tìm tổng lớn nhất và dãy con có tổng lớn nhất trong dãy đã cho.",
        exe_input: "Đầu tiên là số phần tử của dãy, sau đó ghi ra dãy đó, mỗi số cách nhau một khoảng trống.",
        exe_output: "In ra tổng lớn nhất của dãy con, sau đó là dãy con đó. Các phần tử trong dãy con cách nhau một khoảng trống. Nếu có nhiều dãy con có tổng lớn nhất, in ra dãy con đầu tiên tìm được.",
        testCases: [
            { input: "6 -2 1 -3 4 -1 2 1 -5 4", expected: "6 4 -1 2 1" },
            { input: "5 1 2 3 -4 5", expected: "7 1 2 3 -4 5" },
            { input: "10 -1 -2 -3 -4 -5 -6 -7 -8 -9 -10", expected: "-1 -1" },
            { input: "4 4 -1 2 1", expected: "6 4 -1 2 1" },
            { input: "7 1 2 3 4 -5 6", expected: "11 1 2 3 4" }
        ]
    },
    {
        id: 20,
        title: "#arr07. Dãy số Fibonacci",
        type: "Array",
        difficulty: "Easy",
        description: "Dãy số Fibonacci được định nghĩa như sau: F0 = 0, F1 = 1; Fi = Fi-1 + Fi-2. Nhập n, với 2 ≤ n ≤ 90. Hãy viết chương trình in ra n số Fibonacci đầu tiên.",
        exe_input: "Một số nguyên n (2 ≤ n ≤ 90).",
        exe_output: "In ra n số Fibonacci đầu tiên, mỗi số cách nhau một khoảng trống.",
        testCases: [
            { input: "2", expected: "0 1" },
            { input: "5", expected: "0 1 1 2 3" },
            { input: "10", expected: "0 1 1 2 3 5 8 13 21 34" },
            { input: "15", expected: "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377" },
            { input: "20", expected: "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181" },
            { input: "25", expected: "0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368" }
        ]
    },
    {
        id: 21,
        title: "#arr08. Xoay vòng dãy số",
        type: "Array",
        difficulty: "Advanced",
        description: "Cho một dãy số nguyên gồm n phần tử (1 ≤ n ≤ 10^5, các phần tử không vượt quá 10^9). Hãy xoay dãy số k lần theo chiều kim đồng hồ.",
        exe_input: "Dòng đầu tiên là hai số nguyên n và k (0 ≤ k ≤ 10^9). Dòng tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra dãy số sau khi đã xoay k lần.",
        testCases: [
            { input: "5 2 1 2 3 4 5", expected: "4 5 1 2 3" },
            { input: "4 1 10 20 30 40", expected: "40 10 20 30" },
            { input: "6 6 1 1 1 1 1 1", expected: "1 1 1 1 1 1" },
            { input: "8 3 1 2 3 4 5 6 7 8", expected: "6 7 8 1 2 3 4 5" },
            { input: "3 0 10 20 30", expected: "10 20 30" },
            { input: "7 4 5 6 7 8 9 10 11", expected: "8 9 10 11 5 6 7" },
            { input: "9 12 1 2 3 4 5 6 7 8 9", expected: "4 5 6 7 8 9 1 2 3" }
        ]
    },
    {
        id: 22,
        title: "#setmap01. Lọc số trùng lặp",
        type: "Set/Map",
        difficulty: "Easy",
        description: "Cho một mảng số nguyên, hãy loại bỏ các số trùng lặp và in ra mảng kết quả.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra các số trong mảng sau khi đã loại bỏ trùng lặp, cách nhau một khoảng trống.",
        testCases: [
            { input: "8 1 2 3 2 4 5 1 6", expected: "1 2 3 4 5 6" },
            { input: "5 10 20 30 40 50", expected: "10 20 30 40 50" },
            { input: "6 1 1 1 1 1 1", expected: "1" },
            { input: "4 10 20 20 10", expected: "10 20" },
            { input: "7 1 2 3 4 5 6 7", expected: "1 2 3 4 5 6 7" },
            { input: "9 1 2 3 4 5 6 7 8 9", expected: "1 2 3 4 5 6 7 8 9" }
        ]
    },
    {
        id: 23,
        title: "#setmap02. Đếm phần tử duy nhất",
        type: "Set/Map",
        difficulty: "Easy",
        description: "Cho một mảng số nguyên, hãy đếm số phần tử khác nhau trong mảng.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra số lượng phần tử khác nhau trong mảng.",
        testCases: [
            { input: "7 10 20 30 10 20 40 50", expected: "5" },
            { input: "5 1 1 1 1 1", expected: "1" },
            { input: "4 2 4 6 8", expected: "4" },
            { input: "6 100 200 300 400 100 200", expected: "4" },
            { input: "3 1 2 3", expected: "3" },
            { input: "9 1 2 3 4 5 6 7 8 9", expected: "9" }
        ]
    },
    {
        id: 24,
        title: "#setmap03. Lưu trữ và tìm kiếm",
        type: "Set/Map",
        difficulty: "Medium",
        description: "Sử dụng HashMap để lưu trữ tên và số điện thoại. Sau đó, tìm kiếm số điện thoại theo tên.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5). Tiếp theo là n cặp, mỗi dòng chứa một cặp tên và số điện thoại.Cuối cùng là tên cần tìm.",
        exe_output: "In ra số điện thoại của tên đã cho. Nếu không tìm thấy, in 'Not Found'.",
        testCases: [
            { input: "3 Nam 0123456789 Hoa 0987654321 An 0111222333 Hoa", expected: "0987654321" },
            { input: "2 Minh 1234567890 Lan 9876543210 Minh", expected: "1234567890" },
            { input: "1 Nam 0123456789 An", expected: "Not Found" },
            { input: "4 An 1234567890 Binh 0987654321 Cuong 0987654321 Dung 0123456789 Cuong", expected: "0987654321" },
            { input: "5 An 1234567890 Binh 0987654321 Cuong 0987654321 Dung 0123456789 Hoa 0987654321 Hoa", expected: "0987654321" },
            { input: "3 An 1234567890 Binh 0987654321 Cuong 0987654321 Dung", expected: "Not Found" }
        ]
    },
    {
        id: 25,
        title: "#setmap04. Đếm số lần xuất hiện",
        type: "Set/Map",
        difficulty: "Medium",
        description: "Cho một chuỗi các từ, hãy đếm số lần mỗi từ xuất hiện.",
        exe_input: "Đầu vào chứa một chuỗi các từ, mỗi từ cách nhau một khoảng trống.",
        exe_output: "In ra mỗi từ và số lần xuất hiện của nó, mỗi từ trên một dòng theo định dạng 'từ: số_lần'.",
        testCases: [
            { input: "Java is fun and Java is powerful", expected: "Java: 2\nis: 2\nfun: 1\nand: 1\npowerful: 1" },
            { input: "hello world hello everyone", expected: "hello: 2\nworld: 1\neveryone: 1" },
            { input: "one two two three three three", expected: "one: 1\ntwo: 2\nthree: 3" },
            { input: "viet nam muon nam dang cong san viet nam muon nam", expected: "viet: 2\nnam: 2\nmuon: 2\ndang: 1\ncong: 1\nsan: 1" },
            { input: "i like playing soccer because soccer is fun", expected: "i: 1\nlike: 1\nplaying: 1\nsoccer: 2\nbecause: 1\nis: 1\nfun: 1" },
            { input: "i am a student i am a student i am a student many student love school", expected: "i: 3\nam: 3\na: 3\nstudent: 4\nmany: 1\nlove: 1\nschool: 1" }
        ]
    },
    {
        id: 26,
        title: "#setmap05. Giao của hai tập hợp",
        type: "Set/Map",
        difficulty: "Medium",
        description: "Cho hai mảng số nguyên, hãy tìm giao của hai mảng.",
        exe_input: "Đầu tiên là hai số nguyên n và m (1 ≤ n, m ≤ 10^5), tiếp theo là n số nguyên của mảng thứ nhất, tiếp theo là m số nguyên của mảng thứ hai.",
        exe_output: "In ra giao của hai mảng, các phần tử cách nhau một khoảng trống.",
        testCases: [
            { input: "5 4 1 2 3 4 5 3 4 5 6", expected: "3 4 5" },
            { input: "6 6 1 2 3 4 5 6 2 4 6 8 10 12", expected: "2 4 6" },
            { input: "3 3 1 2 3 4 5 6", expected: "" },
            { input: "4 5 1 2 3 4 5 6 7 8 9", expected: "1 2 3 4 5" },
            { input: "3 3 1 2 3 1 2 3", expected: "1 2 3" },
            { input: "7 8 1 2 3 4 5 6 7 2 4 6 8 10 12", expected: "2 4 6" }
        ]
    },
    {
        id: 27,
        title: "#setmap06. Tìm số phổ biến nhất",
        type: "Set/Map",
        difficulty: "Medium",
        description: "Cho một mảng số nguyên, hãy tìm số xuất hiện nhiều nhất.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra số xuất hiện nhiều nhất. Nếu có nhiều số cùng tần suất, in số nhỏ nhất.",
        testCases: [
            { input: "10 1 2 3 4 2 2 3 3 3 4", expected: "3" },
            { input: "7 10 20 20 10 10 20", expected: "10" },
            { input: "5 5 5 5 5", expected: "5" },
            { input: "6 1 2 3 4 5 6", expected: "1" },
            { input: "10 1 2 3 4 2 2 3 3 3 4", expected: "3" },
            { input: "7 10 20 20 10 10 20", expected: "10" },
            { input: "5 5 5 5 5", expected: "5" },
        ]
    },
    {
        id: 28,
        title: "#setmap07. Tìm số nhỏ nhất không xuất hiện",
        type: "Set/Map",
        difficulty: "Medium",
        description: "Cho một mảng số nguyên không âm. Hãy tìm số nguyên dương nhỏ nhất không xuất hiện trong mảng.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra số nguyên dương nhỏ nhất không xuất hiện trong mảng.",
        testCases: [
            { input: "6 1 2 3 5 6 7", expected: "4" },
            { input: "5 1 3 6 7 8", expected: "2" },
            { input: "4 2 3 4 5", expected: "1" },
            { input: "3 1 2 3", expected: "4" },
            { input: "7 1 2 3 4 5 6 7", expected: "8" },
            { input: "6 1 2 3 4 5 6", expected: "7" },
            { input: "5 1 2 3 4 5", expected: "6" }
        ]
    },
    {
        id: 29,
        title: "#fun01. Tìm số chẵn lớn nhất",
        type: "Function",
        difficulty: "Easy",
        description: "Cho một mảng số nguyên. Hãy tìm số chẵn lớn nhất trong mảng. Nếu không có số chẵn, in ra -1.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra số chẵn lớn nhất trong mảng hoặc -1 nếu không có số chẵn.",
        testCases: [
            { input: "6 1 2 3 4 5 6", expected: "6" },
            { input: "4 7 5 3 9", expected: "-1" },
            { input: "5 10 15 20 25 30", expected: "30" },
            { input: "3 4 8 16", expected: "16" },
            { input: "2 -2 -4", expected: "-2" }
        ]
    },
    {
        id: 30,
        title: "#fun02. Tìm số nhỏ nhất xuất hiện hơn một lần",
        type: "Function",
        difficulty: "Easy",
        description: "Cho một mảng số nguyên. Hãy tìm số nhỏ nhất xuất hiện nhiều hơn một lần trong mảng. Nếu không có, in ra -1.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra số nhỏ nhất xuất hiện hơn một lần hoặc -1 nếu không có số nào như vậy.",
        testCases: [
            { input: "6 1 2 2 3 4 5", expected: "2" },
            { input: "4 1 3 3 4", expected: "3" },
            { input: "5 5 5 6 7", expected: "5" },
            { input: "3 1 2 3", expected: "-1" },
            { input: "7 10 20 10 30 20 10", expected: "10" }
        ]
    },
    {
        id: 31,
        type: "Function",
        difficulty: "Medium",
        title: "#fun03. Kiểm tra mảng có phải dãy số liên tiếp",
        description: "Cho một mảng số nguyên dương. Hãy kiểm tra xem các số trong mảng có tạo thành một dãy số liên tiếp hay không (các số không cần sắp xếp).",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 10^5), tiếp theo là n số nguyên cách nhau một khoảng trống.",
        exe_output: "In ra 'YES' nếu các số trong mảng tạo thành một dãy liên tiếp, ngược lại in ra 'NO'.",
        testCases: [
            { input: "5 1 2 3 4 5", expected: "YES" },
            { input: "4 10 11 12 13", expected: "YES" },
            { input: "6 3 5 6 7 8 10", expected: "NO" },
            { input: "3 1 3 2", expected: "YES" },
            { input: "4 7 8 9 11", expected: "NO" }
        ]
    },
    {
        id: 32,
        type: "OOP",
        difficulty: "Easy",
        title: "#oop1. Quản lý thông tin sinh viên",
        description: "Xây dựng một lớp SinhVien trong đó lưu trữ thông tin về sinh viên như tên, tuổi, mã số sinh viên (MSSV), điểm trung bình. Viết chương trình nhận vào một vài thông tin sinh viên từ đầu vào, tạo đối tượng sinh viên và in ra thông tin của từng sinh viên.",
        exe_input: "Đầu tiên là số nguyên n (1 ≤ n ≤ 100), tiếp theo là n dòng, mỗi dòng chứa tên, tuổi, MSSV và điểm trung bình của một sinh viên (các giá trị cách nhau bởi một dấu cách).",
        exe_output: "In ra thông tin của mỗi sinh viên theo định dạng: 'name: <tên>, age: <tuổi>, gpa: <điểm>'.",
        testCases: [
            { 
                input: "2\nAlice 20 12345 8.5\nBob 21 67890 9.0", 
                expected: "name: Alice, age: 20, gpa: 8.5\nname: Bob, age: 21, gpa: 9.0" 
            },
            { 
                input: "3\nCharlie 19 11111 7.8\nDaisy 22 22222 8.3\nEve 20 33333 8.9", 
                expected: "name: Charlie, age: 19, gpa: 7.8\nname: Daisy, age: 22, gpa: 8.3\nname: Eve, age: 20, gpa: 8.9"
            },
            { 
                input: "1\nFrank 23 44444 6.9", 
                expected: "name: Frank, age: 23, gpa: 6.9"
            },
            { 
                input: "4\nAnna 18 55555 9.2\nBrian 20 66666 7.4\nClara 21 77777 8.0\nDavid 22 88888 6.5", 
                expected: "name: Anna, age: 18, gpa: 9.2\nname: Brian, age: 20, gpa: 7.4\nname: Clara, age: 21, gpa: 8.0\nname: David, age: 22, gpa: 6.5"
            },
            { 
                input: "3\nEmma 19 99999 7.6\nOlivia 20 10001 8.8\nSophia 21 10002 9.1", 
                expected: "name: Emma, age: 19, gpa: 7.6\nname: Olivia, age: 20, gpa: 8.8\nname: Sophia, age: 21, gpa: 9.1"
            },
            { 
                input: "2\nEthan 22 10003 6.8\nNoah 23 10004 7.9", 
                expected: "name: Ethan, age: 22, gpa: 6.8\nname: Noah, age: 23, gpa: 7.9"
            }
        ]
    },
    {
        id: 33,
        type: "OOP",
        difficulty: "Easy",
        title: "#oop2. Sắp xếp và in thông tin sinh viên",
        description: "Xây dựng một lớp SinhVien trong đó lưu trữ thông tin về sinh viên như tên, tuổi, mã số sinh viên (MSSV), điểm trung bình. Viết chương trình nhận vào một vài thông tin sinh viên từ đầu vào, tạo đối tượng sinh viên, sắp xếp danh sách theo tên và in ra thông tin cơ bản của từng sinh viên theo định dạng '<tên> <tuổi> <điểm>'.",
        exe_input: "Đầu tiên là số nguyên n (1 ≤ n ≤ 100), tiếp theo là n dòng, mỗi dòng chứa tên, tuổi, MSSV và điểm trung bình của một sinh viên (các giá trị cách nhau bởi một dấu cách).",
        exe_output: "In ra thông tin của từng sinh viên theo định dạng '<tên> <tuổi> <điểm>', danh sách đã được sắp xếp theo tên.",
        testCases: [
            { 
                input: "2\nBob 20 12345 8.5\nAlice 21 67890 9.0", 
                expected: "Alice 21 9.0\nBob 20 8.5" 
            },
            { 
                input: "3\nEve 19 11111 7.8\nDaisy 22 22222 8.3\nCharlie 20 33333 8.9", 
                expected: "Charlie 20 8.9\nDaisy 22 8.3\nEve 19 7.8"
            },
            { 
                input: "1\nFrank 23 44444 6.9", 
                expected: "Frank 23 6.9"
            },
            { 
                input: "4\nClara 18 55555 9.2\nBrian 20 66666 7.4\nAnna 21 77777 8.0\nDavid 22 88888 6.5", 
                expected: "Anna 21 8.0\nBrian 20 7.4\nClara 18 9.2\nDavid 22 6.5"
            },
            { 
                input: "3\nSophia 19 99999 7.6\nOlivia 20 10001 8.8\nEmma 21 10002 9.1", 
                expected: "Emma 21 9.1\nOlivia 20 8.8\nSophia 19 7.6"
            },
            { 
                input: "2\nEthan 22 10003 6.8\nNoah 23 10004 7.9", 
                expected: "Ethan 22 6.8\nNoah 23 7.9"
            }
        ]
    },
    {
        id: 34,
        type: "OOP",
        difficulty: "Easy",
        title: "#oop3. Tính chu vi và diện tích hình chữ nhật",
        description: "Xây dựng một lớp Rectangle để lưu trữ thông tin về hai cạnh của hình chữ nhật. Viết chương trình nhập vào hai cạnh hình chữ nhật, tạo đối tượng hình chữ nhật và tính chu vi, diện tích.",
        exe_input: "Đầu tiên là một số nguyên n (1 ≤ n ≤ 100), tiếp theo là n dòng, mỗi dòng chứa hai số nguyên dương a và b là hai cạnh của hình chữ nhật.",
        exe_output: "In ra chu vi và diện tích của từng hình chữ nhật theo định dạng: '<chu vi> <diện tích>'.",
        testCases: [
            {
                input: "2\n4 5\n6 7",
                expected: "18 20\n26 42"
            },
            {
                input: "1\n10 20",
                expected: "60 200"
            },
            {
                input: "3\n2 3\n8 9\n5 6",
                expected: "10 6\n34 72\n22 30"
            },
            {
                input: "4\n1 2\n3 4\n5 5\n6 10",
                expected: "6 2\n14 12\n20 25\n32 60"
            },
            {
                input: "2\n12 15\n7 8",
                expected: "54 180\n30 56"
            },
            {
                input: "3\n9 10\n11 12\n13 14",
                expected: "38 90\n46 132\n54 182"
            }
        ]
    },
    {
        id: 35,
        type: "OOP",
        difficulty: "Medium",
        title: "#oop4. Tìm hai điểm có khoảng cách lớn nhất",
        description: "Xây dựng lớp MyPoint để biểu diễn điểm trong mặt phẳng tọa độ với các thuộc tính x và y. Viết chương trình nhập vào n điểm, tìm hai điểm có khoảng cách lớn nhất và hiển thị tọa độ của chúng cùng với giá trị khoảng cách.",
        exe_input: "Đầu tiên là một số nguyên n (2 ≤ n ≤ 100), tiếp theo là n dòng, mỗi dòng chứa hai số thực x và y biểu diễn tọa độ của một điểm.",
        exe_output: "In ra tọa độ của hai điểm có khoảng cách lớn nhất và giá trị khoảng cách giữa chúng theo định dạng: 'Point 1: (<x1>, <y1>), Point 2: (<x2>, <y2>), Distance: <khoảng cách>'.",
        testCases: [
            {
                input: "3\n0 0\n3 4\n6 8",
                expected: "Point 1: (0.0, 0.0), Point 2: (6.0, 8.0), Distance: 10.0"
            },
            {
                input: "4\n1 1\n2 2\n3 3\n4 4",
                expected: "Point 1: (1.0, 1.0), Point 2: (4.0, 4.0), Distance: 4.242640687119285"
            },
            {
                input: "5\n-1 -1\n-2 -2\n-3 -3\n-4 -4\n0 0",
                expected: "Point 1: (-4.0, -4.0), Point 2: (0.0, 0.0), Distance: 5.656854249492381"
            },
            {
                input: "6\n0 0\n1 1\n2 2\n3 3\n4 4\n5 5",
                expected: "Point 1: (0.0, 0.0), Point 2: (5.0, 5.0), Distance: 7.0710678118654755"
            },
            {
                input: "3\n-1 -1\n1 1\n-1 1",
                expected: "Point 1: (-1.0, -1.0), Point 2: (1.0, 1.0), Distance: 2.8284271247461903"
            },
            {
                input: "4\n0 0\n0 3\n4 0\n4 3",
                expected: "Point 1: (0.0, 0.0), Point 2: (4.0, 3.0), Distance: 5.0"
            }
        ]
    },
    {
        id: 36,
        type: "OOP",
        difficulty: "Medium",
        title: "#oop5. Kiểm tra loại tam giác từ 3 điểm",
        description: "Sử dụng lớp MyPoint để biểu diễn điểm trong mặt phẳng tọa độ với các thuộc tính x và y. Viết chương trình nhập vào 3 điểm, kiểm tra xem chúng có tạo thành một tam giác hay không, và nếu có, xác định loại tam giác (thường, vuông, cân, vuông cân, đều).",
        exe_input: "Ba dòng, mỗi dòng chứa hai số thực x và y biểu diễn tọa độ của một điểm.",
        exe_output: "Nếu 3 điểm không tạo thành tam giác, in ra 'Not a triangle'. Nếu tạo thành tam giác, in ra loại tam giác theo định dạng: 'Triangle <loại>'.",
        testCases: [
            {
                input: "0 0\n1 1\n2 2",
                expected: "Not a triangle"
            },
            {
                input: "0 0\n3 0\n0 4",
                expected: "Triangle right isosceles"
            },
            {
                input: "0 0\n1 0\n0 1",
                expected: "Triangle right"
            },
            {
                input: "0 0\n2 0\n1 1.7320508075688772",
                expected: "Triangle equilateral"
            },
            {
                input: "0 0\n2 0\n1 2",
                expected: "Triangle isosceles"
            },
            {
                input: "0 0\n3 0\n1 2",
                expected: "Triangle scalene"
            }
        ]
    },
    {
        id: 37,
        type: "OOP",
        difficulty: "Medium",
        title: "#oop6. Thực hiện các phép toán trên phân số",
        description: "Sử dụng lớp PhanSo để biểu diễn phân số với các thuộc tính tử số và mẫu số. Viết chương trình nhập vào hai phân số, tính tổng, hiệu, tích và thương của chúng, sau đó in kết quả dưới dạng bốn phân số rút gọn, cách nhau bởi dấu cách.",
        exe_input: "Hai dòng, mỗi dòng chứa hai số nguyên a và b (b khác 0) biểu diễn tử số và mẫu số của một phân số.",
        exe_output: "In ra bốn phân số rút gọn, mỗi phân số ở dạng 'a/b', cách nhau bởi dấu cách, lần lượt là tổng, hiệu, tích và thương của hai phân số.",
        testCases: [
            {
                input: "1 2\n1 3",
                expected: "5/6 1/6 1/6 3/2"
            },
            {
                input: "2 5\n3 7",
                expected: "29/35 -1/35 6/35 14/15"
            },
            {
                input: "-1 4\n1 2",
                expected: "1/4 -3/4 -1/8 -1/2"
            },
            {
                input: "3 8\n2 3",
                expected: "25/24 -7/24 1/4 9/16"
            },
            {
                input: "5 9\n-4 7",
                expected: "1/63 83/63 -20/63 -35/36"
            },
            {
                input: "-2 5\n-3 4",
                expected: "-23/20 7/20 3/10 8/15"
            }
        ]
    },
    {
        id: 38,
        type: "OOP",
        difficulty: "Medium",
        title: "#oop7. Thực hiện các phép toán trên số phức",
        description: "Sử dụng lớp SoPhuc để biểu diễn số phức với các thuộc tính phần thực và phần ảo. Viết chương trình nhập vào hai số phức, tính tổng, hiệu, tích và thương của chúng, sau đó in kết quả dưới dạng bốn số phức, mỗi số phức trên một dòng.",
        exe_input: "Hai dòng, mỗi dòng chứa hai số thực a và b biểu diễn phần thực và phần ảo của một số phức.",
        exe_output: "In ra bốn số phức, mỗi số phức trên một dòng, lần lượt là tổng, hiệu, tích và thương của hai số phức, theo định dạng 'a + bi' hoặc 'a - bi' tùy thuộc vào dấu của phần ảo.",
        testCases: [
            {
                input: "1 2\n3 4",
                expected: "4.0 + 6.0i\n-2.0 - 2.0i\n-5.0 + 10.0i\n0.44 + 0.08i"
            },
            {
                input: "2 -3\n-1 4",
                expected: "1.0 + 1.0i\n3.0 - 7.0i\n10.0 + 11.0i\n-0.7 - 0.1i"
            },
            {
                input: "0 1\n1 0",
                expected: "1.0 + 1.0i\n-1.0 + 1.0i\n0.0 + 1.0i\n0.0 + 1.0i"
            },
            {
                input: "-2 3\n2 -3",
                expected: "0.0 + 0.0i\n-4.0 + 6.0i\n5.0 + 12.0i\n-1.0 + 0.0i"
            },
            {
                input: "4 0\n0 4",
                expected: "4.0 + 4.0i\n4.0 - 4.0i\n0.0 + 16.0i\n0.0 - 1.0i"
            },
            {
                input: "1.5 -2.5\n-3.5 4.5",
                expected: "-2.0 + 2.0i\n5.0 - 7.0i\n5.0 + 17.0i\n-0.5 - 0.5i"
            }
        ]
    },
    {
        id: 39,
        type: "OOP",
        difficulty: "Medium",
        title: "#oop8. Quản lý mặt hàng và sắp xếp theo giá bán",
        description: "Xây dựng lớp MatHang với các thuộc tính: maHang (int), ten (String), nhom (String), giaBan (double). Mã hàng phải có đúng 4 chữ số, tên hàng không được để trống, nhóm hàng chỉ thuộc một trong các loại: 'hàng tiêu dùng', 'hàng thời trang', 'điện tử - điện lạnh', và giá bán phải lớn hơn 0. Viết chương trình nhập vào danh sách các mặt hàng, sau đó sắp xếp và in danh sách theo giá bán tăng dần.",
        exe_input: "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100) - số lượng mặt hàng. Tiếp theo là n dòng, mỗi dòng chứa thông tin về một mặt hàng theo định dạng: maHang,ten,nhom,giaBan.",
        exe_output: "In ra danh sách các mặt hàng sau khi sắp xếp theo giá bán tăng dần, mỗi mặt hàng trên một dòng theo định dạng: maHang ten nhom giaBan.",
        testCases: [
            {
                input: "3\n1001,Tủ lạnh,điện tử - điện lạnh,5000000\n1002,Áo sơ mi,hàng thời trang,300000\n1003,Bánh kẹo,hàngtiêu dùng,50000",
                expected: "1003 Bánh kẹo hàngtiêu dùng 50000.0\n1002 Áo sơ mi hàng thời trang 300000.0\n1001 Tủ lạnh điện tử - điện lạnh 5000000.0"
            },
            {
                input: "2\n1004,Máy giặt,điện tử - điện lạnh,7000000\n1005,Quần jeans,hàng thời trang,400000",
                expected: "1005 Quần jeans hàng thời trang 400000.0\n1004 Máy giặt điện tử - điện lạnh 7000000.0"
            },
            {
                input: "4\n1006,Tivi,điện tử - điện lạnh,8000000\n1007,Váy đầm,hàng thời trang,600000\n1008,Nồi cơm điện,điện tử - điện lạnh,1500000\n1009,Sữa tươi,hàng tiêu dùng,20000",
                expected: "1009 Sữa tươi hàng tiêu dùng 20000.0\n1007 Váy đầm hàng thời trang 600000.0\n1008 Nồi cơm điện điện tử - điện lạnh 1500000.0\n1006 Tivi điện tử - điện lạnh 8000000.0"
            },
            {
                input: "1\n1010,Bánh mì,hàng tiêu dùng,10000",
                expected: "1010 Bánh mì hàng tiêu dùng 10000.0"
            },
            {
                input: "5\n1011,Laptop,điện tử - điện lạnh,15000000\n1012,Giày thể thao,hàng thời trang,800000\n1013,Nước ngọt,hàng tiêu dùng,10000\n1014,Điều hòa,điện tử - điện lạnh,12000000\n1015,Mũ lưỡi trai,hàng thời trang,200000",
                expected: "1013 Nước ngọt hàng tiêu dùng 10000.0\n1015 Mũ lưỡi trai hàng thời trang 200000.0\n1012 Giày thể thao hàng thời trang 800000.0\n1014 Điều hòa điện tử - điện lạnh 12000000.0\n1011 Laptop điện tử - điện lạnh 15000000.0"
            },
            {
                input: "3\n1016,Bàn ủi,điện tử - điện lạnh,500000\n1017,Áo khoác,hàng thời trang,700000\n1018,Kem đánh răng,hàng tiêu dùng,30000",
                expected: "1018 Kem đánh răng hàng tiêu dùng 30000.0\n1016 Bàn ủi điện tử - điện lạnh 500000.0\n1017 Áo khoác hàng thời trang 700000.0"
            }
        ]
    },
    {
        "id": 40,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#inherit01. Quản lý hình học",
        "description": "Xây dựng lớp Shape và các lớp con Circle, Rectangle để tính diện tích. Lớp Circle có thuộc tính radius, lớp Rectangle có thuộc tính width và height.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 20). Tiếp theo là n dòng, mỗi dòng chứa loại hình và các tham số: Circle radius hoặc Rectangle width height.",
        "exe_output": "In ra danh sách hình cùng diện tích.",
        "testCases": [
            {
                "input": "2\nCircle 5\nRectangle 4 6",
                "expected": "Circle 78.54\nRectangle 24.00"
            },
            {
                "input": "3\nRectangle 3 7\nCircle 2\nCircle 10",
                "expected": "Rectangle 21.00\nCircle 12.57\nCircle 314.16"
            },
            {
                "input": "4\nCircle 3\nRectangle 2 5\nCircle 6\nRectangle 3 3",
                "expected": "Circle 28.27\nRectangle 10.00\nCircle 113.10\nRectangle 9.00"
            },
            {
                "input": "5\nCircle 1\nCircle 2\nRectangle 2 2\nRectangle 4 5\nCircle 10",
                "expected": "Circle 3.14\nCircle 12.57\nRectangle 4.00\nRectangle 20.00\nCircle 314.16"
            },
            {
                "input": "3\nRectangle 5 8\nRectangle 7 2\nCircle 4",
                "expected": "Rectangle 40.00\nRectangle 14.00\nCircle 50.27"
            },
            {
                "input": "2\nCircle 7\nRectangle 6 9",
                "expected": "Circle 153.94\nRectangle 54.00"
            },
            {
                "input": "4\nRectangle 10 10\nCircle 8\nRectangle 2 6\nCircle 3",
                "expected": "Rectangle 100.00\nCircle 201.06\nRectangle 12.00\nCircle 28.27"
            }
        ]
    },    
    {
        "id": 41,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#inherit02. Quản lý nhân viên",
        "description": "Xây dựng lớp Employee và các lớp con Manager, Worker. Lớp Manager có thuộc tính bonus, Worker có overtimeHours và hourlyRate.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 30). Tiếp theo là n dòng, mỗi dòng chứa thông tin nhân viên.",
        "exe_output": "In tổng lương của tất cả nhân viên.",
        "testCases": [
            {
                "input": "3\nManager John 60000 15000\nWorker Jane 35000 10 250\nWorker Emily 40000 15 300",
                "expected": "Total salary: 106500.00"
            },
            {
                "input": "4\nManager Mike 80000 20000\nManager Sarah 75000 18000\nWorker Tom 50000 25 150\nWorker Lucy 45000 30 100",
                "expected": "Total salary: 142500.00"
            },
            {
                "input": "2\nManager Anna 55000 12000\nWorker Peter 32000 40 50",
                "expected": "Total salary: 69000.00"
            },
            {
                "input": "5\nManager Harry 90000 30000\nWorker Sam 25000 35 80\nWorker Kate 40000 20 150\nManager Robert 85000 25000\nWorker Lily 50000 10 200",
                "expected": "Total salary: 192500.00"
            },
            {
                "input": "3\nManager Victoria 70000 20000\nWorker Chris 48000 15 120\nWorker Sophie 45000 25 80",
                "expected": "Total salary: 113300.00"
            }
        ] 
    },
    {
        "id": 42,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#inherit03. Quản lý xe",
        "description": "Xây dựng lớp Vehicle và các lớp con Car, Truck. Lớp Car có thuộc tính numberOfSeats, Truck có capacity.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin xe.",
        "exe_output": "Phân loại và in danh sách xe theo từng loại.",
        "testCases": [
            {
                "input": "3\nCar 001 Toyota 5\nTruck 002 Ford 10.5\nCar 003 Honda 4",
                "expected": "Cars:\n001 Toyota 5\n003 Honda 4\n\nTrucks:\n002 Ford 10.5"
            },
            {
                "input": "4\nCar 004 BMW 4\nTruck 005 Volvo 15\nCar 006 Audi 5\nTruck 007 Scania 12.5",
                "expected": "Cars:\n004 BMW 4\n006 Audi 5\n\nTrucks:\n005 Volvo 15\n007 Scania 12.5"
            },
            {
                "input": "2\nTruck 008 MAN 20\nCar 009 Tesla 4",
                "expected": "Cars:\n009 Tesla 4\n\nTrucks:\n008 MAN 20"
            },
            {
                "input": "5\nCar 010 Ford 5\nTruck 011 Mercedes 18\nCar 012 Hyundai 4\nTruck 013 Iveco 22.5\nCar 014 Kia 5",
                "expected": "Cars:\n010 Ford 5\n012 Hyundai 4\n014 Kia 5\n\nTrucks:\n011 Mercedes 18\n013 Iveco 22.5"
            },
            {
                "input": "3\nTruck 015 Renault 14\nTruck 016 Freightliner 25\nCar 017 Volkswagen 5",
                "expected": "Cars:\n017 Volkswagen 5\n\nTrucks:\n015 Renault 14\n016 Freightliner 25"
            },
            {
                "input": "6\nCar 018 Subaru 4\nTruck 019 Kenworth 30\nCar 020 Lexus 5\nTruck 021 DAF 18\nCar 022 Mazda 4\nTruck 023 Mack 24",
                "expected": "Cars:\n018 Subaru 4\n020 Lexus 5\n022 Mazda 4\n\nTrucks:\n019 Kenworth 30\n021 DAF 18\n023 Mack 24"
            },
            {
                "input": "1\nCar 024 Nissan 4",
                "expected": "Cars:\n024 Nissan 4\n\nTrucks:"
            }
        ]
    },
    {
        "id": 43,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#inherit04. Quản lý sách và tạp chí",
        "description": "Xây dựng lớp Publication và các lớp con Book, Magazine. Lớp Book có author, Magazine có issue.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin ấn phẩm.",
        "exe_output": "Sắp xếp và in danh sách theo giá tăng dần.",
        "testCases": [
            {
                "input": "3\nBook HarryPotter 20.5 J.K.Rowling\nMagazine Vogue 15.0 7\nBook LOTR 25.0 Tolkien",
                "expected": "Vogue 15.0 7\nHarryPotter 20.5 J.K.Rowling\nLOTR 25.0 Tolkien"
            },
            {
                "input": "4\nBook Dune 18.0 Herbert\nMagazine Time 10.0 15\nBook Foundation 22.0 Asimov\nMagazine Forbes 12.0 30",
                "expected": "Time 10.0 15\nForbes 12.0 30\nDune 18.0 Herbert\nFoundation 22.0 Asimov"
            },
            {
                "input": "2\nMagazine NationalGeographic 19.0 5\nBook 1984 15.0 Orwell",
                "expected": "1984 15.0 Orwell\nNationalGeographic 19.0 5"
            },
            {
                "input": "5\nBook ToKillAMockingbird 25.0 HarperLee\nMagazine People 20.0 10\nBook BraveNewWorld 30.0 Huxley\nMagazine ScientificAmerican 22.0 12\nBook TheGreatGatsby 18.0 Fitzgerald",
                "expected": "TheGreatGatsby 18.0 Fitzgerald\nPeople 20.0 10\nScientificAmerican 22.0 12\nToKillAMockingbird 25.0 HarperLee\nBraveNewWorld 30.0 Huxley"
            },
            {
                "input": "3\nMagazine SportsIllustrated 16.0 8\nBook CrimeAndPunishment 24.0 Dostoevsky\nMagazine Newsweek 14.0 3",
                "expected": "Newsweek 14.0 3\nSportsIllustrated 16.0 8\nCrimeAndPunishment 24.0 Dostoevsky"
            },
            {
                "input": "6\nBook WarAndPeace 40.0 Tolstoy\nMagazine Economist 30.0 50\nBook PrideAndPrejudice 28.0 Austen\nMagazine Fortune 25.0 40\nBook Catch22 35.0 Heller\nMagazine NewYorker 20.0 60",
                "expected": "NewYorker 20.0 60\nFortune 25.0 40\nPrideAndPrejudice 28.0 Austen\nEconomist 30.0 50\nCatch22 35.0 Heller\nWarAndPeace 40.0 Tolstoy"
            }
        ]  
    },
    {
        "id": 44,
        "type": "OOP",
        "difficulty": "Advanced",
        "title": "#inherit05. Quản lý đội xe vận tải",
        "description": "Xây dựng hệ thống quản lý các loại phương tiện trong đội xe vận tải gồm các lớp Vehicle, Car, Truck và Motorcycle. Lớp Car có thuộc tính numberOfSeats, Truck có capacity, và Motorcycle có engineDisplacement.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100). Tiếp theo là n dòng, mỗi dòng chứa thông tin phương tiện.",
        "exe_output": "Phân loại, sắp xếp phương tiện theo loại và in danh sách theo giá giảm dần trong từng loại.",
        "testCases": [
            {
                "input": "5\nCar 001 Toyota 20000 5\nTruck 002 Volvo 50000 20\nMotorcycle 003 Yamaha 10000 150\nCar 004 Honda 25000 4\nTruck 005 Scania 60000 25",
                "expected": "Cars:\n004 Honda 25000 4\n001 Toyota 20000 5\n\nTrucks:\n005 Scania 60000 25\n002 Volvo 50000 20\n\nMotorcycles:\n003 Yamaha 10000 150"
            },
            {
                "input": "6\nTruck 006 Freightliner 45000 30\nMotorcycle 007 Ducati 15000 1200\nCar 008 BMW 30000 4\nMotorcycle 009 Harley 20000 1600\nCar 010 Audi 28000 4\nTruck 011 Kenworth 55000 35",
                "expected": "Cars:\n008 BMW 30000 4\n010 Audi 28000 4\n\nTrucks:\n011 Kenworth 55000 35\n006 Freightliner 45000 30\n\nMotorcycles:\n009 Harley 20000 1600\n007 Ducati 15000 1200"
            },
            {
                "input": "4\nMotorcycle 012 Kawasaki 12000 650\nCar 013 Tesla 45000 5\nTruck 014 MAN 70000 40\nCar 015 Ford 22000 4",
                "expected": "Cars:\n013 Tesla 45000 5\n015 Ford 22000 4\n\nTrucks:\n014 MAN 70000 40\n\nMotorcycles:\n012 Kawasaki 12000 650"
            },
            {
                "input": "7\nCar 016 Mercedes 35000 4\nTruck 017 Iveco 60000 35\nMotorcycle 018 Suzuki 9000 200\nMotorcycle 019 Honda 12000 300\nTruck 020 Volvo 50000 25\nCar 021 Lexus 40000 5\nMotorcycle 022 Yamaha 15000 500",
                "expected": "Cars:\n021 Lexus 40000 5\n016 Mercedes 35000 4\n\nTrucks:\n017 Iveco 60000 35\n020 Volvo 50000 25\n\nMotorcycles:\n022 Yamaha 15000 500\n019 Honda 12000 300\n018 Suzuki 9000 200"
            },
            {
                "input": "5\nTruck 023 DAF 55000 30\nCar 024 Subaru 27000 5\nMotorcycle 025 Triumph 18000 650\nTruck 026 Freightliner 70000 40\nCar 027 Toyota 25000 4",
                "expected": "Cars:\n024 Subaru 27000 5\n027 Toyota 25000 4\n\nTrucks:\n026 Freightliner 70000 40\n023 DAF 55000 30\n\nMotorcycles:\n025 Triumph 18000 650"
            },
            {
                "input": "8\nMotorcycle 028 BMW 20000 800\nTruck 029 Mercedes 80000 50\nCar 030 Volkswagen 32000 4\nTruck 031 Volvo 75000 45\nCar 032 Kia 18000 4\nMotorcycle 033 Ducati 25000 1200\nTruck 034 Scania 90000 55\nCar 035 Hyundai 22000 5",
                "expected": "Cars:\n030 Volkswagen 32000 4\n035 Hyundai 22000 5\n032 Kia 18000 4\n\nTrucks:\n034 Scania 90000 55\n029 Mercedes 80000 50\n031 Volvo 75000 45\n\nMotorcycles:\n033 Ducati 25000 1200\n028 BMW 20000 800"
            }
        ]
    },
    {
        "id": 45,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#interface01. Quản lý các thiết bị điện",
        "description": "Xây dựng hệ thống quản lý các thiết bị điện trong nhà gồm các interface Appliance và các lớp con Light, Fan, và AirConditioner. Interface Appliance có phương thức abstract turnOn() và turnOff().",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin thiết bị (loại, tên, công suất).",
        "exe_output": "In danh sách thiết bị theo công suất giảm dần. Khi bật tất cả các thiết bị, tính tổng công suất tiêu thụ.",
        "testCases": [
            {
                "input": "3\nLight BedroomLight 60\nFan LivingRoomFan 75\nAirConditioner BedroomAC 1200",
                "expected": "Devices:\nBedroomAC 1200\nLivingRoomFan 75\nBedroomLight 60\nTotal power consumption: 1335"
            },
            {
                "input": "4\nLight KitchenLight 50\nFan DiningFan 90\nAirConditioner LivingRoomAC 1500\nAirConditioner MasterBedroomAC 2000",
                "expected": "Devices:\nMasterBedroomAC 2000\nLivingRoomAC 1500\nDiningFan 90\nKitchenLight 50\nTotal power consumption: 3640"
            },
            {
                "input": "5\nLight HallwayLight 40\nFan CeilingFan 80\nLight DeskLamp 25\nAirConditioner GuestRoomAC 1000\nAirConditioner OfficeAC 1800",
                "expected": "Devices:\nOfficeAC 1800\nGuestRoomAC 1000\nCeilingFan 80\nHallwayLight 40\nDeskLamp 25\nTotal power consumption: 2945"
            },
            {
                "input": "6\nFan OfficeFan 100\nAirConditioner KidsRoomAC 1200\nLight OutdoorLight 70\nFan GarageFan 150\nAirConditioner BasementAC 1700\nLight GardenLight 50",
                "expected": "Devices:\nBasementAC 1700\nKidsRoomAC 1200\nGarageFan 150\nOfficeFan 100\nOutdoorLight 70\nGardenLight 50\nTotal power consumption: 3270"
            },
            {
                "input": "3\nLight StudyLight 30\nAirConditioner MainHallAC 2000\nFan StudyFan 120",
                "expected": "Devices:\nMainHallAC 2000\nStudyFan 120\nStudyLight 30\nTotal power consumption: 2150"
            },
            {
                "input": "7\nLight BalconyLight 20\nFan KitchenFan 95\nAirConditioner SmallRoomAC 900\nLight ClosetLight 15\nFan BedroomFan 110\nAirConditioner LargeRoomAC 2200\nLight EntryLight 35",
                "expected": "Devices:\nLargeRoomAC 2200\nSmallRoomAC 900\nBedroomFan 110\nKitchenFan 95\nEntryLight 35\nBalconyLight 20\nClosetLight 15\nTotal power consumption: 3365"
            },
            {
                "input": "4\nAirConditioner OfficeRoomAC 1400\nLight OfficeLight 45\nFan ReceptionFan 125\nLight WaitingRoomLight 50",
                "expected": "Devices:\nOfficeRoomAC 1400\nReceptionFan 125\nWaitingRoomLight 50\nOfficeLight 45\nTotal power consumption: 1620"
            }
        ]
    },
    {
        "id": 46,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#interface02. Quản lý tài khoản ngân hàng",
        "description": "Xây dựng hệ thống quản lý tài khoản ngân hàng với interface Account và các lớp con SavingsAccount, CheckingAccount, và FixedDepositAccount. Interface Account có các phương thức abstract deposit(), withdraw(), và calculateInterest().",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin tài khoản (loại, số tài khoản, số dư, lãi suất).",
        "exe_output": "In danh sách tài khoản theo số dư giảm dần và tính tổng lãi suất hàng năm của tất cả tài khoản.",
        "testCases": [
            {
                "input": "3\nSavingsAccount 001 5000 3.5\nCheckingAccount 002 2000 0.5\nFixedDepositAccount 003 10000 5",
                "expected": "Accounts:\n003 10000 5\n001 5000 3.5\n002 2000 0.5\nTotal annual interest: 475"
            },
            {
                "input": "4\nSavingsAccount 004 8000 4\nFixedDepositAccount 005 15000 6\nCheckingAccount 006 3000 1\nSavingsAccount 007 7000 3",
                "expected": "Accounts:\n005 15000 6\n004 8000 4\n007 7000 3\n006 3000 1\nTotal annual interest: 1250"
            },
            {
                "input": "5\nFixedDepositAccount 008 20000 5\nSavingsAccount 009 10000 4\nCheckingAccount 010 5000 0.5\nSavingsAccount 011 15000 3.5\nFixedDepositAccount 012 30000 6",
                "expected": "Accounts:\n012 30000 6\n008 20000 5\n011 15000 3.5\n009 10000 4\n010 5000 0.5\nTotal annual interest: 3550"
            },
            {
                "input": "6\nSavingsAccount 013 4000 2\nCheckingAccount 014 1000 0.5\nFixedDepositAccount 015 12000 4\nSavingsAccount 016 6000 3\nFixedDepositAccount 017 25000 5.5\nCheckingAccount 018 2000 0.8",
                "expected": "Accounts:\n017 25000 5.5\n015 12000 4\n016 6000 3\n013 4000 2\n018 2000 0.8\n014 1000 0.5\nTotal annual interest: 1920"
            },
            {
                "input": "2\nFixedDepositAccount 019 50000 7\nSavingsAccount 020 20000 5",
                "expected": "Accounts:\n019 50000 7\n020 20000 5\nTotal annual interest: 4400"
            },
            {
                "input": "4\nCheckingAccount 021 4000 0.3\nSavingsAccount 022 10000 4.5\nFixedDepositAccount 023 25000 6\nSavingsAccount 024 15000 3",
                "expected": "Accounts:\n023 25000 6\n024 15000 3\n022 10000 4.5\n021 4000 0.3\nTotal annual interest: 1820"
            }
        ]
    },
    {
        "id": 47,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#interface03. Quản lý hệ thống thanh toán",
        "description": "Xây dựng hệ thống quản lý thanh toán gồm interface PaymentMethod và các lớp con CreditCard, PayPal, và BankTransfer. Interface PaymentMethod có các phương thức abstract processPayment(), refund(), và getBalance().",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin thanh toán (loại, tên tài khoản, số tiền, trạng thái giao dịch).",
        "exe_output": "In danh sách giao dịch theo trạng thái và loại thanh toán, kèm thông tin chi tiết.",
        "testCases": [
            {
                "input": "3\nCreditCard JohnDoe 1000 Completed\nPayPal Alice 500 Pending\nBankTransfer Bob 200 Completed",
                "expected": "Transactions:\nCreditCard:\nJohnDoe 1000 Completed\nPayPal:\nAlice 500 Pending\nBankTransfer:\nBob 200 Completed"
            },
            {
                "input": "4\nCreditCard Jane 1500 Pending\nPayPal Bob 300 Completed\nBankTransfer Alice 700 Pending\nCreditCard John 800 Completed",
                "expected": "Transactions:\nCreditCard:\nJohn 800 Completed\nJane 1500 Pending\nPayPal:\nBob 300 Completed\nBankTransfer:\nAlice 700 Pending"
            },
            {
                "input": "5\nPayPal John 400 Completed\nCreditCard Alice 1200 Completed\nBankTransfer Bob 500 Pending\nCreditCard Jane 700 Completed\nPayPal Alice 200 Pending",
                "expected": "Transactions:\nCreditCard:\nAlice 1200 Completed\nJane 700 Completed\nPayPal:\nJohn 400 Completed\nAlice 200 Pending\nBankTransfer:\nBob 500 Pending"
            },
            {
                "input": "6\nCreditCard Michael 2000 Completed\nPayPal Sarah 300 Pending\nBankTransfer Alice 1500 Completed\nPayPal David 100 Pending\nCreditCard Jessica 800 Pending\nBankTransfer Bob 1200 Completed",
                "expected": "Transactions:\nCreditCard:\nMichael 2000 Completed\nJessica 800 Pending\nPayPal:\nSarah 300 Pending\nDavid 100 Pending\nBankTransfer:\nAlice 1500 Completed\nBob 1200 Completed"
            },
            {
                "input": "2\nCreditCard Emily 700 Pending\nBankTransfer Mark 1000 Completed",
                "expected": "Transactions:\nCreditCard:\nEmily 700 Pending\nBankTransfer:\nMark 1000 Completed"
            },
            {
                "input": "4\nPayPal Chris 400 Completed\nBankTransfer Natalie 800 Pending\nCreditCard Olivia 1500 Completed\nCreditCard Ethan 600 Pending",
                "expected": "Transactions:\nCreditCard:\nOlivia 1500 Completed\nEthan 600 Pending\nPayPal:\nChris 400 Completed\nBankTransfer:\nNatalie 800 Pending"
            }
        ]
    },
    {
        "id": 48,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#interface04. Quản lý các phương tiện giao thông",
        "description": "Xây dựng hệ thống quản lý phương tiện giao thông gồm interface Vehicle và các lớp con Car, Bike, và Bus. Interface Vehicle có các phương thức abstract startEngine(), stopEngine(), và getDetails().",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin phương tiện (loại, tên phương tiện, số ghế, trạng thái hoạt động).",
        "exe_output": "In danh sách phương tiện theo trạng thái và loại phương tiện, kèm thông tin chi tiết.",
        "testCases": [
            {
                "input": "3\nCar Sedan 4 Running\nBike MountainBike 1 Stopped\nBus CityBus 50 Running",
                "expected": "Vehicles:\nCar:\nSedan 4 Running\nBus:\nCityBus 50 Running\nBike:\nMountainBike 1 Stopped"
            },
            {
                "input": "4\nCar SUV 7 Running\nBike RoadBike 1 Running\nBus SchoolBus 40 Stopped\nCar Coupe 2 Stopped",
                "expected": "Vehicles:\nCar:\nSUV 7 Running\nCoupe 2 Stopped\nBike:\nRoadBike 1 Running\nBus:\nSchoolBus 40 Stopped"
            },
            {
                "input": "5\nBus IntercityBus 60 Running\nBike ElectricBike 1 Stopped\nCar Hatchback 5 Running\nBus Minibus 20 Stopped\nCar Convertible 2 Running",
                "expected": "Vehicles:\nCar:\nHatchback 5 Running\nConvertible 2 Running\nBus:\nIntercityBus 60 Running\nMinibus 20 Stopped\nBike:\nElectricBike 1 Stopped"
            },
            {
                "input": "6\nCar LuxuryCar 5 Running\nBike Scooter 2 Stopped\nBus DoubleDecker 80 Running\nCar CompactCar 4 Stopped\nBus ShuttleBus 25 Running\nBike TouringBike 1 Running",
                "expected": "Vehicles:\nCar:\nLuxuryCar 5 Running\nCompactCar 4 Stopped\nBike:\nTouringBike 1 Running\nScooter 2 Stopped\nBus:\nDoubleDecker 80 Running\nShuttleBus 25 Running"
            },
            {
                "input": "2\nBike BMX 1 Stopped\nCar ElectricCar 5 Running",
                "expected": "Vehicles:\nCar:\nElectricCar 5 Running\nBike:\nBMX 1 Stopped"
            },
            {
                "input": "4\nBus TouristBus 55 Running\nCar Sedan 4 Stopped\nBike Cruiser 1 Running\nBus AirportShuttle 30 Stopped",
                "expected": "Vehicles:\nCar:\nSedan 4 Stopped\nBike:\nCruiser 1 Running\nBus:\nTouristBus 55 Running\nAirportShuttle 30 Stopped"
            }
        ]
    },
    {
        "id": 49,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#mulInherit01. Quản lý nhân viên đa vai trò",
        "description": "Xây dựng hệ thống quản lý nhân viên với các lớp BaseEmployee, Manager, và Developer. Lớp Manager và Developer kế thừa BaseEmployee và có các thuộc tính, phương thức riêng. Một số nhân viên có thể vừa là Manager vừa là Developer (đa vai trò).",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin nhân viên (loại, tên, mức lương, thông tin đặc thù).",
        "exe_output": "In danh sách nhân viên theo mức lương giảm dần, kèm thông tin đặc thù của họ.",
        "testCases": [
            {
                "input": "3\nManager Alice 8000 TeamSize:5\nDeveloper Bob 7000 ProgrammingLanguage:Python\nManagerDeveloper Charlie 10000 TeamSize:3,ProgrammingLanguage:Java",
                "expected": "Employees:\nCharlie 10000 TeamSize:3,ProgrammingLanguage:Java\nAlice 8000 TeamSize:5\nBob 7000 ProgrammingLanguage:Python"
            },
            {
                "input": "4\nManager David 9000 TeamSize:7\nDeveloper Eva 6500 ProgrammingLanguage:JavaScript\nManagerDeveloper Frank 12000 TeamSize:4,ProgrammingLanguage:C++\nDeveloper Grace 7000 ProgrammingLanguage:Ruby",
                "expected": "Employees:\nFrank 12000 TeamSize:4,ProgrammingLanguage:C++\nDavid 9000 TeamSize:7\nGrace 7000 ProgrammingLanguage:Ruby\nEva 6500 ProgrammingLanguage:JavaScript"
            },
            {
                "input": "5\nManager Henry 8500 TeamSize:6\nDeveloper Iris 7500 ProgrammingLanguage:PHP\nManagerDeveloper Jack 11000 TeamSize:5,ProgrammingLanguage:Python\nDeveloper Kate 7200 ProgrammingLanguage:Java\nManager Liam 9500 TeamSize:8",
                "expected": "Employees:\nJack 11000 TeamSize:5,ProgrammingLanguage:Python\nLiam 9500 TeamSize:8\nHenry 8500 TeamSize:6\nIris 7500 ProgrammingLanguage:PHP\nKate 7200 ProgrammingLanguage:Java"
            },
            {
                "input": "6\nManagerDeveloper Mia 12500 TeamSize:10,ProgrammingLanguage:Go\nDeveloper Noah 7700 ProgrammingLanguage:Swift\nManager Oliver 9100 TeamSize:9\nManagerDeveloper Penelope 10500 TeamSize:6,ProgrammingLanguage:Rust\nDeveloper Quinn 6800 ProgrammingLanguage:Kotlin\nManager Rachel 9700 TeamSize:7",
                "expected": "Employees:\nMia 12500 TeamSize:10,ProgrammingLanguage:Go\nPenelope 10500 TeamSize:6,ProgrammingLanguage:Rust\nRachel 9700 TeamSize:7\nOliver 9100 TeamSize:9\nNoah 7700 ProgrammingLanguage:Swift\nQuinn 6800 ProgrammingLanguage:Kotlin"
            },
            {
                "input": "2\nManager Sophie 8800 TeamSize:8\nDeveloper Thomas 7200 ProgrammingLanguage:Scala",
                "expected": "Employees:\nSophie 8800 TeamSize:8\nThomas 7200 ProgrammingLanguage:Scala"
            },
            {
                "input": "4\nManager Uma 9400 TeamSize:12\nManagerDeveloper Victor 13000 TeamSize:8,ProgrammingLanguage:Perl\nDeveloper William 8000 ProgrammingLanguage:Rust\nManager Xander 9700 TeamSize:10",
                "expected": "Employees:\nVictor 13000 TeamSize:8,ProgrammingLanguage:Perl\nXander 9700 TeamSize:10\nUma 9400 TeamSize:12\nWilliam 8000 ProgrammingLanguage:Rust"
            }
        ]
    },
    {
        "id": 50,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#mulInherit02. Quản lý vai trò phức hợp",
        "description": "Xây dựng hệ thống quản lý vai trò phức hợp với các lớp BaseRole, Teacher, Researcher và TeacherResearcher. Lớp Teacher và Researcher kế thừa BaseRole. TeacherResearcher kế thừa cả Teacher và Researcher.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin nhân viên (loại, tên, chuyên ngành hoặc lĩnh vực nghiên cứu, số giờ giảng dạy hoặc số bài báo).",
        "exe_output": "In danh sách nhân viên theo loại vai trò và in thông tin chi tiết.",
        "testCases": [
            {
                "input": "3\nTeacher Alice Mathematics 20\nResearcher Bob AI 15\nTeacherResearcher Charlie Physics 10,QuantumComputing 5",
                "expected": "Roles:\nTeacher:\nAlice Mathematics 20\nResearcher:\nBob AI 15\nTeacherResearcher:\nCharlie Physics 10,QuantumComputing 5"
            },
            {
                "input": "4\nTeacher David Chemistry 18\nResearcher Eva MachineLearning 12\nTeacherResearcher Frank Biology 15,Genomics 8\nTeacher Grace ComputerScience 22",
                "expected": "Roles:\nTeacher:\nDavid Chemistry 18\nGrace ComputerScience 22\nResearcher:\nEva MachineLearning 12\nTeacherResearcher:\nFrank Biology 15,Genomics 8"
            },
            {
                "input": "5\nTeacher Henry Literature 16\nResearcher Iris Robotics 20\nTeacherResearcher Jack Economics 12,BehavioralScience 7\nTeacher Kate History 14\nResearcher Liam Cybersecurity 10",
                "expected": "Roles:\nTeacher:\nHenry Literature 16\nKate History 14\nResearcher:\nIris Robotics 20\nLiam Cybersecurity 10\nTeacherResearcher:\nJack Economics 12,BehavioralScience 7"
            },
            {
                "input": "6\nTeacher Michael Physics 20\nResearcher Nina Astronomy 15\nTeacherResearcher Oscar Mathematics 10,QuantumPhysics 6\nTeacher Olivia Art 18\nResearcher Paul Neuroscience 11\nTeacherResearcher Quinn Biology 12,Ecology 5",
                "expected": "Roles:\nTeacher:\nMichael Physics 20\nOlivia Art 18\nResearcher:\nNina Astronomy 15\nPaul Neuroscience 11\nTeacherResearcher:\nOscar Mathematics 10,QuantumPhysics 6\nQuinn Biology 12,Ecology 5"
            },
            {
                "input": "2\nTeacherResearcher Rachel Chemistry 14,AnalyticalChemistry 7\nResearcher Sam DataScience 9",
                "expected": "Roles:\nResearcher:\nSam DataScience 9\nTeacherResearcher:\nRachel Chemistry 14,AnalyticalChemistry 7"
            },
            {
                "input": "4\nTeacher Tom Philosophy 12\nResearcher Ursula CognitiveScience 13\nTeacherResearcher Victor Sociology 11,SocialNetworks 4\nTeacher Wendy Music 17",
                "expected": "Roles:\nTeacher:\nTom Philosophy 12\nWendy Music 17\nResearcher:\nUrsula CognitiveScience 13\nTeacherResearcher:\nVictor Sociology 11,SocialNetworks 4"
            }
        ]
    },
    {
        "id": 51,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#abstract01. Quản lý động vật trong vườn thú",
        "description": "Xây dựng hệ thống quản lý các loài động vật trong vườn thú. Sử dụng lớp trừu tượng Animal để làm lớp cha, các lớp Dog, Cat, và Bird kế thừa từ Animal. Các lớp này phải ghi đè phương thức abstract từ lớp cha và triển khai các hành vi đặc trưng của chúng.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin về động vật (type, name, age, characteristic behavior).",
        "exe_output": "In danh sách các loài động vật theo từng loại và chi tiết thông tin của chúng.",
        "testCases": [
            {
                "input": "3\nDog Max 3 Barking\nCat Luna 2 Purring\nBird Tweety 1 Singing",
                "expected": "Animals:\nDog:\nMax 3 Barking\nCat:\nLuna 2 Purring\nBird:\nTweety 1 Singing"
            },
            {
                "input": "4\nDog Bella 5 Guarding\nCat Kitty 4 Sleeping\nBird Polly 2 Talking\nDog Rocky 6 Running",
                "expected": "Animals:\nDog:\nBella 5 Guarding\nRocky 6 Running\nCat:\nKitty 4 Sleeping\nBird:\nPolly 2 Talking"
            },
            {
                "input": "2\nCat Simba 3 Jumping\nBird Kiwi 1 Flying",
                "expected": "Animals:\nCat:\nSimba 3 Jumping\nBird:\nKiwi 1 Flying"
            },
            {
                "input": "5\nDog Buddy 4 Fetching\nDog Charlie 6 Barking\nCat Molly 3 Climbing\nBird Sunny 2 Chirping\nBird Sky 3 Soaring",
                "expected": "Animals:\nDog:\nBuddy 4 Fetching\nCharlie 6 Barking\nCat:\nMolly 3 Climbing\nBird:\nSunny 2 Chirping\nSky 3 Soaring"
            },
            {
                "input": "6\nCat Oscar 2 Scratching\nDog Lucy 5 Herding\nBird Coco 3 Mimicking\nDog Rex 7 Jumping\nCat Daisy 4 Playing\nBird Robin 1 Singing",
                "expected": "Animals:\nDog:\nLucy 5 Herding\nRex 7 Jumping\nCat:\nOscar 2 Scratching\nDaisy 4 Playing\nBird:\nCoco 3 Mimicking\nRobin 1 Singing"
            }
        ]
    },
    {
        "id": 52,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#abstract02. Quản lý phương tiện giao thông",
        "description": "Xây dựng hệ thống quản lý các phương tiện giao thông. Sử dụng lớp trừu tượng Vehicle làm lớp cha, các lớp Car, Motorbike, và Bicycle kế thừa từ Vehicle. Các lớp này phải ghi đè phương thức abstract từ lớp cha và triển khai các thuộc tính/hành vi đặc trưng.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50). Tiếp theo là n dòng, mỗi dòng chứa thông tin về phương tiện (type, name, speed, special feature).",
        "exe_output": "In danh sách các phương tiện theo từng loại và chi tiết thông tin của chúng.",
        "testCases": [
            {
                "input": "3\nCar Tesla 120 Electric\nMotorbike Yamaha 90 Sport\nBicycle Giant 30 Mountain",
                "expected": "Vehicles:\nCar:\nTesla 120 Electric\nMotorbike:\nYamaha 90 Sport\nBicycle:\nGiant 30 Mountain"
            },
            {
                "input": "4\nCar BMW 150 Luxury\nBicycle Trek 25 Hybrid\nCar Audi 130 Sedan\nMotorbike Ducati 200 Racing",
                "expected": "Vehicles:\nCar:\nBMW 150 Luxury\nAudi 130 Sedan\nMotorbike:\nDucati 200 Racing\nBicycle:\nTrek 25 Hybrid"
            },
            {
                "input": "2\nBicycle Merida 20 Road\nMotorbike Honda 100 Cruiser",
                "expected": "Vehicles:\nMotorbike:\nHonda 100 Cruiser\nBicycle:\nMerida 20 Road"
            },
            {
                "input": "5\nCar Ford 140 SUV\nMotorbike Kawasaki 180 Adventure\nBicycle Cannondale 28 Gravel\nCar Chevrolet 130 Compact\nBicycle Scott 22 Urban",
                "expected": "Vehicles:\nCar:\nFord 140 SUV\nChevrolet 130 Compact\nMotorbike:\nKawasaki 180 Adventure\nBicycle:\nCannondale 28 Gravel\nScott 22 Urban"
            },
            {
                "input": "6\nMotorbike Harley 120 Classic\nCar Mercedes 160 Coupe\nBicycle Specialized 26 Trail\nCar Porsche 180 Sport\nBicycle Giant 25 City\nMotorbike KTM 140 Offroad",
                "expected": "Vehicles:\nCar:\nMercedes 160 Coupe\nPorsche 180 Sport\nMotorbike:\nHarley 120 Classic\nKTM 140 Offroad\nBicycle:\nSpecialized 26 Trail\nGiant 25 City"
            },
            {
                "input": "4\nCar Volvo 110 Safe\nMotorbike Suzuki 95 Touring\nBicycle Polygon 24 Cruiser\nCar Hyundai 100 Family",
                "expected": "Vehicles:\nCar:\nVolvo 110 Safe\nHyundai 100 Family\nMotorbike:\nSuzuki 95 Touring\nBicycle:\nPolygon 24 Cruiser"
            }
        ]
    },
    {
        "id": 53,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#abstract03. Quản lý thư viện sách",
        "description": "Xây dựng hệ thống quản lý sách trong thư viện. Sử dụng lớp trừu tượng Book làm lớp cha, các lớp Fiction, NonFiction, và ReferenceBook kế thừa từ Book. Mỗi loại sách có các thuộc tính và hành vi riêng, cần triển khai phù hợp.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100). Tiếp theo là n dòng, mỗi dòng chứa thông tin về sách (type, title, author, price, additional info).",
        "exe_output": "In danh sách các sách theo từng loại và chi tiết thông tin của chúng.",
        "testCases": [
            {
                "input": "3\nFiction Dune FrankHerbert 15.99 SciFi\nNonFiction Sapiens YuvalNoahHarari 20.00 History\nReferenceBook OxfordDictionary OxfordPress 45.00 English",
                "expected": "Books:\nFiction:\nDune FrankHerbert 15.99 SciFi\nNonFiction:\nSapiens YuvalNoahHarari 20.00 History\nReferenceBook:\nOxfordDictionary OxfordPress 45.00 English"
            },
            {
                "input": "4\nFiction TheHobbit JRRRTolkien 12.99 Fantasy\nNonFiction TheSelfishGene RichardDawkins 18.50 Biology\nReferenceBook Encyclopedia Britannica 60.00 General\nFiction HarryPotter JKRowling 10.99 Fantasy",
                "expected": "Books:\nFiction:\nTheHobbit JRRRTolkien 12.99 Fantasy\nHarryPotter JKRowling 10.99 Fantasy\nNonFiction:\nTheSelfishGene RichardDawkins 18.50 Biology\nReferenceBook:\nEncyclopedia Britannica 60.00 General"
            },
            {
                "input": "2\nFiction Dracula BramStoker 14.00 Horror\nReferenceBook Atlas NationalGeographic 50.00 Geography",
                "expected": "Books:\nFiction:\nDracula BramStoker 14.00 Horror\nReferenceBook:\nAtlas NationalGeographic 50.00 Geography"
            },
            {
                "input": "5\nNonFiction Cosmos CarlSagan 22.00 Astronomy\nReferenceBook Thesaurus MerriamWebster 35.00 Writing\nFiction Frankenstein MaryShelley 9.99 Gothic\nFiction TheGreatGatsby FScottFitzgerald 13.50 Classic\nReferenceBook ManualOfStyle ChicagoPress 40.00 Editing",
                "expected": "Books:\nFiction:\nFrankenstein MaryShelley 9.99 Gothic\nTheGreatGatsby FScottFitzgerald 13.50 Classic\nNonFiction:\nCosmos CarlSagan 22.00 Astronomy\nReferenceBook:\nThesaurus MerriamWebster 35.00 Writing\nManualOfStyle ChicagoPress 40.00 Editing"
            },
            {
                "input": "6\nFiction BraveNewWorld AldousHuxley 11.50 Dystopian\nNonFiction HomoDeus YuvalNoahHarari 21.00 Future\nReferenceBook WorldAtlas Collins 55.00 Maps\nFiction 1984 GeorgeOrwell 12.99 Dystopian\nNonFiction ThinkingFastAndSlow DanielKahneman 19.99 Psychology\nReferenceBook GrammarGuide Cambridge 30.00 Language",
                "expected": "Books:\nFiction:\nBraveNewWorld AldousHuxley 11.50 Dystopian\n1984 GeorgeOrwell 12.99 Dystopian\nNonFiction:\nHomoDeus YuvalNoahHarari 21.00 Future\nThinkingFastAndSlow DanielKahneman 19.99 Psychology\nReferenceBook:\nWorldAtlas Collins 55.00 Maps\nGrammarGuide Cambridge 30.00 Language"
            },
            {
                "input": "4\nFiction AnimalFarm GeorgeOrwell 9.50 Political\nNonFiction BriefHistoryOfTime StephenHawking 20.00 Science\nFiction ToKillAMockingbird HarperLee 14.99 Classic\nReferenceBook StyleGuide MLA 25.00 Academic",
                "expected": "Books:\nFiction:\nAnimalFarm GeorgeOrwell 9.50 Political\nToKillAMockingbird HarperLee 14.99 Classic\nNonFiction:\nBriefHistoryOfTime StephenHawking 20.00 Science\nReferenceBook:\nStyleGuide MLA 25.00 Academic"
            }
        ]
    },    
    {
        "id": 54,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#abstract04. Quản lý nhân viên công ty",
        "description": "Xây dựng hệ thống quản lý nhân viên trong công ty. Sử dụng lớp trừu tượng Employee làm lớp cha, các lớp Developer, Manager, và Intern kế thừa từ Employee. Mỗi loại nhân viên có các thuộc tính và hành vi đặc trưng riêng.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100). Tiếp theo là n dòng, mỗi dòng chứa thông tin về nhân viên (type, name, age, salary, additional info).",
        "exe_output": "In danh sách nhân viên theo từng loại và chi tiết thông tin của họ.",
        "testCases": [
            {
                "input": "3\nDeveloper Alice 30 80000 Java\nManager Bob 45 100000 HR\nIntern Charlie 20 15000 University",
                "expected": "Employees:\nDeveloper:\nAlice 30 80000.0 Java\nManager:\nBob 45 100000.0 HR\nIntern:\nCharlie 20 15000.0 University"
            },
            {
                "input": "4\nDeveloper David 28 85000 Python\nManager Eva 40 120000 Finance\nIntern Frank 22 20000 College\nDeveloper Grace 35 95000 C++",
                "expected": "Employees:\nDeveloper:\nDavid 28 85000.0 Python\nGrace 35 95000.0 C++\nManager:\nEva 40 120000.0 Finance\nIntern:\nFrank 22 20000.0 College"
            },
            {
                "input": "2\nIntern Henry 21 18000 HighSchool\nDeveloper Ivy 25 70000 JavaScript",
                "expected": "Employees:\nDeveloper:\nIvy 25 70000.0 JavaScript\nIntern:\nHenry 21 18000.0 HighSchool"
            },
            {
                "input": "5\nManager Jack 50 130000 Operations\nDeveloper Kelly 27 78000 PHP\nIntern Leo 23 16000 Training\nManager Megan 42 125000 Marketing\nDeveloper Nancy 31 90000 Ruby",
                "expected": "Employees:\nDeveloper:\nKelly 27 78000.0 PHP\nNancy 31 90000.0 Ruby\nManager:\nJack 50 130000.0 Operations\nMegan 42 125000.0 Marketing\nIntern:\nLeo 23 16000.0 Training"
            },
            {
                "input": "6\nDeveloper Oscar 29 87000 Kotlin\nManager Pam 39 115000 Sales\nIntern Quinn 20 14000 Internship\nDeveloper Ryan 26 80000 Swift\nManager Sarah 45 135000 Strategy\nIntern Thomas 24 17000 Graduate",
                "expected": "Employees:\nDeveloper:\nOscar 29 87000.0 Kotlin\nRyan 26 80000.0 Swift\nManager:\nPam 39 115000.0 Sales\nSarah 45 135000.0 Strategy\nIntern:\nQuinn 20 14000.0 Internship\nThomas 24 17000.0 Graduate"
            },
            {
                "input": "4\nDeveloper Uma 33 89000 Go\nManager Victor 48 125000 Logistics\nIntern Wendy 22 15000 Apprenticeship\nManager Xavier 50 140000 R&D",
                "expected": "Employees:\nDeveloper:\nUma 33 89000.0 Go\nManager:\nVictor 48 125000.0 Logistics\nXavier 50 140000.0 R&D\nIntern:\nWendy 22 15000.0 Apprenticeship"
            }
        ]
    },
    {
        "id": 55,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#abstract05. Quản lý khóa học trực tuyến",
        "description": "Xây dựng hệ thống quản lý các khóa học trực tuyến. Sử dụng lớp trừu tượng Course làm lớp cha, các lớp ProgrammingCourse, DesignCourse, và MarketingCourse kế thừa từ Course. Mỗi loại khóa học có các thuộc tính và hành vi đặc trưng riêng.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100). Tiếp theo là n dòng, mỗi dòng chứa thông tin về khóa học (type, courseName, instructor, duration, additional info).",
        "exe_output": "In danh sách các khóa học theo từng loại và chi tiết thông tin của chúng.",
        "testCases": [
            {
                "input": "3\nProgrammingCourse JavaProgramming Alice 40 Beginner\nDesignCourse GraphicDesign Bob 30 Photoshop\nMarketingCourse DigitalMarketing Charlie 35 SocialMedia",
                "expected": "Courses:\nProgrammingCourse:\nJavaProgramming Alice 40 Beginner\nDesignCourse:\nGraphicDesign Bob 30 Photoshop\nMarketingCourse:\nDigitalMarketing Charlie 35 SocialMedia"
            },
            {
                "input": "4\nProgrammingCourse PythonProgramming David 50 Intermediate\nDesignCourse UXDesign Eva 25 Figma\nMarketingCourse ContentMarketing Frank 30 Blogging\nProgrammingCourse WebDevelopment Grace 45 Advanced",
                "expected": "Courses:\nProgrammingCourse:\nPythonProgramming David 50 Intermediate\nWebDevelopment Grace 45 Advanced\nDesignCourse:\nUXDesign Eva 25 Figma\nMarketingCourse:\nContentMarketing Frank 30 Blogging"
            },
            {
                "input": "2\nDesignCourse Illustration Henry 20 AdobeIllustrator\nProgrammingCourse CProgramming Ivy 35 Beginner",
                "expected": "Courses:\nProgrammingCourse:\nCProgramming Ivy 35 Beginner\nDesignCourse:\nIllustration Henry 20 AdobeIllustrator"
            },
            {
                "input": "5\nMarketingCourse SEOOptimization Jack 30 GoogleTools\nProgrammingCourse DataScience Kelly 60 Advanced\nDesignCourse Animation Leo 40 Maya\nProgrammingCourse MachineLearning Megan 55 Advanced\nMarketingCourse AffiliateMarketing Nora 25 ECommerce",
                "expected": "Courses:\nProgrammingCourse:\nDataScience Kelly 60 Advanced\nMachineLearning Megan 55 Advanced\nDesignCourse:\nAnimation Leo 40 Maya\nMarketingCourse:\nSEOOptimization Jack 30 GoogleTools\nAffiliateMarketing Nora 25 ECommerce"
            },
            {
                "input": "6\nProgrammingCourse KotlinProgramming Oscar 35 Intermediate\nDesignCourse WebDesign Pam 20 HTMLCSS\nMarketingCourse EmailMarketing Quinn 30 CRMTools\nProgrammingCourse MobileAppDevelopment Ryan 50 Advanced\nMarketingCourse BrandManagement Sarah 40 Branding\nDesignCourse Typography Thomas 15 Fonts",
                "expected": "Courses:\nProgrammingCourse:\nKotlinProgramming Oscar 35 Intermediate\nMobileAppDevelopment Ryan 50 Advanced\nDesignCourse:\nWebDesign Pam 20 HTMLCSS\nTypography Thomas 15 Fonts\nMarketingCourse:\nEmailMarketing Quinn 30 CRMTools\nBrandManagement Sarah 40 Branding"
            },
            {
                "input": "4\nProgrammingCourse GameDevelopment Uma 70 Unity\nDesignCourse InteriorDesign Victor 45 SketchUp\nMarketingCourse PublicRelations Wendy 35 Communication\nProgrammingCourse DevOps Xavier 40 Cloud",
                "expected": "Courses:\nProgrammingCourse:\nGameDevelopment Uma 70 Unity\nDevOps Xavier 40 Cloud\nDesignCourse:\nInteriorDesign Victor 45 SketchUp\nMarketingCourse:\nPublicRelations Wendy 35 Communication"
            }
        ]
    },
    {
        "id": 56,
        "type": "OOP",
        "difficulty": "Advanced",
        "title": "#abstract06. Quản lý hệ thống đặt vé máy bay",
        "description": "Xây dựng hệ thống quản lý đặt vé máy bay. Sử dụng lớp trừu tượng Ticket làm lớp cha, các lớp EconomyTicket, BusinessTicket, và FirstClassTicket kế thừa từ Ticket. Mỗi loại vé có các thuộc tính và hành vi đặc trưng riêng. Hệ thống cần hỗ trợ chức năng tìm kiếm vé theo mã chuyến bay hoặc giá vé tối thiểu.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100), số lượng vé. Tiếp theo là n dòng, mỗi dòng chứa thông tin vé (type, flightCode, passengerName, price, additional info). Dòng cuối cùng chứa truy vấn (searchType, searchValue).",
        "exe_output": "In danh sách các vé thỏa mãn truy vấn (nếu có) hoặc thông báo không tìm thấy.",
        "testCases": [
            {
                "input": "3\nEconomyTicket VN123 John 100 CheckedBag\nBusinessTicket VN124 Alice 300 LoungeAccess\nFirstClassTicket VN125 Bob 1000 PrivateSuite\nflightCode VN124",
                "expected": "Tickets:\nVN124 Alice 300 LoungeAccess"
            },
            {
                "input": "4\nEconomyTicket VN201 David 120 ExtraLegroom\nBusinessTicket VN202 Eva 400 PriorityBoarding\nFirstClassTicket VN203 Frank 1500 ChauffeurService\nEconomyTicket VN204 Grace 80 WindowSeat\nprice 300",
                "expected": "Tickets:\nVN201 David 120 ExtraLegroom\nVN204 Grace 80 WindowSeat"
            },
            {
                "input": "2\nFirstClassTicket VN301 Charlie 2000 PremiumDining\nEconomyTicket VN302 Kelly 90 NoExtras\nflightCode VN303",
                "expected": "No tickets found."
            },
            {
                "input": "5\nEconomyTicket VN401 Mike 70 Standard\nEconomyTicket VN402 Sarah 150 ExtraBag\nBusinessTicket VN403 Jack 450 ReclinerSeat\nFirstClassTicket VN404 Nora 1200 SpaAccess\nBusinessTicket VN405 Liam 500 FreeMeal\nprice 500",
                "expected": "Tickets:\nVN401 Mike 70 Standard\nVN402 Sarah 150 ExtraBag\nVN403 Jack 450 ReclinerSeat\nVN405 Liam 500 FreeMeal"
            },
            {
                "input": "6\nEconomyTicket VN501 Oscar 90 FreeSnack\nBusinessTicket VN502 Pam 600 ExtraPrivacy\nFirstClassTicket VN503 Quinn 1800 OnboardChef\nEconomyTicket VN504 Ryan 80 WindowSeat\nFirstClassTicket VN505 Sophia 2000 PrivateSuite\nBusinessTicket VN506 Tom 450 PowerOutlet\nflightCode VN505",
                "expected": "Tickets:\nVN505 Sophia 2000 PrivateSuite"
            },
            {
                "input": "3\nEconomyTicket VN601 Uma 85 BasicMeal\nBusinessTicket VN602 Victor 550 FastCheckin\nFirstClassTicket VN603 Wendy 1700 BedSuite\nprice 200",
                "expected": "Tickets:\nVN601 Uma 85 BasicMeal"
            }
        ]
    },
    {
        "id": 57,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#poly01. Quản lý hệ thống phương tiện giao thông",
        "description": "Xây dựng hệ thống quản lý thông tin phương tiện giao thông. Sử dụng lớp cha Vehicle làm lớp cơ bản, và các lớp Car và Motorcycle kế thừa từ Vehicle. Mỗi loại phương tiện có thuộc tính và hành vi đặc trưng riêng. Hệ thống cần hỗ trợ việc hiển thị thông tin phương tiện.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 10), số lượng phương tiện. Tiếp theo là n dòng, mỗi dòng chứa thông tin phương tiện (loại, tên, mã, giá, và thông tin bổ sung: seats cho Car hoặc fuelCapacity cho Motorcycle).",
        "exe_output": "Hiển thị danh sách thông tin các phương tiện, bao gồm loại phương tiện, tên, mã, giá, và thông tin bổ sung tương ứng.",
        "testCases": [
            {
                "input": "3\nCar Toyota VN001 50000 4\nMotorcycle Honda VN002 15000 10\nCar BMW VN003 70000 5",
                "expected": "Vehicle Information:\nType: Car, Name: Toyota, ID: VN001, Price: 50000, Seats: 4\nType: Motorcycle, Name: Honda, ID: VN002, Price: 15000, Fuel Capacity: 10\nType: Car, Name: BMW, ID: VN003, Price: 70000, Seats: 5"
            },
            {
                "input": "2\nMotorcycle Yamaha VN101 12000 8\nCar Ford VN102 60000 7",
                "expected": "Vehicle Information:\nType: Motorcycle, Name: Yamaha, ID: VN101, Price: 12000, Fuel Capacity: 8\nType: Car, Name: Ford, ID: VN102, Price: 60000, Seats: 7"
            },
            {
                "input": "1\nCar Audi VN201 80000 5",
                "expected": "Vehicle Information:\nType: Car, Name: Audi, ID: VN201, Price: 80000, Seats: 5"
            },
            {
                "input": "2\nMotorcycle Suzuki VN301 10000 6\nMotorcycle Kawasaki VN302 18000 9",
                "expected": "Vehicle Information:\nType: Motorcycle, Name: Suzuki, ID: VN301, Price: 10000, Fuel Capacity: 6\nType: Motorcycle, Name: Kawasaki, ID: VN302, Price: 18000, Fuel Capacity: 9"
            },
            {
                "input": "4\nCar Tesla VN401 90000 5\nMotorcycle Vespa VN402 20000 7\nCar Hyundai VN403 45000 4\nMotorcycle Ducati VN404 25000 12",
                "expected": "Vehicle Information:\nType: Car, Name: Tesla, ID: VN401, Price: 90000, Seats: 5\nType: Motorcycle, Name: Vespa, ID: VN402, Price: 20000, Fuel Capacity: 7\nType: Car, Name: Hyundai, ID: VN403, Price: 45000, Seats: 4\nType: Motorcycle, Name: Ducati, ID: VN404, Price: 25000, Fuel Capacity: 12"
            }
        ]
    },
    {
        "id": 59,
        "type": "OOP",
        "difficulty": "Easy",
        "title": "#poly02. Quản lý động vật trong sở thú",
        "description": "Xây dựng hệ thống quản lý động vật trong sở thú. Sử dụng lớp cha Animal làm lớp cơ bản và các lớp con Mammal và Bird kế thừa từ Animal. Mỗi loài động vật có thuộc tính và hành vi riêng. Hệ thống cần hỗ trợ hiển thị thông tin về các động vật.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 10), số lượng động vật. Tiếp theo là n dòng, mỗi dòng chứa thông tin động vật (loại, tên, mã, tuổi, và thông tin bổ sung: furColor cho Mammal hoặc wingSpan cho Bird).",
        "exe_output": "Hiển thị danh sách thông tin các động vật, bao gồm loại, tên, mã, tuổi và thông tin bổ sung tương ứng.",
        "testCases": [
            {
                "input": "3\nMammal Tiger M001 5 Orange\nBird Parrot B001 2 50\nMammal Elephant M002 10 Gray",
                "expected": "Animal Information:\nType: Mammal, Name: Tiger, ID: M001, Age: 5, Fur Color: Orange\nType: Bird, Name: Parrot, ID: B001, Age: 2, Wing Span: 50\nType: Mammal, Name: Elephant, ID: M002, Age: 10, Fur Color: Gray"
            },
            {
                "input": "2\nBird Eagle B002 3 200\nMammal Lion M003 8 Golden",
                "expected": "Animal Information:\nType: Bird, Name: Eagle, ID: B002, Age: 3, Wing Span: 200\nType: Mammal, Name: Lion, ID: M003, Age: 8, Fur Color: Golden"
            },
            {
                "input": "1\nMammal Panda M004 7 Black-White",
                "expected": "Animal Information:\nType: Mammal, Name: Panda, ID: M004, Age: 7, Fur Color: Black-White"
            },
            {
                "input": "4\nMammal Monkey M005 4 Brown\nBird Sparrow B003 1 20\nBird Owl B004 6 80\nMammal Giraffe M006 12 Yellow",
                "expected": "Animal Information:\nType: Mammal, Name: Monkey, ID: M005, Age: 4, Fur Color: Brown\nType: Bird, Name: Sparrow, ID: B003, Age: 1, Wing Span: 20\nType: Bird, Name: Owl, ID: B004, Age: 6, Wing Span: 80\nType: Mammal, Name: Giraffe, ID: M006, Age: 12, Fur Color: Yellow"
            },
            {
                "input": "2\nBird Penguin B005 3 50\nMammal Bear M007 9 Dark-Brown",
                "expected": "Animal Information:\nType: Bird, Name: Penguin, ID: B005, Age: 3, Wing Span: 50\nType: Mammal, Name: Bear, ID: M007, Age: 9, Fur Color: Dark-Brown"
            },
            {
                "input": "5\nBird Peacock B006 5 120\nMammal Fox M008 4 Red\nBird Falcon B007 3 150\nMammal Dog M009 2 White\nBird Crow B008 1 60",
                "expected": "Animal Information:\nType: Bird, Name: Peacock, ID: B006, Age: 5, Wing Span: 120\nType: Mammal, Name: Fox, ID: M008, Age: 4, Fur Color: Red\nType: Bird, Name: Falcon, ID: B007, Age: 3, Wing Span: 150\nType: Mammal, Name: Dog, ID: M009, Age: 2, Fur Color: White\nType: Bird, Name: Crow, ID: B008, Age: 1, Wing Span: 60"
            }
        ]
    },
    {
        "id": 60,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#poly03. Quản lý sản phẩm trong cửa hàng",
        "description": "Xây dựng hệ thống quản lý sản phẩm trong cửa hàng. Sử dụng lớp cha Product làm lớp cơ bản và các lớp con Electronics, Clothes và Food kế thừa từ Product. Mỗi loại sản phẩm có thuộc tính và hành vi đặc trưng riêng. Hệ thống cần hỗ trợ hiển thị danh sách sản phẩm và tìm kiếm sản phẩm theo tên hoặc giá trị tối thiểu.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 20), số lượng sản phẩm. Tiếp theo là n dòng, mỗi dòng chứa thông tin sản phẩm (loại, tên, mã, giá, và thông tin bổ sung: warranty cho Electronics, size cho Clothes, hoặc expiryDate cho Food). Dòng cuối chứa truy vấn tìm kiếm (searchType, searchValue).",
        "exe_output": "In danh sách sản phẩm thỏa mãn truy vấn hoặc thông báo không tìm thấy sản phẩm nào.",
        "testCases": [
            {
                "input": "3\nElectronics TV E001 15000 2\nClothes Shirt C001 500 L\nFood Bread F001 50 2025-01-20\nname TV",
                "expected": "Products:\nType: Electronics, Name: TV, ID: E001, Price: 15000, Warranty: 2 years"
            },
            {
                "input": "4\nFood Milk F002 30 2025-02-01\nClothes Pants C002 700 M\nElectronics Laptop E002 30000 3\nFood Butter F003 40 2025-01-25\nprice 100",
                "expected": "Products:\nType: Food, Name: Milk, ID: F002, Price: 30, Expiry Date: 2025-02-01\nType: Food, Name: Butter, ID: F003, Price: 40, Expiry Date: 2025-01-25"
            },
            {
                "input": "2\nClothes Jacket C003 1500 XL\nElectronics Smartphone E003 10000 1\nname Laptop",
                "expected": "Products:\nNo products found."
            },
            {
                "input": "5\nFood Cheese F004 100 2025-05-15\nElectronics Fridge E004 20000 5\nClothes TShirt C004 600 S\nFood Chips F005 20 2025-03-01\nElectronics WashingMachine E005 18000 3\nprice 15000",
                "expected": "Products:\nType: Food, Name: Cheese, ID: F004, Price: 100, Expiry Date: 2025-05-15\nType: Clothes, Name: TShirt, ID: C004, Price: 600, Size: S\nType: Food, Name: Chips, ID: F005, Price: 20, Expiry Date: 2025-03-01"
            },
            {
                "input": "3\nClothes Coat C005 2000 XXL\nFood Yogurt F006 15 2025-01-30\nElectronics Speaker E006 5000 1\nname Coat",
                "expected": "Products:\nType: Clothes, Name: Coat, ID: C005, Price: 2000, Size: XXL"
            },
            {
                "input": "6\nFood Juice F007 25 2025-04-10\nClothes Dress C006 800 M\nElectronics Monitor E007 12000 2\nFood Salad F008 20 2025-02-01\nElectronics Headphones E008 2500 1\nClothes Socks C007 100 S\nprice 500",
                "expected": "Products:\nType: Food, Name: Juice, ID: F007, Price: 25, Expiry Date: 2025-04-10\nType: Food, Name: Salad, ID: F008, Price: 20, Expiry Date: 2025-02-01\nType: Clothes, Name: Socks, ID: C007, Price: 100, Size: S"
            }
        ]
    },
    {
        "id": 61,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#poly04. Quản lý nhân sự công ty",
        "description": "Xây dựng hệ thống quản lý nhân sự trong công ty. Sử dụng lớp cha Employee làm lớp cơ bản và các lớp con Manager, Developer và Tester kế thừa từ Employee. Mỗi loại nhân viên có thuộc tính và hành vi đặc trưng riêng. Hệ thống cần hỗ trợ hiển thị danh sách nhân viên và tìm kiếm nhân viên theo bộ phận hoặc lương tối thiểu.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 20), số lượng nhân viên. Tiếp theo là n dòng, mỗi dòng chứa thông tin nhân viên (loại, tên, mã, lương, và thông tin bổ sung: team cho Manager, programmingLanguage cho Developer, hoặc testTool cho Tester). Dòng cuối chứa truy vấn tìm kiếm (searchType, searchValue).",
        "exe_output": "In danh sách nhân viên thỏa mãn truy vấn hoặc thông báo không tìm thấy nhân viên nào.",
        "testCases": [
            {
                "input": "3\nManager Alice M001 5000 HR\nDeveloper Bob D001 4000 Java\nTester Carol T001 3500 Selenium\ndepartment HR",
                "expected": "Employees:\nType: Manager, Name: Alice, ID: M001, Salary: 5000, Team: HR"
            },
            {
                "input": "4\nDeveloper David D002 4500 Python\nTester Eve T002 3000 JIRA\nManager Frank M002 6000 IT\nDeveloper Grace D003 4000 C++\nsalary 4000",
                "expected": "Employees:\nType: Developer, Name: David, ID: D002, Salary: 4500, Programming Language: Python\nType: Manager, Name: Frank, ID: M002, Salary: 6000, Team: IT\nType: Developer, Name: Grace, ID: D003, Salary: 4000, Programming Language: C++"
            },
            {
                "input": "2\nTester Henry T003 3200 Postman\nManager Irene M003 7000 Marketing\ndepartment Finance",
                "expected": "Employees:\nNo employees found."
            },
            {
                "input": "5\nDeveloper Jack D004 5000 JavaScript\nTester Kate T004 2800 Appium\nManager Leo M004 5500 Sales\nDeveloper Mia D005 4200 C#\nManager Nina M005 4800 Finance\nsalary 5000",
                "expected": "Employees:\nType: Developer, Name: Jack, ID: D004, Salary: 5000, Programming Language: JavaScript\nType: Manager, Name: Leo, ID: M004, Salary: 5500, Team: Sales"
            },
            {
                "input": "3\nDeveloper Oscar D006 3900 PHP\nTester Paula T005 3600 TestRail\nManager Quinn M006 4500 Operations\ndepartment Operations",
                "expected": "Employees:\nType: Manager, Name: Quinn, ID: M006, Salary: 4500, Team: Operations"
            },
            {
                "input": "6\nDeveloper Ryan D007 3800 Ruby\nTester Sophia T006 3100 JUnit\nManager Thomas M007 6000 Admin\nTester Ulysses T007 2900 LoadRunner\nDeveloper Victor D008 4500 Swift\nManager Wendy M008 5200 HR\nsalary 4000",
                "expected": "Employees:\nType: Manager, Name: Thomas, ID: M007, Salary: 6000, Team: Admin\nType: Developer, Name: Victor, ID: D008, Salary: 4500, Programming Language: Swift\nType: Manager, Name: Wendy, ID: M008, Salary: 5200, Team: HR"
            }
        ]
    },
    {
        "id": 62,
        "type": "OOP",
        "difficulty": "Advanced",
        "title": "#poly05. Quản lý hệ thống đấu giá",
        "description": "Xây dựng hệ thống quản lý đấu giá với nhiều loại sản phẩm. Sử dụng lớp cha AuctionItem làm lớp cơ bản và các lớp con Electronics, ArtPiece, và Collectible kế thừa từ AuctionItem. Hệ thống cần hỗ trợ các tính năng như thêm sản phẩm, đặt giá thầu, tìm kiếm sản phẩm theo giá thầu cao nhất hoặc theo loại.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50), số lượng sản phẩm. Tiếp theo là n dòng, mỗi dòng chứa thông tin sản phẩm (loại, tên, mã, giá khởi điểm, thông tin bổ sung: warranty cho Electronics, artist cho ArtPiece, hoặc rarity cho Collectible). Sau đó, có m dòng là các giá thầu (itemId, bidAmount). Dòng cuối cùng chứa truy vấn (searchType, searchValue).",
        "exe_output": "In danh sách sản phẩm thỏa mãn truy vấn (nếu có) hoặc thông báo không tìm thấy sản phẩm nào.",
        "testCases": [
            {
                "input": "3\nElectronics Laptop A001 500 1\nArtPiece MonaLisa A002 1000 Leonardo\nCollectible Coin A003 300 Rare\n3\nA001 550\nA002 1200\nA003 350\nhighestBid",
                "expected": "Auction Items:\nType: ArtPiece, Name: MonaLisa, ID: A002, Starting Price: 1000, Artist: Leonardo, Highest Bid: 1200"
            },
            {
                "input": "4\nCollectible Stamp A004 200 Common\nElectronics Phone A005 800 2\nArtPiece StarryNight A006 2000 VanGogh\nCollectible Figurine A007 500 Rare\n5\nA004 250\nA005 850\nA006 2500\nA007 600\nA005 900\ntype Collectible",
                "expected": "Auction Items:\nType: Collectible, Name: Stamp, ID: A004, Starting Price: 200, Rarity: Common, Highest Bid: 250\nType: Collectible, Name: Figurine, ID: A007, Starting Price: 500, Rarity: Rare, Highest Bid: 600"
            },
            {
                "input": "2\nElectronics TV A008 1000 3\nArtPiece TheScream A009 3000 Munch\n1\nA008 1200\nhighestBid",
                "expected": "Auction Items:\nType: Electronics, Name: TV, ID: A008, Starting Price: 1000, Warranty: 3 years, Highest Bid: 1200"
            },
            {
                "input": "5\nElectronics Speaker A010 600 2\nArtPiece GirlWithAPearlEarring A011 2500 Vermeer\nCollectible Card A012 150 Rare\nElectronics SmartWatch A013 300 1\nArtPiece Sunflowers A014 4000 VanGogh\n4\nA011 2700\nA012 200\nA013 350\nA014 4500\ntype ArtPiece",
                "expected": "Auction Items:\nType: ArtPiece, Name: GirlWithAPearlEarring, ID: A011, Starting Price: 2500, Artist: Vermeer, Highest Bid: 2700\nType: ArtPiece, Name: Sunflowers, ID: A014, Starting Price: 4000, Artist: VanGogh, Highest Bid: 4500"
            },
            {
                "input": "3\nCollectible Postcard A015 100 Vintage\nElectronics Headphones A016 800 1\nArtPiece WaterLilies A017 3000 Monet\n3\nA015 150\nA016 900\nA017 3500\nhighestBid",
                "expected": "Auction Items:\nType: ArtPiece, Name: WaterLilies, ID: A017, Starting Price: 3000, Artist: Monet, Highest Bid: 3500"
            },
            {
                "input": "6\nElectronics Camera A018 700 2\nCollectible Poster A019 50 Limited\nArtPiece TheLastSupper A020 5000 DaVinci\nCollectible Stamp A021 200 Common\nArtPiece Guernica A022 4000 Picasso\nElectronics Laptop A023 1000 3\n4\nA018 800\nA019 100\nA020 5500\nA022 4500\ntype Electronics",
                "expected": "Auction Items:\nType: Electronics, Name: Camera, ID: A018, Starting Price: 700, Warranty: 2 years, Highest Bid: 800\nType: Electronics, Name: Laptop, ID: A023, Starting Price: 1000, Warranty: 3 years, Highest Bid: 0"
            }
        ]
    },
    {
        "id": 63,
        "type": "OOP",
        "difficulty": "Advanced",
        "title": "#poly06. Hệ thống quản lý ngân hàng",
        "description": "Xây dựng hệ thống quản lý tài khoản ngân hàng. Sử dụng lớp cha BankAccount làm lớp cơ bản và các lớp con SavingsAccount, CheckingAccount, và BusinessAccount kế thừa từ BankAccount. Mỗi loại tài khoản có thuộc tính và hành vi đặc trưng riêng. Hệ thống cần hỗ trợ các tính năng như gửi tiền, rút tiền, tính lãi suất hàng tháng, và tìm kiếm tài khoản theo số dư tối thiểu hoặc loại tài khoản.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50), số lượng tài khoản. Tiếp theo là n dòng, mỗi dòng chứa thông tin tài khoản (loại, tên khách hàng, mã tài khoản, số dư, và thông tin bổ sung: interestRate cho SavingsAccount, overdraftLimit cho CheckingAccount, hoặc creditLimit cho BusinessAccount). Sau đó, có m dòng yêu cầu (type, accountId, amount). Dòng cuối cùng chứa truy vấn (searchType, searchValue).",
        "exe_output": "In danh sách tài khoản thỏa mãn truy vấn (nếu có) hoặc thông báo không tìm thấy tài khoản nào.",
        "testCases": [
            {
                "input": "3\nSavingsAccount Alice SA001 5000 0.05\nCheckingAccount Bob CA001 2000 500\nBusinessAccount Carol BA001 10000 2000\n3\ndeposit SA001 2000\nwithdraw CA001 1500\nwithdraw BA001 5000\nbalance 3000",
                "expected": "Accounts:\nType: SavingsAccount, Customer: Alice, ID: SA001, Balance: 7000, Interest Rate: 5.0%\nType: BusinessAccount, Customer: Carol, ID: BA001, Balance: 5000, Credit Limit: 2000"
            },
            {
                "input": "4\nSavingsAccount David SA002 3000 0.03\nCheckingAccount Eve CA002 1000 300\nBusinessAccount Frank BA002 20000 5000\nSavingsAccount Grace SA003 8000 0.04\n2\nwithdraw CA002 1200\ndeposit SA003 2000\ntype SavingsAccount",
                "expected": "Accounts:\nType: SavingsAccount, Customer: David, ID: SA002, Balance: 3000, Interest Rate: 3.0%\nType: SavingsAccount, Customer: Grace, ID: SA003, Balance: 10000, Interest Rate: 4.0%"
            },
            {
                "input": "2\nBusinessAccount Henry BA003 15000 3000\nCheckingAccount Irene CA003 500 200\n1\nwithdraw BA003 16000\nbalance 1000",
                "expected": "Accounts:\nNo accounts found."
            },
            {
                "input": "5\nSavingsAccount Jack SA004 2000 0.02\nCheckingAccount Kate CA004 400 100\nBusinessAccount Liam BA004 30000 10000\nSavingsAccount Mia SA005 5000 0.03\nCheckingAccount Noah CA005 2500 800\n4\ndeposit CA004 300\nwithdraw SA005 1000\ndeposit BA004 5000\nwithdraw CA005 2700\ntype CheckingAccount",
                "expected": "Accounts:\nType: CheckingAccount, Customer: Kate, ID: CA004, Balance: 700, Overdraft Limit: 100\nType: CheckingAccount, Customer: Noah, ID: CA005, Balance: -200, Overdraft Limit: 800"
            },
            {
                "input": "3\nBusinessAccount Oliver BA005 40000 5000\nSavingsAccount Peter SA006 10000 0.05\nCheckingAccount Quinn CA006 1500 500\n2\nwithdraw BA005 42000\ndeposit SA006 5000\nbalance 1500",
                "expected": "Accounts:\nType: SavingsAccount, Customer: Peter, ID: SA006, Balance: 15000, Interest Rate: 5.0%\nType: CheckingAccount, Customer: Quinn, ID: CA006, Balance: 1500, Overdraft Limit: 500"
            },
            {
                "input": "6\nSavingsAccount Riley SA007 7000 0.03\nCheckingAccount Sarah CA007 2000 400\nBusinessAccount Thomas BA007 10000 3000\nSavingsAccount Uma SA008 6000 0.04\nCheckingAccount Victor CA008 1000 500\nBusinessAccount Wendy BA008 25000 10000\n5\nwithdraw SA007 2000\ndeposit CA007 1000\ndeposit BA007 5000\nwithdraw BA008 26000\nwithdraw CA008 1200\ntype BusinessAccount",
                "expected": "Accounts:\nType: BusinessAccount, Customer: Thomas, ID: BA007, Balance: 15000, Credit Limit: 3000\nType: BusinessAccount, Customer: Wendy, ID: BA008, Balance: -1000, Credit Limit: 10000"
            }
        ]
    },
    {
        "id": 64,
        "type": "OOP",
        "difficulty": "Medium",
        "title": "#poly07. Quản lý thư viện sách",
        "description": "Xây dựng hệ thống quản lý thư viện sách. Sử dụng lớp cha Book làm lớp cơ bản và các lớp con FictionBook, ScienceBook, và HistoryBook kế thừa từ Book. Hệ thống cần hỗ trợ các chức năng như thêm sách, hiển thị sách, và tìm kiếm sách theo thể loại hoặc số lượng tối thiểu.",
        "exe_input": "Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 50), số lượng sách. Tiếp theo là n dòng, mỗi dòng chứa thông tin sách (loại, tên sách, mã sách, số lượng, và thông tin bổ sung: genre cho FictionBook, field cho ScienceBook, hoặc period cho HistoryBook). Dòng cuối chứa truy vấn tìm kiếm (searchType, searchValue).",
        "exe_output": "In danh sách sách thỏa mãn truy vấn hoặc thông báo không tìm thấy sách nào.",
        "testCases": [
            {
                "input": "3\nFictionBook HarryPotter F001 10 Fantasy\nScienceBook QuantumPhysics S001 5 Physics\nHistoryBook WorldWar H001 8 20thCentury\ntype FictionBook",
                "expected": "Books:\nType: FictionBook, Name: HarryPotter, ID: F001, Quantity: 10, Genre: Fantasy"
            },
            {
                "input": "4\nFictionBook LordOfTheRings F002 12 Adventure\nScienceBook Relativity S002 7 Physics\nHistoryBook AncientEgypt H002 4 AncientHistory\nFictionBook GameOfThrones F003 6 Fantasy\nquantity 6",
                "expected": "Books:\nType: FictionBook, Name: LordOfTheRings, ID: F002, Quantity: 12, Genre: Adventure\nType: ScienceBook, Name: Relativity, ID: S002, Quantity: 7, Field: Physics\nType: FictionBook, Name: GameOfThrones, ID: F003, Quantity: 6, Genre: Fantasy"
            },
            {
                "input": "2\nScienceBook ChemistryBasics S003 3 Chemistry\nHistoryBook Renaissance H003 5 15thCentury\ntype ScienceBook",
                "expected": "Books:\nType: ScienceBook, Name: ChemistryBasics, ID: S003, Quantity: 3, Field: Chemistry"
            },
            {
                "input": "5\nFictionBook Twilight F004 15 Romance\nScienceBook BiologyBasics S004 9 Biology\nHistoryBook MedievalTimes H004 7 Medieval\nScienceBook Genetics S005 10 Biology\nFictionBook TheHobbit F005 8 Fantasy\ntype ScienceBook",
                "expected": "Books:\nType: ScienceBook, Name: BiologyBasics, ID: S004, Quantity: 9, Field: Biology\nType: ScienceBook, Name: Genetics, ID: S005, Quantity: 10, Field: Biology"
            },
            {
                "input": "3\nFictionBook MazeRunner F006 11 SciFi\nHistoryBook ColdWar H005 6 20thCentury\nScienceBook Astrophysics S006 4 Space\ntype HistoryBook",
                "expected": "Books:\nType: HistoryBook, Name: ColdWar, ID: H005, Quantity: 6, Period: 20thCentury"
            },
            {
                "input": "6\nFictionBook Narnia F007 9 Fantasy\nScienceBook Programming101 S007 15 ComputerScience\nHistoryBook WW2 H006 10 20thCentury\nFictionBook Dune F008 5 SciFi\nScienceBook ArtificialIntelligence S008 12 MachineLearning\nHistoryBook FrenchRevolution H007 7 18thCentury\nquantity 10",
                "expected": "Books:\nType: ScienceBook, Name: Programming101, ID: S007, Quantity: 15, Field: ComputerScience\nType: HistoryBook, Name: WW2, ID: H006, Quantity: 10, Period: 20thCentury\nType: ScienceBook, Name: ArtificialIntelligence, ID: S008, Quantity: 12, Field: MachineLearning"
            }
        ]
    }
            
];

export default exercises;