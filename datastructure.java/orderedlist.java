package com.bridgelabz.fellowshipprograms.datastructure;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class orderedlist 
{
	public static void main(String[] args)
	{
			File file = new File("/home/admin1/Desktop/FellowshipProgramsDeepak/FellowshipPrograms/src/com/bridgelabz/fellowshipprograms/files/numbers.txt");
			Scanner sc = new Scanner(System.in);
			Utildata utility = new Utildata();
			try 
			{
				sc = new Scanner(file);
			}
			catch (FileNotFoundException e) 
			{
				e.printStackTrace();
			}
			
			int i=0;
			int num[] = new int[10];
			//read data from file
			while(sc.hasNextInt())
			{
				num[i++] = sc.nextInt();
			}
			for(int k=0; k<num.length; k++)
			{
				System.out.print(num[k]+" ");
			}
			System.out.println();
			
			//function call to print sorted no.s
			utility.sortNum(num);
			utility.prinInttList();
			System.out.println();
			
			//function call to search no from list
			System.out.println("Enter the no u want to search from list :");
			int no = utility.readInt();
			utility.searchInt(no);
			
			//function call to remove element from list
			System.out.println("\n Enter the value u want to remove from list :");
			int key = utility.readInt();
			utility.removeInt(key);
			utility.printList();
	}

}
