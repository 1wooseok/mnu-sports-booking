export function handleError(status) {
  switch (status) {
    case 400:
      alert("잘못된 요청 구문");
      break;
    case 403:
      if (window.confirm("인증 필요한 서비스 입니다. 로그인 하시겠습니까?")) {
        window.location.href = "/admin/login";
      }
      break;
    case 404:
      alert("입력값에 오류가 있습니다. 새로고침 후 다시 시도해 보세요.");
      break;
    case 500:
      alert("서버 내부");
      break;
    default:
      throw new Error(`An Error Occured ( code ) ${status}`);
  }
}

export function handle202(status) {
  if (status === 202) {
    return alert("다른 사용자가 예약한 시간입니다. 다른 시간을 선택해주세요.");
  }
}
