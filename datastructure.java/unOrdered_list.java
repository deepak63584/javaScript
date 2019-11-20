package com.bridgelabz.fellowshipprograms.datastructure;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.LinkedList;
import java.util.Scanner;

public class unOrdered_list 
{
	public static void main(String[] args) throws IOException 
	{

		Utildata utility = new Utildata();
		try
		{
			 utility.readWords();
		} 
		catch (FileNotFoundException e)
		{
			e.printStackTrace();
		}
		//to print list
		linkedlist.printList();
		//utility.printList();
		
		// to print size of list
		utility.listSize();
		
		//take input to search the word in list
		System.out.println("\n Enter the word u want to search in list : ");
		String key = utility.readString();
		boolean flag = utility.searchString(key);
		System.out.println(flag);
		
	}
}
