function validate(){
    const studentIdCtrl = document.getElementById("studentId")
    const nameCtrl = document.getElementById("name")
    const mailCtrl = document.getElementById("email")
    const genderCtrls = document.getElementsByName("gender")
    const favoritesCtrls = document.getElementsByName("favorites[]")
    const nationalCtrl = document.getElementById("nationality")
    const noteCtrl = document.getElementById("note")
    let isValid = true;
   
    //id
    if(isEmpty(studentIdCtrl.value)){
        studentIdCtrl.classList.remove("valid")
        studentIdCtrl.classList.add("invalid")
        isValid = false
    } else{
        studentIdCtrl.classList.remove("invalid");
        studentIdCtrl.classList.add("valid")
        removeAutoFill(studentIdCtrl)
    }
    //name
    if(isEmpty(nameCtrl.value)){
        nameCtrl.classList.remove("valid")
        nameCtrl.classList.add("invalid")
        isValid = false
    } else{
        nameCtrl.classList.remove("invalid");
        nameCtrl.classList.add("valid")
        removeAutoFill(nameCtrl)
    }

    //mail
    if( isEmpty(mailCtrl.value) ||!isEmail(mailCtrl.value)){
        mailCtrl.classList.remove("valid")
        mailCtrl.classList.add("invalid")
        isValid = false
    } else{
        mailCtrl.classList.remove("invalid");
        mailCtrl.classList.add("valid")
        removeAutoFill(mailCtrl)
    }
    //gender
    if(!isChecked(genderCtrls)){
      genderCtrls.forEach(element => {
        element.classList.remove("valid")
        element.classList.add("invalid-rc")
        });
        isValid=false
    } else{
        genderCtrls.forEach(element => {
        element.classList.remove("invalid-rc")
        element.classList.add("valid")
            
        });
    }

    //favorites
    if(!isChecked(favoritesCtrls)){
        favoritesCtrls.forEach(element => {
          element.classList.remove("valid")
          element.classList.add("invalid-rc")
          });
          isValid=false
      } else{
         favoritesCtrls.forEach(element => {
          element.classList.remove("invalid-rc")
          element.classList.add("valid")
              
          });
      }

      //nationality
      if( isEmpty(nationalCtrl.value)){
        nationalCtrl.classList.remove("valid")
        nationalCtrl.classList.add("invalid")
        isValid = false
    } else{
        nationalCtrl.classList.remove("invalid");
        nationalCtrl.classList.add("valid")
    }
     //note
     if( isEmpty(noteCtrl.value)){
        noteCtrl.classList.remove("valid")
        noteCtrl.classList.add("invalid")
        isValid = false
    } else{
        noteCtrl.classList.remove("invalid");
        noteCtrl.classList.add("valid")
    }




    if(isValid){
        // alert("thông tin đăng kí thành công")
        console.log(studentIdCtrl.value);
        console.log(nameCtrl.value);
        console.log(mailCtrl.value);
        //  console.log(favoritesCtrls.value);
        favoritesCtrls.forEach(elm => {
            if (elm.checked === true) {
              console.log(elm.value);
            }
        })
        genderCtrls.forEach((elm) => {
          if (elm.checked === true) {
            console.log(elm.value);
          }
        });
        // console.log(genderCtrls.value);
        console.log(nationalCtrl.value);
        console.log(noteCtrl.value);
    }
    
}
function isEmpty(value){
    if(!!!value || value.isEmpty){
        return true ;

    }
    return false ;

}
function isEmail(value){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    return value.match(filter);
}

function isChecked(ctrls){
    for(const ctrl of ctrls){
        if(ctrl.checked){
            return true ;
        }
    }
    return false;
}
function removeAutoFill(control){
    const old = control.value
    control.value = old + " "
    control.value = old
}