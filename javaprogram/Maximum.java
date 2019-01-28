import java.lang.*;
import java.util.*;
class Maximum {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("How many numbers do you want to read to find maximum number, enter the number: ");
    int Limit = scanner.nextInt();
    System.out.print("Enter the first number: ");
    int Numbers[] = new int[Limit];
    Numbers[0] = scanner.nextInt();
    int Count = 1;
    while(Count  < Limit) {
      System.out.print("Enter the next number: ");
      Numbers[Count] = scanner.nextInt();
      Count = Count + 1;
    }
    Count = 1;
    int MaximumNumber = Numbers[0];
    while(Count < Limit) {
      if(MaximumNumber < Numbers[Count]) {
        MaximumNumber = Numbers[Count];
      }
      Count = Count + 1;
    }
    Count = 1;
    System.out.print("The maximum number of " + Numbers[0]);
    while(Count < Limit) {
      System.out.print(", "+Numbers[Count]);
      Count = Count + 1;
    }
    System.out.print(" is " + MaximumNumber + ".");
    System.out.println("");
  }
}