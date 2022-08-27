function Order(CardName, PhoneNum, EmailAdd, CardNumber, ExpirationMonth, ExpirationYear, CVC)
{
   this.CardName = CardName;
   this.PhoneNum = PhoneNum;
   this.EmailAdd = EmailAdd;
   this.CardNumber = CardNumber;
   this.ExpirationMonth = ExpirationMonth;
   this.ExpirationYear = ExpirationYear;
   this.CVC = CVC;
}

function ValidateForm(CardName, PhoneNum, EmailAdd, CardNumber, ExpirationMonth, ExpirationYear, CVC)
{
	er1 = document.getElementById("er1");
	er6 = document.getElementById("er6");
	er7 = document.getElementById("er7");
	er2 = document.getElementById("er2");
	er3 = document.getElementById("er3");
	er4 = document.getElementById("er4");
	er5 = document.getElementById("er5");
	
	namec = document.getElementById("namec");
	phone = document.getElementById("phone");
	email = document.getElementById("email");
	numc = document.getElementById("numc");
	expm = document.getElementById("expm");
	expy = document.getElementById("expy");
	cvc = document.getElementById("cvc");
	
	var letters = /^[A-Za-z\s]+$/;   

	if(CardName.value.match(letters))  
		{  
		  	namec.style.borderColor = "green";
			er1.innerHTML=''; 
			
			  var phoneno = /^([0-9]{10})$/;  
			  if(PhoneNum.value.match(phoneno))  
				{  
					phone.style.borderColor = "green";  
					er6.innerHTML=''; 
				}  
			  else  
				{  
					er6.innerHTML='*Please input 10 numbers';  
					er6.style.color="red";
					phone.style.borderColor = "red";				
					return false;  
				} 
				
			  var emailpatt = /^([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,})$/;  
			  if(EmailAdd.value.match(emailpatt))  
				{  
					email.style.borderColor = "green";  
					er7.innerHTML=''; 
				}  
			  else  
				{  
					er7.innerHTML='*Please enter a correct email address';  
					er7.style.color="red";
					email.style.borderColor = "red";				
					return false;  
				} 	
			  var cardno = /^([0-9]{16})$/;  
			  if(CardNumber.value.match(cardno))  
				{  
					numc.style.borderColor = "green";  
					er2.innerHTML=''; 
				}  
			  else  
				{  
					er2.innerHTML='*Please input 16 numbers';  
					er2.style.color="red";
					numc.style.borderColor = "red";				
					return false;  
				} 
				
			  var expmno = /^([0-9]{2})$/;  
			  if(ExpirationMonth.value.match(expmno))  
				{  
					expm.style.borderColor = "green"; 
					er3.innerHTML=''; 
				}  
			  else  
				{  
					er3.innerHTML='*Please input 2 numbers';  
					er3.style.color="red";
					expm.style.borderColor = "red";
				return false;  
				}  
				
			  var expyno = /^([0-9]{4})$/;  
			  if(ExpirationYear.value.match(expyno))  
				{  
					expy.style.borderColor = "green";  
					er4.innerHTML=''; 
				}  
			  else  
				{  
					er4.innerHTML='*Please input 4 numbers';  
					er4.style.color="red";
					expy.style.borderColor = "red";
					return false;  
				}  
	
			  var cvcno = /^([0-9]{3})$/;  
			  if(CVC.value.match(cvcno))  
				{  
					cvc.style.borderColor = "green";  
					er5.innerHTML=''; 
					alert("Thank you for your Purchase! We hope you enjoy your membership!");
				}  
			  else  
				{  
					er5.innerHTML='*Please input 3 numbers';  
					er5.style.color="red";
					cvc.style.borderColor = "red";
				return false;  
				}  
		}  
		else  
		{  
			er1.innerHTML='*Please input alphabet characters only';  
			er1.style.color="red";
			namec.style.borderColor = "red";
			return false;  
		}  
}