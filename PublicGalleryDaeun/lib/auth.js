import auth from '@react-native-firebase/auth';

export function signIn({email, password}) { //로그인 하는 함수
    return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({email, password}) { //회원가입 하는 함수
    return auth().signInWithEmailAndPassword(email, password);
}

export function subscribeAuth(callback) { //앱을 가동할 때, 로그인 상태가 변경될 때 현재 사용자의 정보를
    //파라미터로 받아오는 콜백 함수 등록 함수
    return auth().onAuthStateChanged(callback);
}

export function signOut() { //로그아웃 함수
    return auth().signOut();
}
