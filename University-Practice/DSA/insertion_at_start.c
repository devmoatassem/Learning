#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *link;
};

struct node* add_start(struct node *head,int data)
{
    struct node *newnode=(struct node *)malloc(sizeof(struct node));
    newnode->data=data;
    newnode->link=NULL;
    newnode->link=head;
    head=newnode;
    return head; 
}



void count_and_print_nodes_in_list(struct node *head){
    int count=0;
    struct node *ptrtemp;
    ptrtemp=head;
    if(head==NULL){
        printf("List is empty");

    }
    else{
        
        while(ptrtemp!=NULL){
            count++;
            printf("Data at node %d is %d\n",count, ptrtemp->data);
            ptrtemp=ptrtemp->link;

        }
        printf("***Total number of nodes are %d ***",count);
    }
}
void main()
{
    struct node *head=(struct node *)malloc(sizeof(struct node));
     head->data=3;
     head->link=NULL;

    struct node *current=(struct node *)malloc(sizeof(struct node));
     current->data=9;
     current->link=NULL;

     head->link=current;

     current=(struct node *)malloc(sizeof(struct node));
     current->data=3;
     current->link=NULL;

     head->link->link=current;

     int year=2019;
    head=add_start(head,year);
    count_and_print_nodes_in_list(head);
}