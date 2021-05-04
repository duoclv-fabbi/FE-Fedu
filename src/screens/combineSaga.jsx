import loginSaga from "screens/login/saga";
import signUpSaga from "screens/signUp/saga";
import changeInfoAccountSaga from "screens/accountManage/saga";
import courseSaga from "screens/course/saga";
import activateCourseSaga from "screens/activate/saga";

const sagaCombine = {
  ...loginSaga,
  ...signUpSaga,
  ...changeInfoAccountSaga,
  ...courseSaga,
  ...activateCourseSaga,
};

export default sagaCombine;
