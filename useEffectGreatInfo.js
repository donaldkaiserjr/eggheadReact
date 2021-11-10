// Every rerender
useEffect(() => {
	console.log("I run every time this component re-renders")
});

// onMount
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);

// Condition based 
useEffect(() => {
	console.log("I run every time my condition is changed")
}, [condition]);

// Condition based with "clean up"
useEffect(() => {
	console.log("I run every time my condition is changed")
	
	return () => {
    	console.log("Use this return as a 'clean up tool' (this runs before the actual code)")
    }
}, [condition]);
