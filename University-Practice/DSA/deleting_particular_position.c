#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *link;
};

struct node* delete_particular(struct node *head,int pos)
{
    struct node *ptrtemp=head;
    
    struct node *deletenode=head;   
    if(head==NULL)
    {
        printf("List is already empty ");
    }
    else if(pos==1){
        head=deletenode->link;
        
        free(deletenode);
        deletenode=NULL;
        
    }
    else
    {

    
        while(pos!=1){

            pos--;
            ptrtemp=deletenode;
            deletenode=deletenode->link;


        }
        ptrtemp->link=deletenode->link;
        free(deletenode);
        deletenode=NULL;


    }
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

  
     int p=1;
     head=delete_particular(head,p);
    count_and_print_nodes_in_list(head);
}