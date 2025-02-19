fn main() {
//	Obviously these don't work together at once,
//  but I don't feel like putting these into different rust files so you can compile them nicely. 

//  Code Snippet 1: Simply showcases default immutability with variables defined as shown, 
//  mut allows them to be mutable and lets this code compile properly
//	let x = 5;
	let mut x = 5;	
	println!("The value of x is: {x}");
	x = 6;
	println!("The value of x is: {x}");

//	Code Snippet 2: Just showcasing how consts usually look like, convention is UPPERCASE_WITH_UNDERSCORES,
//  Not sure how I feel about that style, but it's useful having that convention so whatever
	const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;

//	Code Snippet 3: First showcase of variable shadowing, inner scope prints 12 & outer scope prints 6.
	let x = 5;
	let x = x + 1;
	
    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");

//	Code Snippet 4: expressing in detail how shadowing works, 
//  Adding mut in this situation returns an error because of the shadowing
	let spaces = "   ";
//	let mut spaces = "   ";
	let spaces = spaces.len();

}
