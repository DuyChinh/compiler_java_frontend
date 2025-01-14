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
    }
];

export default exercises;