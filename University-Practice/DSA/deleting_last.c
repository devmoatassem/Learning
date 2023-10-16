#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *link;
};

struct node* delete_end(struct node *head){
    
    if(head==NULL){
        printf("List is empty");

    }
    //to delete 1st node if it's it's last
    else if (head->link==NULL)
    {
        free(head);
        head=NULL;
    }
    else{
        struct node *ptrtrav=head;
    
        struct node *deletenode=head;

        while(ptrtrav->link->link!=NULL){
            
            ptrtrav=ptrtrav->link;

        }

        deletenode=ptrtrav->link;
        ptrtrav->link=NULL;
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

    
     head=delete_end(head);
    count_and_print_nodes_in_list(head);
}