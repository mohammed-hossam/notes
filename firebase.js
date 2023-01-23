//* projects:
//netflix
//googledrive
//whatsapp

//* to get data:
/* where deh 3shan 2geb mgmo3a mn el docs mo3yna
https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection

useEffect(() => {
     db.collection('chats')
       .where('users', 'array-contains', targetContent.email)
       .get()
       .then((querySnapshot) => {
         const content = querySnapshot.docs.map((doc) => {
           const data = doc.data().users;
           return data;
         });
         setContent(content);
       })
       .catch((error) => {
         console.log('Error getting documents: ', error);
       });
   }, []);

   withsnapshot(fe next mynf3sh 2st5dm 7aga zy kda(realtime) 3ala el server lazm tkon 3ala el client side w dah mntqy 3shan el server lma yb3t 5las msh b3ml 3leh 7aga tnya )

  useEffect(() => {
    db.collection('chats')
      .where('users', 'array-contains', user.email)
      .onSnapshot((querySnapshot) => {
        const content = querySnapshot.docs.map((doc) => {
          const data = { id: doc.id, data: doc.data().users };
          console.log(data);
          return data;
        });
        setContent(content);
      });
  }, []);*/

/* 
There are two ways to retrieve data stored in Cloud Firestore. Either of these methods can be used with documents, collections of documents, or the results of queries:

1) Call a method to get the data(promise pattern in andre course).
hena el data htege tany mn gded fe 7aet lw 3mlt refresh 3shan 2nfz el function fl did mount 2w kda
https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
2) Set a listener to receive data-change events.(observer pattern in andre course)
hena feh liveupdate lw 7sl 2y t8yr mn 8er m3ml refresh byb3t el data el gdeda.
https://firebase.google.com/docs/firestore/query-data/listen */

//*to add data:
/* 
db. collection(set and add)
https://firebase.google.com/docs/firestore/manage-data/add-data
add will make firebase add random id for the doc, while set allow us to add the id we want
db.collection('chats').add({ users: [user.email, wantedEmail] });
or
   db.collection('users').doc(user.uid).set(
     {
       Name: user.displayName,
       email: user.email,
       photoURL: user.photoURL,
       lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
     },
     { merge: true }
     merge deh 3shan e7na mst5dmen set w set bt3ml replace lele mwgod fa7na b merge:true bn2olo lw mwgoda e3ml update 2w sebha bs mt3mlsh replace
   ); */

//*setup:
/* import firebase from 'firebase/app';
//  Add the Firebase products that you want to use
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBQu0I0nSbhsDGPf095KpaQnlZzshlecMQ',
  authDomain: 'whatsapp-7-49c4c.firebaseapp.com',
  projectId: 'whatsapp-7-49c4c',
  storageBucket: 'whatsapp-7-49c4c.appspot.com',
  messagingSenderId: '865833023782',
  appId: '1:865833023782:web:098041c221619f82e8e9e7',
};
// Initialize Firebase:
// for spa=>  const firebase = Firebase.initializeApp(firebaseConfig);
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

//  Add the Firebase products that you want to use
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
 */
