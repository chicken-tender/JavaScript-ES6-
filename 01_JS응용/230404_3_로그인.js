/* 아이디 : 대문자, 소문자, 숫자 포함 8자 이상 20자리 이하 
  비밀번호 : 대문자, 소문자, 특수문자, 숫자 포함 8자리 ~ 20자리 
  이메일 : 일반적인 규칙
  전화번호 : 일반적인 규칙
  (1) 가입 요청 버튼은 비활성화 상태에서 시작하고(ok) 
  (2) 아이디/패스워드/이메일/전화번호 입력 조건을 만족하면 클릭 가능 */

  const register = document.getElementById("register");
  let conFirmCnt = 0;
  
  // 아이디 확인
  let idInput = document.querySelector("#idInput");
  const idBtn = document.querySelector("#idBtn");
  idBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const errorMsg = document.querySelector("#errorMsg1");
    const regExp = /^[a-z]+[a-z0-9]{8,20}$/g;
    let rst = regExp.test(idInput.value);
    if(rst) {
      errorMsg.style.display = 'none';
      conFirmCnt++;
      alert("확인 되었습니다.");
      document.getElementById("pwdInput").focus();
    } else {
      errorMsg.style.display = 'block';
    }
  });
  
  // 비밀번호 확인
  let pwdInput = document.querySelector("#pwdInput");
  const pwdBtn = document.querySelector("#pwdBtn");
  pwdBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const errorMsg = document.querySelector("#errorMsg2");
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&//(\\)\-_=+]).{8,20}$/;
    let rst = regExp.test(pwdInput.value);
    if(rst) {
      errorMsg.style.display = 'none';
      conFirmCnt++;
      alert("확인 되었습니다.");
      document.getElementById("mailInput").focus();
    } else {
      errorMsg.style.display = 'block';
    }
  });
  
  // 이메일 확인
  let mailInput = document.querySelector("#mailInput");
  const mailBtn = document.querySelector("#mailBtn");
  mailBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const errorMsg = document.querySelector("#errorMsg3");
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let rst = regExp.test(mailInput.value);
    if(rst) {
      errorMsg.style.display = 'none';
      conFirmCnt++;
      alert("확인 되었습니다.");
      document.getElementById("phoneInput").focus();
    } else {
      errorMsg.style.display = 'block';
    }
  });
  
  // 전화번호 확인
  let phoneInput = document.querySelector("#phoneInput");
  const phoneBtn = document.querySelector("#phoneBtn");
  phoneBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const errorMsg = document.querySelector("#errorMsg4");
    const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    let rst = regExp.test(phoneInput.value);
    if(rst) {
      errorMsg.style.display = 'none';
      conFirmCnt++;
      alert("확인 되었습니다.");
      if(conFirmCnt == 4) {
        register.disabled = false;
      }
    } else {
      errorMsg.style.display = 'block';
    }
  });
  
  function popUp() {
    window.open('230404_3_가입완료.html', "팝업", 'width=500, height=700');
  }
  
  const register2 = document.querySelector("#register");
  register2.addEventListener("click", popUp);