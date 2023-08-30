    var a = 5;     // var declaration
    let b = 15;    // let declaration
    const c = 25;  // const declaration
  
    if (true) {
      var a = 50;   
      let b = 150;  
      const c = 250; 
      console.log(a, b, c); // Outputs: 50 150 250
    }
  
    console.log(a, b, c); // Outputs: 50 15 25 (a is modified outside the block)
  
  