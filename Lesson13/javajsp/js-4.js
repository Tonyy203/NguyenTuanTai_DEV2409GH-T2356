// cấu ttusc điều khiển if 
// dạng 1:if đơn 
/*
cú pháp :
if(condition-expression){
block statement;
}
// */
// ví dụ :cho so num; kiểm tra số num dương ? 
num= -10 ;
if (num>0){
    console.log(num,"là số dương ");
}
// nếu num>o thì gán lại giá trị num =-100;
if (num>0){
    num =-100;
    console.log(num);
}
// dạng 2 : if else 
num=12;
// kiểm tra xem số num là chẵn hay lẻ 
if (num % 2==0){
    console.log(num,"là số chẵn ");
}
else{
    console.log(num, "là số lẻ");
}
// dạng 3:dạng bậc thang: if... else if...
// kiểm tra số num là số dương,âm hay 0 
num=1.1
if(num>0){
    console.log(num,"số dương ");
}
else if(num<0){
    console.log(num,"số âm ");
}
else{
    console.log(num,"là số 0");
}
// dạng 4:nested if
num1=12;
num2=15;
// nếu num 1 là số chẵn. kiểm tra nếu num 2 là số lẻ thì tiinhs res =num1+num2 
if (num1%2==0)
{
    if(num2%2==1){
        res = num1+num2;
        console.log(res);
    }
}else{
    if(num2%2==1){
        res =num1 -num2 ;
        console.log(res)

    }
}
// luyện tập 1 :giải phương trình bậc 1 :ax+b=0
// luyện tập 2: giả phương trình bậc 2 :ax^2+bx+c=0
