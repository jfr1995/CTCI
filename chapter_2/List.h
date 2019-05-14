

struct Node
{
    Node *next;
    int data;
};



class List
{
private:
    Node *head;

public:
    List(int d);
    void appendToTail(int d);
};