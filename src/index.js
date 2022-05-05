const Redux = require("Redux");

// const signUpContract = (name, money) => {
//   return {
//     type: "SIGN_UP",
//     payload: {
//       name: name,
//       amount: money,
//     },
//   };
// };
// const getMoney = (name, amount) => {
//   return {
//     type: "GET_MONEY",
//     payload: {
//       name: name,
//       amout: amount,
//     },
//   };
// };

// const cancelContract = (name) => {
//   return {
//     type: "CANCEL",
//     payload: {
//       name: name,
//     },
//   };
// };

// const claimHistory = (history = [], form) => {
//   if (form.type === "GET_MONEY") {
//     return (history = [...history, form.payload]);
//   }
//   return history;
// };

// const accounting = (allMoney = 100, form) => {
//   if (form.type === "SIGN_UP") {
//     return (allMoney = allMoney + form.payload.amount);
//   } else if (form.type === "GET_MONEY") {
//     return (allMoney = allMoney - form.payload.amount);
//   }
//   return allMoney;
// };

// const policies = (history = [], form) => {
//   if (form.type === "SIGN_UP") {
//     return (history = [...history, form.payload]);
//   }
//   return history;
// };

// const { createStore, combineReducers } = Redux;
// const departaments = combineReducers({
//   accounting: accounting,
//   claimHistory: claimHistory,
//   policies: policies,
// });
// const store = createStore(departaments);
// store.dispatch(signUpContract("Umid", 20));
// console.log(store.getState());
//////////////////////////////////////////////////////////////////////////////

const addMusic = function (name, time) {
  return {
    type: "Add",
    payload: {
      name: name,
      time: time,
    },
  };
};
const deleteMusic = function (name, info) {
  return {
    type: "Delete",
    payload: {
      name: name,
      info: info,
    },
  };
};

const adding = function (musicArr = [], form) {
  // console.log(`adding:${musicArr}`);
  if (form.type == "Add") {
    return (musicArr = [...musicArr, form.payload]);
  }
  return musicArr;
};
const deleting = function (musicArr = [], form) {
  if (form.type == "Delete") {
    console.log(musicArr);
    return (musicArr = form.payload.info.addM.filter((val) => {
      return form.payload.name != val.name;
    }));
    // console.log(form.payload.info);
  }
  return musicArr;
};

const { createStore, combineReducers } = Redux;
const departaments = combineReducers({
  deleteM: deleting,
  addM: adding,
});
const store = createStore(departaments);
store.dispatch(addMusic("gulbadan", 33));
store.dispatch(addMusic("mamur", 33));
store.dispatch(addMusic("gulbadan", 33));
store.dispatch(addMusic("gulbadan12", 33));
store.dispatch(addMusic("gulbadan122", 33));
// store.dispatch(deleteMusic("gulbadan", store.getState()));
store.dispatch(deleteMusic("gulbadan122", store.getState()));
store.dispatch(deleteMusic("mamur", store.getState()));

console.log(store.getState());
////////////////////////////////////////////////////////////////////////////////////

// const signUpContract=(name,money)=>{
//   return{
//     type:"SIGN_UP",
//       payload:{
//         name:name,
//         amount:money
//       }
//   }
// }
// const claimMoney=(name,amount)=>{
//   return{
//     type:"GET_MONEY",
//     payload:{
//       name:name,
//       amount:amount
//     }
//   }
// }
// const cancelContract=(name)=>{
//   return{
//     type:"CANCEL",
//     payload:{
//       name:name
//     }
//   }
// }

//  ////////////////////////////////////////////////////////////////////////////////////////////////////////
// const claimHistory=(history=[],form)=>{
//   if(form.type=="GET_MONEY"){
//     return history=[...history,form.payload]
//   }
//   return history;
// }

//  ////////////////////////////////////////////////////
// const accounting=(allMoney=100, form) => {
//   if(form.type="SIGN_UP"){
//     return allMoney=allMoney+form.payload.amount
//   }
//   else if(form.type="GET_MONEY"){
//     return allMoney=allMoney-form.payload.amount
//   }
//  return allMoney
// }
//  ////////////////////////////////////////////////////
// const policies=function(history=[],form){
//   if(form.type=="SIGN_UP"){
//     return history=[...history,form.payload]
//   }
//   return history
// }
// ////////////////////////////////////////////////////

// const {createStore,combineReducers} = Redux;  // kutubxonalarini chaqirdik

// const departament=combineReducers({   // uchalsi bitta departament qilindi
//  accounting: accounting,
//  claimHistory: claimHistory,
//  policies: policies
// });
// const store = createStore(departament); // state management hamma malumot saqlanadigan joy

// store.dispatch(claimMoney("umid",20));// state managementdan departamentga malumotlarni olib keladi

// console.log(store.getState())
