package com.bridgelabz.fellowshipprograms.datastructure;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Scanner;

import com.bridgelabz.fellowshipprograms.datastructure.linkedlist.Node;


public class Utildata 
{
	//static scanner
	static Scanner sc = new Scanner(System.in); 
	static linkedlist list = new linkedlist();
	public String readWords() throws FileNotFoundException 
	{
		File f1 = new File("/home/admin1/Desktop/FellowshipProgramsDeepak/FellowshipPrograms/src/com/bridgelabz/fellowshipprograms/files/thakur.txt");
		String str = null;
		String name="";
		while (sc.hasNextLine())
		{
			str = sc.nextLine();
			//System.out.println(str);
			String words[] = str.split(" ");
			
			
			name=Arrays.toString(words);
			list.addNode(name);
			//System.out.println(name);
		}
		return name;
		
	}	
		
	/*
	 --------------------------------------------------------------------------------
	 Linked list operations on integer values
	 */	
	
	
		class Node
		{
			int datad;
			String data;
			Node next;
			int d;
			
			//constructor 
			Node(int d)
			{
				this.datad = d;
				this.next = null;
			}
			Node(String data)
			{
				this.data = data;
				this.next = null;
			}
		}
		public static Node head = null;
		public Node last = null;
		
		// add nodes to list	
	    
		public void addNode(int d)
		{
			//System.out.println(d);
			Node newnode = new Node(d);
			if(head == null)
			{
				head = newnode;
				last = newnode;
				newnode.datad = d;
				System.out.println(d);
			}
			else
			{
				last.next = newnode;
				last = newnode;
				newnode.datad = d;
				System.out.println(d);
			}
		}
	    /*
	     * print list nodes
	     */
		public void prinInttList()
		{
			Node current = head;
			if(head == null)
			{
				System.out.println("List is empty");
			}
			System.out.println("Nodes of list are :");
			System.out.println();
			while(current.next != null)
			{
			
				System.out.print(current.datad+" ");
				current = current.next;
			}
			System.out.println();
		}
		
		/*
		 * function to sort numbers which are take from file
		 */
		public void sortNum(int [] num)
		{
			int i=0;
			int j=0;
			for(i=0; i<=num.length; i++)
			{
				for(j=i+1; j<num.length; j++)
				{
					if(num[i] > num[j])
					{
						int tmp = num[i];
						num[i] = num[j];
						num[j] = tmp;
					}
				}
			}
			
			for(i=0; i<num.length; i++)
			{
				//System.out.print(num[i]+" ");
				addNode(num[i]);
			}
		}
		/*
		 * function to search given no in list
		 */
		public void searchInt(int no)
		{
			int i=1;
			int flag = 0;
			Node current = head;
			
			if(head == null)
			{
				System.out.println("List is empty");
			}
			while(current != null)
			{
				if(current.d == no)
				{
					flag = 1;
	     			//System.out.println("The element found at position "+i);
				}
				current = current.next;
				i++;
				if(flag == 1)
				{
					System.out.println("The element found at position "+i);
				}
				else
				{
					System.out.println("Element not found");
				}

			}
		}
		
		/*
		  * remove element from list
		  * by given key
		  */
		public void removeInt(int key)
		{
			 Node current = head;
			 Node prev = null;
	   	     if(head == null)
			 {
				System.out.println("List is empty");
			 }
			 else if(current.next != null && current.datad == key)
	   	     {
				current = current.next;
			 }
			 while(current.next != null && current.datad != key)
			 {
				prev= current.next;
				current = current.next;
			 }
				prev.next = current.next;
		}
			
	/*
	 * ----------------------------------------------------------------------------------------
	 *            Linked List for String Data
	 */
			
		///add nodes to list
		
		
			public void addStringNode(String data)
			{
				Node newnode = new Node(data);
				if(head == null)
				{
					head = newnode;
					last = newnode;
				}
				else
				{
					last.next = newnode;
					last = newnode;
				}
			}	

	///print list nodes
			
			public void printList() 
			{
				Node current = head;
				if(head == null)
				{
					System.out.println("List is empty");
				}
				System.out.println("Nodes of list are :");
				while(current != null)
				{
					System.out.print(current.data+" ");
					current = current.next;
				}
				
			}
		
			
			
		///function to count size of list
			 
