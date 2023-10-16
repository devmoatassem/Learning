/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author MOATASSEM SINDHU
 */
import java.util.Scanner;
//creating a public class
public class task4 {
    //main method
    public static void main(String[] args){
        //initializing the variables
        int x;
        int y;
        int d;
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter the value of first number: ");
        //input for value of first number
        x= scanner.nextInt();
        System.out.print("Enter the value of 2nd nmber: ");
        //input for value of 2nd number
        y= scanner.nextInt();
        //if statement for bigger check
        if (x>y){
            d=x%y;
        }
        else{
            d=y%x;
        }
        //if statement to print if bigger number is divisible by smaler or not
        if (d==0){
            System.out.println("Bigger is divisible by smaller.");
        }
        else{
            System.out.println("Bigger is not divisible by smaller.");
        }     
    }
}

