# Exercise Week 7 Linked List

## Problem 7.1 : Reverse the Linked list

Given a linked list of N nodes. The task is to reverse this list.

Example 1:

Input:

LinkedList: 1->2->3->4->5->6

Output: 6 5 4 3 2 1

Explanation: After reversing the list, elements are 6->5->4->3->2->1.

Example 2:

Input:

LinkedList: 2->7->8->9->10

Output: 10 9 8 7 2

Explanation: After reversing the list,
elements are 10->9->8->7->2.
Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).
Constraints: 1 <= N <= 104

## Output

```
Original Linked list
[ 10, 20, 30, 40, 50 ]
Reverse Linked list
[ 50, 40, 30, 20, 10 ]
```

#

## Problem 7.2: Rotate Linked List

Given a singly linked list of size N. The task is to left-shift the linked list by k nodes, where k is a given positive integer smaller than or equal to length of the linked list.

Example 1:

Input:

N = 5

value[] = {2, 4, 7, 8, 9} k = 3

Output: 8 9 2 4 7

Explanation:

Rotate 1: 4 -> 7 -> 8 -> 9 -> 2

Rotate 2: 7 -> 8 -> 9 -> 2 -> 4

Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

Example 2:

Input:
N = 8
value[] = {1, 2, 3, 4, 5, 6, 7, 8}
k = 4

Output: 5 6 7 8 1 2 3 4

## Output

```
k = 2
Original Linked list
[ 10, 20, 30, 40, 50, 60, 70 ]
Roteted Linked list
[ 30, 40, 50, 60, 70, 10, 20 ]
```

#

## Problem 7.3: Detect loop in a linked list

Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

Example 1:

Input: N = 3 value[] = {1,3,4} x = 2

Output: True

Explanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is given
which means last node is connected with xth node of linked list. Therefore, there exists a loop.

Example 2:

Input: N = 4 value[] = {1,8,3,4} x = 0

Output: False

Explanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not contains any loop.

Expected Time Complexity: O(N) Expected Auxiliary Space: O(1)
Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103

## Output

```
Input = [1, 2, 3, 5]
k = 4;

Loop detected with 3, 4, 5
```

#

## Stack and Queue

## Problem 7.4: Parenthesis Checker

Given an expression string x. Examine whether the pairs and the orders of
“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp = “[()]{}{()()}” and 'false' for exp = “[(])”.

Example 1:

Input: {([])}

Output: true

Explanation:

{ ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of nbalanced bracket.

Example 2:

Input: ()

Output: true

Explanation:

(). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced way.

Example 3:

Input: ([]

Output: false

Explanation:

([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be unbalanced

Expected Time Complexity: O(|x|) Expected Auixilliary Space: O(|x|)
Constraints: 1 ≤ |x| ≤ 32000

## Output

```
Input 1 = "{[()]}";
Input 2 = "{[(]]}";
Input 3 = "{[(]}";

True
False
False
```

#

## Problem 7.5: Next Greater ELement

Given an array arr{} of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array. Next greater element of an element in the array is the nearest element on the right which is greater than the current element. If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

Example 1:

Input: N = 4, arr[] = [1 3 2 4]

Output: 3 4 4 -1

Explanation:

In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.

Example 2:

Input: N = 5, arr[] [6 8 0 1 3]

Output: 8 -1 1 3 -1

Explanation:

In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 , for 1 it is 3 and then for 3 there is no larger element on right and hence -1.

Expected Time Complexity : O(N) Expected Auxilliary Space : O(N)
Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018

## Output

```
Input 1 = [11, 13, 21, 3];
Input 2 = [1, 3, 2, 4];
Input 3 = [6, 8, 0, 1, 3];

Output 1 [ 13, 21, -1, -1 ]
Output 2 [ 3, 4, 4, -1 ]
Output 3 [ 8, -1, 1, 3, -1 ]
```

#

## Problem 7.6: Implement a Queue using 2 stack

Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the poped element)

Example 1:

Input:

5

1 2 1 3 2 1 4 2

Output: 2 3

Explanation:

In the first testcase

1 2 the queue will be {2}

1 3 the queue will be {2 3}

2 poped element will be 2 the queue will be {3}

1 4 the queue will be {3 4}

2 poped element will be 3.

Example 2:

Input:
4

1 2 2 2 1 4

Output: 2 -1

Explanation:

In the second testcase

1 2 the queue will be {2}

2 poped element will be 2 and then the queue will be empty 2 the queue is empty and hence -1

1 4 the queue will be {4}.

Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() and O(1) for pop()

Expected Auxilliary Space : O(1).

Constraints: 1 <= Q <= 100 1 <= x <= 100

## Output

```
Input [ 1, 2, 3, 4, 5, 6 ]

Your Queue Is
[ 1, 2, 3, 4, 5, 6 ]
Item Deque 1
Item Deque 2
Item Deque 3
Your Queue After Deque Is
[ 4, 5, 6 ]
```

<h3 align="center" > <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30" height="30" style="margin-right: 10px;">Connect with me 🤝 </h3>

<div align="center"  class="icons-social" style="margin-left: 10px;">
        <a style="margin-left: 10px;"  target="_blank" href="https://www.linkedin.com/in/jimishgajjar">
			<img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png">
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://github.com/jimishgajjar">
            <img src="https://img.icons8.com/doodle/40/000000/github--v1.png">
        </a>
		<a style="margin-left: 10px;" target="_blank" href="https://stackoverflow.com/users/9066199/jimish-gajjar">
				<img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png">
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://www.instagram.com/jimish.gajjar/">
			<img src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png">
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://twitter.com/JimishGajjar">
			<img src="https://img.icons8.com/doodle/1x/twitter-squared--v2.png" >
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://www.youtube.com/channel/UCiVI9gZzMFf9G1SIpoRqPEg?view_as=subscriber">
				<img src="https://img.icons8.com/doodle/1x/youtube--v2.png" >
        </a>
	    <a style="margin-left: 10px;" target="_blank" href="https://jimishgajjar.in/">
			<img src="https://img.icons8.com/external-sketchy-juicy-fish/0.6x/external-blog-online-services-sketchy-sketchy-juicy-fish.png">
        </a>
</div>
