window.onload = function(){
    let abc=this.document.getElementById('abc')
    let submit=this.document.getElementById('submit')
    let enroll=this.document.getElementById('enroll')
    let close=this.document.getElementById('close')
    let myimgy=this.document.getElementById('myimgy')
   





        function check_empty() {
            if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('phno').value == "") {
            alert("Fill All Fields !");
            } else {
            document.getElementById('form').submit();
            alert("Form Submitted Successfully... Information regarding fee payment will be circulated to your registered email-id");
            abc.style.display="none";
            }
            }
    enroll.onclick=function(){
        abc.style.display="block";
    }

   
    submit.onclick=function(){
        check_empty()

       
        
       
        
    }
    close.onclick=function(){
     
        abc.style.display="none";
    }
    myimgy.onclick=function(){
        alert("You can contact us on +91 5679845234 toll free")
    }
    let mypara2=this.document.getElementById('mypara2');
    let readm=this.document.getElementById('readm');
    let call=this.document.getElementById('call');
    readm.onclick=function ()
    {
        if(readm.innerText=="Read more")
        {
            mypara2.style.display="block";
            readm.innerText="Read less";
        }
        
        else
        {
            mypara2.style.display="none";
            readm.innerText="Read more";
        }
        
        
    }
    call.onclick=function ()
    {
        alert("Call us on 011-25678239 toll free ")
    }


}