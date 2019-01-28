import java.lang.*;
import java.util.*;
class Natural {
  public static void main(String[] args) {
    Scanner ScannerObject = new Scanner(System.in);
    System.out.print("How many number of natural numbers you want to print?");
    int Count = ScannerObject.nextInt();
    int Counter = 1;
    System.out.print("The first " + Count + " natural numbers are");
    while(Counter <= Count) {
      System.out.print(" "+ Counter);
      Counter = Counter + 1;
    }
    System.out.print(".");
    System.out.println("");
  }
}