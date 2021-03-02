import React from "react";
import CTA from "../../components/CTA/CTA";
import { signUpObjOne, signUpObjThree } from "./signUpData";

function SignUp() {
  return (
    <>
      <CTA {...signUpObjOne} />
      <CTA {...signUpObjThree} />
    </>
  );
}

export default SignUp;
