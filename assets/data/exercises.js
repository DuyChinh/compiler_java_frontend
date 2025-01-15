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
                input: "3\n1001,Tủ lạnh,điện tử - điện lạnh, 5000000\n1002,Áo sơ mi,hàng thời trang,300000\n1003,Bánh kẹo,hàngtiêu dùng,50000",
                expected: "1003 Bánh kẹo hàng tiêu dùng 50000.0\n1002 Áo sơ mi hàng thời trang 300000.0\n1001 Tủ lạnh điện tử - điện lạnh 5000000.0"
            },
            {
                input: "2\n1004,Máy giặt,điện tử - điện lạnh,7000000\n1005,Quần jeans,hàng thời trang,400000",
                expected: "1005 Quần jeans hàng thời trang 400000.0\n1004 Máy giặt điện tử - điện lạnh 7000000.0"
            },
            {
                input: "4\n1006,Tivi,điện tử - điện lạnh,8000000\n1007,Váy đầm,hàng thời trang,600000\n1008,Nồi cơm điện,điện tử - điện lạnh,1500000\n1009,Sữa tươi,hàng tiêu dùng,20000",
                expected: "1009 Sữa tươi hàng tiêu dùng 20000.0\n1008 Nồi cơm điện điện tử - điện lạnh 1500000.0\n1007 Váy đầm hàng thời trang 600000.0\n1006 Tivi điện tử - điện lạnh 8000000.0"
            },
            {
                input: "1\n1010 Bánh mì hàng tiêu dùng 10000",
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
    }
    
];

export default exercises;