import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBtevA7Y4hQtVtyDTpeCVP0mF565atJuOg",
    authDomain: "expensify-3361c.firebaseapp.com",
    databaseURL: "https://expensify-3361c.firebaseio.com",
    projectId: "expensify-3361c",
    storageBucket: "expensify-3361c.appspot.com",
    messagingSenderId: "86913991865",
    appId: "1:86913991865:web:55151c634353f605d94768",
    measurementId: "G-Y0BRY7G1GF"
  };



  firebase.initializeApp(firebaseConfig);


  const database = firebase.database();

  export { firebase, database as default };


  //child_removed
  //child_changed
  //value

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //     console.log(snapshot.key ,snapshot.val);
  // });


  // database.ref('expenses').on(('child_removed'), (snapshot) => {
  //     console.log(snapshot.key, snapshot.val);
  // });


  // database.ref('expenses').on(('child_added'), (snapshot) => {
  //       console.log(snapshot.key, snapshot.val());
  // });




  // database.ref('expenses').push({
  //     description: 'this is the first description',
  //     note:'this is the first note',
  //     amount: 0,
  //     createdAt: 13454
  // });


// database.ref('expenses').once('value')
// .then((snapshot) =>{

//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//   });

//   console.log(expenses);

// });




// database.ref('expenses').on('value', (snapshot)=>{

//         const ArrayOfExpenses = [];

//         snapshot.forEach((childExpense) => {
//               ArrayOfExpenses.push({
//                     id: childExpense.key,
//                     ...childExpense.val()
//               });
//         });
// });
