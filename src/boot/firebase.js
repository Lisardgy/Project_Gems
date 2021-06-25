import Firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
export default ({ Vue }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDyJ1dxwc4mUTmbZxLfs-WwjKav3F8af6g",
        authDomain: "gemsmap.firebaseapp.com",
        projectId: "gemsmap",
        storageBucket: "gemsmap.appspot.com",
        messagingSenderId: "509515117131",
        appId: "1:509515117131:web:0aa1c647ef87180a8613ce",
        measurementId: "G-YFCJBDE5S1"
    };
    Firebase.initializeApp(firebaseConfig);
    Vue.prototype.$firebase = Firebase;
    Vue.prototype.$firestore = Firebase.firestore();
    Vue.prototype.$auth = Firebase.auth();
}