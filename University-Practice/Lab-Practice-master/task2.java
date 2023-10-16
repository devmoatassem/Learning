/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author MOATASSEM SINDHU
 */
//importing java library
import java.util.Scanner;
//public class 
public class task2 {
    //main method
    public static void main(String[] args){
        //initializing of the variable
        int x;
        //method call
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter the number : ");
        //input for the variable
        x= scanner.nextInt();
        // declaring and initialization of 2nd variable
        int y=(x*x);
        //printng the output in proper format
        System.out.print("The square of ");
        System.out.print(x);
        System.out.print(" is ");
        System.out.println(y);
    }
    
}
