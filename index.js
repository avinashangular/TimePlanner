

var sessionNumberElement = document.getElementById('SessionNumber');
var sessionDetails = document.getElementById('SessionDetails');
var saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', ()=>{
    if(sessionDetails.value != null && sessionDetails.value.trim() != '') {
        console.log(sessionNumberElement.value);
        console.log(sessionDetails.value);

        

        var blob = new Blob([sessionDetails.value], {type:"text/plain; charset=utf-8"});
        let fileName = `session-${new Date().toString()}-${sessionNumberElement.value}`;
        saveAs(blob, fileName); 
        
    }   


    // Clear Fields
    sessionDetails.value = null;
})