			public void listSize()
			{
				int count = 0;
				Node current = head;
				while(current != null)
				{
					count++;
					current = current.next;
				}
				System.out.println("Size of list is : "+count);
			}
		
	
		///method to search the word from list
			
			
			 public boolean searchString(String key)
			 {
				int i=1;
				int flag = 0;
				Node current = head;
				
				if(head == null)
				{
//					System.out.println("List is empty");
					return false;
				}
				while(current != null)
				{
					if(current.data == key)
					{
						return true;
		     			//System.out.println("The element found at position "+i);
					}
					current = current.next;
					i++;
//					if(flag == 1)
//					{
//						System.out.println("The element found at position "+i);
//					}
//					else
//					{
//						System.out.println("Element not found");
//					}

				}
				return false;
			 }
			/*
			  * remove element from list
			  * @param key
			  */
			static void removeString(String key)
			{
				 Node current = head;
				 Node prev = null;
		    	 if(head == null)
				 {
					System.out.println("List is empty");
				 }
				 else if(current != null && current.data == key)
		    	 {
					current = current.next;
				 }
				 while(current != null && current.data != key)
				 {
					prev= current;
					current = current.next;
				 }
					prev.next = current.next;
			}
				
			
	/*
	 * ------------------------------------------------------------------------
	 *               Stack using linked list		
	 */
			//class to create stack
			
			StackNode top;
			class StackNode
			{
				int data;
				StackNode next;
				StackNode top; 
				//constructor to set top to null
				StackNode()
				{
					this.top = null;
				}
			}
			
			/*
			 function to add elements in stack
			 add data x into stack
			 */
			public void push(int x)
			{
				StackNode tmp = new StackNode();
				
				tmp.data = x;
				tmp.next = top;
				top = tmp;
			}
			
		/*
		function to remove top elements from stack and reutun stack data
		 */
			public int pop()
			{
				if(top == null)
				{
					System.out.println("Stack is empty");
				}
				int tmp =top.data;
				top = top.next;
				System.out.println("Top element "+tmp+" is removed from stack");
				return tmp;
				
			}
			
		/*
		 function print top element of stack
		*/
			public int peak()
			{
				if(top == null)
				{
					System.out.println("Stack is empty");
				}
				System.out.println(top.data);
				return top.data;
				
			}
			
		/*
		function to show all stack elements
		*/
			public void printStack()
			{
				if(top == null)
				{
					System.out.println("Stack is empty");
				}
				StackNode tmp = top;
				System.out.println("Stack elements are : ");
				while(tmp != null)
				{
					System.out.println(tmp.data+" ");
					tmp = tmp.next;
				}
			}
		/*
		 function to count size of stack
		 */
			public void countSize()
			{
				int count = 0;
				StackNode temp = top;
				while(temp != null)
				{
					count++;
					temp = temp.next;
				}
				System.out.println("Size of stack is : "+count);
			}
			
	/*
	function to check stack is empty or not return null
	*/
			public boolean isEmpty()
			{
				return top==null;	
			}
			
		/*
		function to push char into stack
		*/
			public void pushChar(char ch[])
			{
				//int n = ch;
				int i=0;
				//char ch[] = expr.toCharArray();
				StackNode tmp = new StackNode();
				
				tmp.data = ch[i];
				tmp.next = top;
				top = tmp;
				i++;
			}
			
			/**
			 function to remove top char from stack and return eliminated data
			
			 */
			public char popChar()
			{
				if(top == null)
				{
					System.out.println("Stack is empty");
				}
				char tmp =(char) top.data;
				top = top.next;
				System.out.println("Top element "+tmp+" is removed from stack");
				return tmp;
						
			}
	  /*
	  function to check whether expression is balanced or not		
	  */
			public void checkBalancedExpr(String expr)
			{
				int n = expr.length();
				for(int i=0; i<n; i++)
				{
					//check opening parenthesis to push in stack 
					if(expr.charAt(i)== '{' || expr.charAt(i) == '[' || expr.charAt(i) == '(')
					{
						push(expr.charAt(i));
					}
					//to check current char and top of stack 
					//if matches pair 
					//remove from stack
					else if(top == null && (
							(expr.charAt(i)==']' && peak()=='[' )
							|| (expr.charAt(i)==')' && peak()=='(' )
							|| (expr.charAt(i)=='{' && peak()=='}')))
					{
						popChar();
					}
					else
					{
						push(expr.charAt(i));
					}
				}
				if(isEmpty() == true)
				{
					System.out.println("Expression is balanced");
				}
				else
				{
					System.out.println("Expression is not balanced");
				}
			}
	
	
	//function to take string from user
			public String readString()
			{
				// TODO Auto-generated method stub
				return sc.nextLine();
			}
			
			
			//function to take input from user
			public int readInt() 
			{
				// TODO Auto-generated method stub
				return sc.nextInt();
			}

	
	

}

