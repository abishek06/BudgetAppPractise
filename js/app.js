class UI{

  // Define all input controls with values
  constructor(){
    
    //Below 2 class selectors for warning in case of negative values submitted.
    this.budgetFeedback = document.querySelector('.budget-feedback');
    this.expenseFeedback = document.querySelector('.expense-feedback');

    //Budget Form
    this.budgetForm= document.getElementById('budget-form');
    this.budgetInput = document.getElementById('budget-input');


    //Expense From
    this.expenseForm = document.getElementById('expense-form');
    this.expenseInput = document.getElementById('expense-input');
    this.amountInput = document.getElementById('amount-input');


    //Balance show and Expense show controls
    this.budgetAmount = document.getElementById('budget-amount');
    this.expenseAmount = document.getElementById('expense-amount');
    this.balanceAmount = document.getElementById('balance-amount');

    //to input Id and Object creation
    this.itemId=0;
    this.item={};
  }

  
  budgetSubmitForm(){    
    var enteredBudgetText = this.budgetInput.value;  

    if(enteredBudgetText<=0){
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>The value cannot be negative or zero</p>`;
    }

  }

  
}



document.addEventListener('DOMContentLoaded',function(){
   EventListeners();
});

function EventListeners(){  
  const ui = new UI();
  console.log('Event Listeners Called');
  var budgetForm = document.getElementById('budget-form');
  var expenseForm = document.getElementById('expense-form');
  var expenseList = document.getElementById('expense-list');

  budgetForm.addEventListener('submit',function(event){
    event.preventDefault();
    ui.budgetSubmitForm();
  });
}


