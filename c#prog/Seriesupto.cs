// A Hello World! program in C#.
cd using System;

class Seriesupto {
  public static void Main (string[] args) {
    Console.Write("Enter the number upto which number the series want to  print? ");
    long Number = Convert.ToInt64(Console.ReadLine());
    long SeriesCounter = 1;
    long Product = 1;
    long Counter = 1;
    Console.Write("The term in the series upto " + Number + " are");
    while(Product < Number) {
      Product = 1;
      Counter = 1;
      while(Counter <= SeriesCounter) {
        Product = Product * SeriesCounter;
        Counter = Counter  + 1;
      }
      SeriesCounter = SeriesCounter + 1;
      if(Product > Number) {
        break;
      }
      Console.Write(" " + Product);
      
    }
    Console.Write(".");
    Console.WriteLine("");
  }
}