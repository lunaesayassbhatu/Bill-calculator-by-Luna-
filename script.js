const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
  
    const tip = parseFloat(document.querySelector("#tip").value);
    const bill = parseFloat(document.querySelector("#Bill").value);
  
    if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip <= 0) {
      alert("Please enter valid data");
      return;
    }
  
    // Calculate tip amount and total bill
    const tipAmount = (bill * (tip / 100)).toFixed(2);
    const totalBill = (bill + parseFloat(tipAmount)).toFixed(2);
  
    // Update the UI with calculated values
    document.querySelector(".total-tip").innerHTML = `${tipAmount}`;
    document.querySelector(".total").innerHTML = totalBill;
  });