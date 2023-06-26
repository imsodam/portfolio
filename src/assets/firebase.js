// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'
// 파이어베이스 패키지 모듈 가져오기
import 'firebase/compat/auth'
import 'firebase/compat/database';
import 'firebase/compat/storage';

// 파이어베이스 DB를 초기화
const oFirebase = firebase.initializeApp({
    // 파이어베이스 콘솔에서 복사하여 붙여넣기
    apiKey: "AIzaSyAY6G5wqcq3RlVgGzg64DV1ULWPiJUWzBY",
    authDomain: "contact-c3614.firebaseapp.com",
    databaseURL: "https://contact-c3614-default-rtdb.firebaseio.com",
    storageBucket: "contact-c3614.appspot.com",
});
// 파이어베이스 DB객체 연결 
const oDB = oFirebase.database();

// 파이어베이스 DB객체 중에서 pictures 항목을 다른 곳에서 사용하도록 공개
export const oContactDB = oDB.ref('contact');

// 파이어베이스 스토리지 객체 공개
export const oStorage = oFirebase.storage();

// 파이어베이스 인증 객체 공개
export const oFirebaseAuth = oFirebase.auth()