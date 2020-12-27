import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //맨앞에 있는 ? 제거 옵션 
  });

  const detail = query.detail === 'true';


  return (
    <div>
      <h1> 소개 </h1>
      <p>리액트 라우트를 실습하는 프로젝트입니다.</p>
      {detail && <p>디테일 값이 true 입니다. </p>}
    </div>
  );
}

export default About;
