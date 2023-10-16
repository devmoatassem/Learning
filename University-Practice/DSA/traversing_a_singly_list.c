#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *link;
};

void count_nodes_in_list(struct node *head){
    int count=0;
    struct node *ptrtemp=NULL;
    ptrtemp=head;
    if(head==NULL){
        printf("List is empty");

    }
    else{
        
        while(ptrtemp!=NULL){
            count++;
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
     count_nodes_in_list(head);


}