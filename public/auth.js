

//for auth.......
const cross=document.querySelector('#id02');
const cross1=document.querySelector('#id01');
const fill=document.querySelector('#fill1');
const fill1=document.querySelector('#fill2');
const fill3=document.querySelector('#out');
const dash=document.querySelector('#not-dashboard');
const dashboard=document.querySelector('#dashboard-user');
const dashboard1=document.querySelector('#dashboard-user1');

auth.onAuthStateChanged(user=>{
	if(user) {
        dash.style.display="none";
		 cross.style.display="none";
		 cross1.style.display="none";
		 fill.style.display="none";
         fill1.style.display= "none";
         fill3.style.display = "block";
         dashboard.style.display="block";
         dashboard1.style.display="block";
	} else{
		dash.style.display="block";
		 fill.style.display = "block";
         fill1.style.display = "block";
         fill3.style.display = "none";
          dashboard.style.display="none";
          dashboard1.style.display="none";
	}
})

//for signup.....
const signup = document.querySelector('#signup');
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email=signup['email'].value;
    const password=signup['psw'].value;
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  //alert(errorMessage);
  const errormass=document.querySelector('.error-mass2');

  errormass.innerHTML=errorMessage;
  signup['email'].value='';
  signup['psw'].value='';
  signup['psw-repeat'].value='';
});
    
 });

//for logout.....
const out=document.querySelector('#out');
out.addEventListener('click',(e)=>{
	e.preventDefault();
	auth.signOut().then(()=>{
		alert("User Logout");
		 
	});
	
});

//for login.......
const login=document.querySelector('#login');
login.addEventListener('submit', (e) => {
    e.preventDefault();
    var sk=0;
    const email=login['uname'].value;
    const password=login['psw'].value;
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  //alert(errorMessage);
  
  var errormass=document.querySelector('.error-mass');

  errormass.innerHTML=errorMessage;
  login['uname'].value='';
  login['psw'].value='';
});
    
 });
   
 //reset-password...

const resetpass = document.querySelector('#resetpass');
resetpass.addEventListener('click',(e)=>{
	e.preventDefault();
	cross1.style.display="none";
	document.getElementById('id03').style.display='block';
	var emailAddress ;
	const resetpass = document.querySelector('#repass');

    repass.addEventListener('submit',(e)=>{
    	e.preventDefault();
    	emailAddress=repass['uname'].value;
    	auth.sendPasswordResetEmail(emailAddress).then(function() {
        alert("Please cheak your Email a verification link is sent");
          }).catch(function(error) {
                alert(error.message);
                     });
    })
 });