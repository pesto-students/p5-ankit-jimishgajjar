# Exercise 5.3

```
In this exercise I Write a function called hasDuplicate which accepts an array and returns true or false if that array
contains a duplicate
```

#

# Question

![This is an image](https://i.postimg.cc/NMbGVCn5/Screenshot-2022-11-03-150615.png)

## Code

```
/*
 * Asignment 5.3
 * Write a function called hasDuplicate which accepts an array and
 * returns true or false if that array contains a duplicate
*/

// Function to find if the array has duplicates
// retrun true - if array does not contain any duplicates
// returns false - if array does contain any duplicates

function hasDuplicate(arr) {
  let arrSet = new Set(arr);

  return arrSet.size !== arr.length;
}

console.log(hasDuplicate([1, 2, 1, 3, 4, 3, 5, 6, 5]));
console.log(hasDuplicate([1, 2, 3, 4, 5, 6, 7]));
console.log(hasDuplicate([1, 2, 1, 4, 5, 6, 5]));
```

## Output

![This is an image](https://i.postimg.cc/pT0h8dRG/Screenshot-2022-11-03-150919.png)

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
