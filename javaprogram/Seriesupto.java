import java.lang.*;
import java.util.*;
class SeriesNumber { 
   private long NumberOfSeries;
   public SeriesNumber(long Number1) {
     this.NumberOfSeries = Number1;
   }
   public void printSeries() {
     long Count = 0;
     long SeriesCounter = 1;
     long Product = 1;
     System.out.print("The term in the series upto " + NumberOfSeries + " are");
     while((Product * SeriesCounter) < NumberOfSeries) {
        Count = 0;
        Product = 1;
        while(Count < SeriesCounter) {
         Product = Product * SeriesCounter;
         Count =  Count + 1;
       }
       System.out.print(" " + Product);
       SeriesCounter += 1;
     }
     System.out.print(".");
     System.out.println("");
   }
  
}
class Seriesupto {
  public static void main(String[] args) {
    Scanner ScannerObject = new Scanner(System.in);
    System.out.print("Enter the number upto which number the series want to print?");
    long NumberOfSeries = ScannerObject.nextInt();
    SeriesNumber ClassObject = new SeriesNumber(NumberOfSeries);
    ClassObject.printSeries();
  }
}