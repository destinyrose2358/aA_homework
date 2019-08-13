for 100,000 elements I suspect that it would take about 16 minutes to sort using bubblesort

reasoning:
O(n ^ 2) computation time since per cycle you are able to move the largest unsorted element to its
final position, and per cycle you compare every pair of elements, giving n * n steps.
it took 2.5 seconds for 5,000 elements and so had about 5,000 ^ 2 steps.
this means that for 100,000 elements you would have ((100,000 / 5,000) ^ 2) * 2.5 seconds ~ 16 minutes

then for mergesort I suspect that it should take .5 seconds to sort 100,000 elements

reasoning:
O(n*log(n)) computation time since we divide the input space by 2 until we get to 0-1 element arrays, and then sort from there
it took 0.235828 seconds to sort 50,000 elements, so if we do 100,000 * log(100,000) divided by 50,000 * log(50,000) then multiply by
the original computation time then we get ~.5 seconds.

overall this means that the program would take ~48 minutes.