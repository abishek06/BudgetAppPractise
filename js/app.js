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

    this.expenseList = document.getElementById('expense-list');
    //to input Id and Object creation
    this.itemId=0;
    this.item={};
    this.itemArray=[];
    
  }

  
  budgetSubmitForm(){    
    var enteredBudgetText = this.budgetInput.value;      
    if(enteredBudgetText<=0){
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>The value cannot be negative or zero</p>`;
      setTimeout(() => {
        this.budgetFeedback.classList.remove('showItem');
        this.budgetFeedback.innerHTML = '';
      }, 3000);     
    }
    else    
      this.budgetAmount.textContent = enteredBudgetText;
    
      this.budgetInput.value='';
  }

  expenseSubmitForm(){
      let expenseText =  this.amountInput.value;
      if(expenseText<=0){
        this.expenseFeedback.classList.add('showItem');
        this.expenseFeedback.innerHTML=`<p>The value cannot be negative or zero</p>`;
        setTimeout(() => {
          this.expenseFeedback.classList.remove('showItem');
        }, 3000);
      }
      else{
        if(this.expenseAmount.textContent==0)
            this.expenseAmount.textContent=expenseText;
        else
            this.expenseAmount.textContent= parseInt(expenseText)+ parseInt(this.expenseAmount.textContent);
      }
      this.amountInput.value='';


      
      this.item={
        id : this.itemId,
        title : this.expenseInput.value,
        amount : expenseText,
      }
      this.itemId++;
      this.itemArray.push(this.item);

      this.bindExpenseList(this.itemArray);
        
  }

     bindExpenseList(itemList) {
       console.log(itemList);
      
       itemList.forEach(item => {
          const div = document.createElement('div');
         div.classList.add('expense');
   
         div.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
     
         <h6 class="expense-title mb-0 text-uppercase list-item"> ${item.title}</h6>
         <h5 class="expense-amount mb-0 list-item">$${item.amount}</h5>
     
         <div class="expense-icons list-item">
     
          <a href="#" class="edit-icon mx-2" data-id="${item.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${item.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div`;
        this.expenseList.appendChild(div);
       });
      
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
  

  budgetForm.addEventListener('submit',function(event){
    event.preventDefault();
    ui.budgetSubmitForm();
  });

  expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.expenseSubmitForm();
  });
}


