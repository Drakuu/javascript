// Function to display text with a delay between each letter
function displayTextWithDelay(text, delay) {
    return new Promise((resolve) => {
      let index = 0;

      function displayNextLetter() {
        if (index < text.length) {
          console.clear(); // Optional: Clear the console for a clean display
          document.getElementById('output').textContent += text[index];
          index++;
          setTimeout(displayNextLetter, delay);
        } else {
          resolve(); // Resolve the promise when all letters are displayed
        }
      }

      // Start displaying letters
      displayNextLetter();
    });
  }

  // Asynchronous function to simulate a hacking program
  async function hackProgram() {
    try {
     await displayTextWithDelay("Initiating Hack Program...\n" , 100);
      await displayTextWithDelay("Hacking Mobilephone Username...\n", 100);
      await displayTextWithDelay("Connecting to Facebook and other Social Media handles...\n", 100);
      await displayTextWithDelay("Username Found: Malik Siyyam\n", 100);
      await displayTextWithDelay("Connecting to (+92 331 0437878) Browser ... \n", 100);
      await displayTextWithDelay("Now Programmer has all the assets of Malik Siyyam \n", 100);
      await  displayTextWithDelay("Hacking program completed!",100);
    } catch (error) {
      console.error("Error during hacking:", error);
    }
  }





let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Initiating Hack Program...");
    resolve("Step 1 completed");
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hacking Mobilephone Username...");
    resolve("Step 2 completed");
  }, 4000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Connecting to Facebook and other Social Media handles...");
    resolve("Step 3 completed");
  }, 6000);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Username Found: Malik Siyyam");
    resolve("Step 4 completed");
  }, 8000);
});

let p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Connecting to (+92 331 0437878) Browser ... ");
    resolve("Step 5 completed");
  }, 10000);
});

let p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Now Programmer have all the assests of Malik Siyyam ");
    resolve("Step 6 completed");
  }, 12000);
});
let p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hacking program completed!");
   
  }, 14000);
});

// Using async/await to handle promises sequentially
 // function hackProgram() {
  
 //    const result1 =  p1;
 //    console.log(result1);

 //    const result2 =  p2;
 //    console.log(result2);

 //    const result3 = p3;
 //    console.log(result3);

 //    const result4 =  p4;
 //    console.log(result4);

 //    const result5 = p5;
 //    console.log(result5);

 //    const result6 =  p6;
 //    console.log(result6);

 // }


 // Call the function to start the hacking program when the page loads
  window.onload = () => {
    hackProgram();
  };