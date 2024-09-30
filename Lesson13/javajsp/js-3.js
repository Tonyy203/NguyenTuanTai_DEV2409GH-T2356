// toán tử, toán hạng , biểu thức, câu lệnh, khối lệnh 
// 1.Toán tử số học :*,/,+,-,%,
var num1,num2;
// gán día trị 
num1=12;
num2=25;
// thực hiện các phép tính toán số học
res = num1 * num2;
console.log(num1,"*",num2,"=",res);
res = num1 + num2;
console.log(num1,"+",num2,"=",res);
res = num1  - num2;
console.log(num1,"-",num2,"=",res);
res = num1 / num2;
console.log(num1,"/",num2,"=",res);
res = num1 % num2;
console.log(num1,"%",num2,"=",res);
// 2. phép toán so sánh trả về giá trị kiểu boolen (true/flose)
// >;>=;<;<=;==;===;!=;!==
res= num1 > num2 ;
console.log(num1,">",num2,"=",res);
res= num1 >= num2;
console.log(num1,">=",num2,"=",res);
res= num1 < num2;
console.log(num1,"<",num2,"=",res);
res= num1<= num2;
console.log(num1,"<=",num2,"=",res);
res= num1== num2;
console.log(num1,"==",num2,"=",res);
res= num1=== num2;
console.log(num1,"===",num2,"=",res);
 num1=12;
 num2="12";
 res= num1== num2;
console.log(num1,"===",num2,"=",res);
res= num1=== num2;
console.log(num1,"===",num2,"=",res);
// 3. toán tử logic-thập phân (amd:&&. or||;not!)
num1=12;
num2=15;
res =(num1>10) && (num2<10);
console.log("(num1>10) && (num<10)=>",res);
res =(num1>10) || (num2<10);
console.log("(num1>10) && (num<10)=>",res);
// 4. toán tử đặc biệt 
res = (num1>10)?"giá trị lớn hơn ":"giá trị nhở hơn ";
console.log(res);
res = (num2 %2 )?"số chẵn ":"số lẻ";
console.log(num2,"là ",res);
// typeof
res=typeof(num1);//number 
console.log("typeof(num1)",res);
num1="12345";
res=typeof(num1);
console.log("typeof(num1)",res);