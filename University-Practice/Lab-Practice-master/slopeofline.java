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
public class slopeofline {
    //main method
    public static void main(String[] args){
        //initializing the variables
        double x;
        double y;
        double m;
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter the value of x: ");
        //input for value of x
        x= scanner.nextDouble();
        System.out.print("Enter the value of y: ");
        //input for value of y
        y= scanner.nextDouble();
        //equation of line is y=mx+c and slope os m which is equal to m=y/x 
        m=y/x;
        //printing the slope of line
        System.out.print("Slope of line is ");
        System.out.println(m);
        
    }
}
