package com.bridgelabz.fellowshipprograms.datastructure;

public class linkedlist 
{
	/*
	 LinkedList operations on string 
	 */
	 static Node head;
	 public class Node
	 {
		 String data;
		 Node next;
		//Contructor of node
		 Node(String data)
		 {
			 this.data = data;
			 this.next = null;
		 }
	 }
	 
	 
	 //add String nodes in list
	 public static Node last =null;
	 public String addNode(String data)
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
		return data;
	 }
	 
	 
	 // print list
	 public static void printList()
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
	 
	 
	 //search the word from list
	 public static void searchKey(String key)
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
			if(current.data == key)
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
	 
	 
	 
	 
	 //remove element from list by using key
	 
		static void remove(String key)
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

}
