package com.bridgelabz.fellowshipprograms.datastructure;

public class stacklinkedList
{

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		
		Utildata utility = new Utildata();
		System.out.println("Enter the size of stack : ");
		int s = utility.readInt();
		int a[] = new int[s];
		System.out.println("Enter element :");
		for(int i=0; i<s; i++)
		{
			a[i] = utility.readInt();
			utility.push(a[i]);
		}
		
		//utility.printStack();
//		String expr = "{()}";
//		char ch[] = expr.toCharArray();
//    	utility.checkBalancedExpr(expr);
	
		// to print top of stack
		System.out.println("Top of stack is :");
		utility.peak();
		
		//count size of stack
		utility.countSize();
		
		//to remove element from stack
		utility.pop();
		utility.countSize();
		
		//to print elements of stack
		utility.printStack();
		
		//function call to remove char element from stack
		//utility.popChar();
		//utility.printStack();
		
		//function call to check stack is empty or not
		utility.isEmpty();

	}

}
