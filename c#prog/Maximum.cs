using System;

class MainClass {
  public static void Main (string[] args) {
    Console.Write("To find the maximum number among n numbers, enter the number: ");
    int Limit = (Convert.ToInt32(Console.ReadLine()));
    Console.Write("Enter the first number: ");
    int[] Numbers = new int[Limit];
    Numbers[0] = (Convert.ToInt32(Console.ReadLine()));
    int Count = 1;
    while(Count < Limit) {
      Console.Write("Enter the next number: ");
      Numbers[Count] = (Convert.ToInt32(Console.ReadLine()));
      Count = Count + 1;
    }
    Count = 0;
    int MaximumNumber = 0;
    while(Count < Limit) {
      if(MaximumNumber < Numbers[Count]) {
        MaximumNumber = Numbers[Count];
        Count = Count + 1; 
      }
    }
    Console.Write("The biggest number among");
    Count = 0;
    while(Count < Limit) {
      Console.Write(" " + Numbers[Count]);
      Count = Count + 1;
    }
    Console.Write(" is "+ MaximumNumber + ".");
    Console.WriteLine();
  }
  
}