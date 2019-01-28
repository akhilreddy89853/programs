var readln = typeof readline === 'function' ? readline : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
importPackage(java.io);
importPackage(java.lang);
var readln = typeof readline === 'function' ? readline : (function() {
var stdin = new BufferedReader(new InputStreamReader(System['in']));
return function() {
    return String(stdin.readLine());   
  };                                    
}());
print("Enter the number upto which number the series want to print?")
var Number = parseInt(readln());
var SeriesCounter = 1
var Product = 1
var Counter = 1
Output= "The term in the series upto " + Number + " are"
while(Product <= Number ) {
    Counter = 1
    Product = 1
    while(Counter <= SeriesCounter) {
      Product = Product * SeriesCounter
      Counter = Counter + 1;
    }
    if(Product <= Number) {
      Output = Output + " " +Product
    }
    SeriesCounter = SeriesCounter + 1;
    if(Product > Number) {
      break
    }
}
Output = Output + "."
print(Output)