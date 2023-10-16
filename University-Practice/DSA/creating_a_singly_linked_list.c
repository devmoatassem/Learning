#include<stdio.h>
#include<stdlib.h>

struct node
{
    int d;
    struct node *link;
};
 void main()
 {
     struct node *head=(struct node *)malloc(sizeof(struct node));
     head->d=3;
     head->link=NULL;

     struct node *current=(struct node *)malloc(sizeof(struct node));
     current->d=9;
     current->link=NULL;

     head->link=current;

     current=(struct node *)malloc(sizeof(struct node));
     current->d=3;
     current->link=NULL;

     head->link->link=current;//head->link refreing to address of 2nd node stored in link location of 1st

    printf("%d %d %d",head->d,head->link->d,head->link->link->d);
 }