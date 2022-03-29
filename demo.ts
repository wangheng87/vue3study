var message:string = "Hello World";
console.log(message)


var a = dom.format("Result is #{0},#{1}", 22,33);
alert(a);//"Result is 22,33"
var b = dom.format("#{name} is a #{sex}",{name:"Jhon",sex:"man"});
alert(b);//"Jhon is a man"
