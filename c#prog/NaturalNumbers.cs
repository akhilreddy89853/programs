using System;

class NaturalNumbers {
  public static void Main (string[] args) {
    Console.Write("How many natrual numbers you want to print?");
    int Count = Convert.ToInt32(Console.ReadLine());
    int Counter = 1;
    Console.Write("The first " + Count + " natural numbers are");
    while(Counter <= Count) {
      Console.Write(" " + Counter);
      Counter = Counter + 1;
    }
    Console.Write(".");
    Console.WriteLine("");
  }
}