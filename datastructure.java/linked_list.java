package com.bridgelabz.fellowshipprograms.datastructure;

import com.bridgelabz.fellowshipprograms.datastructure.linked_list_str.Node;

public class linked_list 
{
	Node head;
	class Node
	{
		int data;
		Node next;
		public Object nextNode;
		Node(int d)
		{
			this.data = d;
			this.next = null;
		}
	}
	public Node last = null;
	
	 // Function for Lsit
    public void List()
    {
        if(head ==null)
        {
            System.out.println("List is Empty ");
        }
    }
    
    //size for the list
    public  int size()
    {
         int count=0;
         Node temp =head;
         while( temp.nextNode != null)
         {
             temp=(Node) temp.nextNode;
             count++;
         }
         System.out.println("sizze of Linked List"+count);
         return count;
    }
	
// add nodes to list
	public void addNode(int data)
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
	
// print list nodes
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
			System.out.println(current.data);
			current = current.next;
		}
	}
//Add at first
	
	public void addfirst(int data)
	{
		Node newnode = new Node(data);
		if(head == null)
		{
			head = newnode;
			last = newnode;
		}
		else
		{
			Node temp = head;
			head = newnode;
			head.next = temp;
		}
	}
// add at last
	
	public void addLast(int data)
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
// add at position
	
	public void addAtPos(int data, int pos)
	{
		Node newnode = new Node(data);
		Node prev = head;
		/*
		 * for(int i=0; i<pos-2; i++) { temp = temp.next; }
		 */
		int count =1;
		while(count < pos-1)
		{
			prev = prev.next;
			count++;
		}
		Node current = prev.next;
		newnode.next = current;
		prev.next= newnode;
		System.out.println("Node "+newnode.data +" at position "+pos);
	}
	
//remove node
	public void remove(int key)
	{
		Node current = head;
		Node prev = null;
		if(current != null && current.data == key)
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
	
	
//remove first node 
	public void removeFirst()
	{
		Node current = head;
		if(head == null)
		{
			System.out.println("list is empty");
		}
		else
		{
			head = head.next;
		}
		
	}
	
	
//remove last node
	public void removeLast()
	{
		Node current = head;
		Node prev = null;
		if(head == null)
		{
			System.out.println("list is empty");
		}
		while(current.next != null)
		{
			prev = current;
			current = current.next;
		}
		prev.next = null;
	}
//find middle of list 
	
	
	public void findMid()
	{
		Node current = head;
		int count =1;
		if(head == null)
		{
			System.out.println("list is empty");
		}
		while(current.next != null)
		{
			count++;
			current = current.next;
		}
		int midpos = (count/2);
		
			current = head;
			for(int i=1; i<= midpos; i++)
			{
				current = current.next;
			}
		System.out.println("Middle element of list is : "+current.data);
	}
	
	
//remove middle of list
	public void removeMid()
	{
		Node current = head;
		Node prev = null;
		int count =1;
		if(head == null)
		{
			System.out.println("list is empty");
		}
		while(current.next != null)
		{
			count++;
			current = current.next;
		}
		int midpos = (count/2);
		
			current = head;
			for(int i=1; i<= midpos; i++)
			{
				prev = current;
				current = current.next;
			}
			prev.next = current.next;
		System.out.println("Middle element of list is removed : "+current.data);
	}

}
