#include<stdio.h>
#include<stdlib.h>


struct revnode{
    int data;
    struct revnode *link;
};

struct revnode* revthelist(struct revnode *head){
    struct revnode *old=NULL;
    struct revnode *next=NULL;
    while (head!=NULL)
    {
        next=head->link;
        head->link=old;
        old=head;
        head=next;
    }
    head=old;
    return head;
    
}

void add_end(struct revnode *head,int data)
{
    struct revnode *newnode=(struct revnode*)malloc(sizeof(struct revnode));
    newnode->data=data;
    newnode->link=NULL;
    struct revnode *travptr=head;
    while (travptr->link!=NULL)
    {
        travptr=travptr->link;

    }
    travptr->link=newnode;

    
}

void print_count_singlylist(struct revnode *head){
    struct revnode *temp=head;
    if(head==NULL){
        printf("List is empty");

    }
    else{
        int count=0;
        
        while (temp!=NULL)
        {
            count++;
            printf("%d\t",temp->data);
            temp=temp->link;
            if (count%5==0)
            {
                printf("\n");
            }
            
        }
        printf("\n");
        
    }
}
void main()
{
    struct revnode *head=(struct revnode*)malloc(sizeof(struct revnode));
    head->data=1;
    head->link=NULL;
    for (size_t i = 2; i < 25; i++)
    {
        add_end(head,i);
    }
    
    printf("Singly Linked list is given below before reversal\n");
    print_count_singlylist(head);
    printf("Singly Linked list is given below after reversal\n");
    head=revthelist(head);
    print_count_singlylist(head);

    

}