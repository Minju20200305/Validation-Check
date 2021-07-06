// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector("#username");
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");

let elInputPassword = document.querySelector("#password");
let elInputPasswordRetype = document.querySelector("#password-retype");
let elMismatchMessage = document.querySelector(".mismatch-message");
let elRegister = document.querySelector("#register")


elInputUsername.classList.remove("wrongusername");

elInputUsername.onkeyup = function () {
  if (
    isMoreThan4Length(elInputUsername.value) &&
    onlyNumberAndEnglish(elInputUsername.value)
  ) {
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
    elInputUsername.classList.remove("wrongusername");
  } else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
    elInputUsername.classList.add("wrongusername");
  }
};

elInputPasswordRetype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMismatchMessage.classList.add("hide");
  } else {
    elMismatchMessage.classList.remove("hide");
  }
};

elRegister.onclick = function (){
  if(
  !(isMoreThan4Length(elInputUsername.value) &&
    onlyNumberAndEnglish(elInputUsername.value)&&
    isMatch(elInputPassword.value, elInputPasswordRetype.value)
    ))
    {alert("아이디 패스워드를 확인하세요")
    ;
}
else{document.querySelector(".welcome").textContent="코드스테이츠에 오신 것을 환영합니다!"

}
}



function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
}

