import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

import { db } from '$lib/firebase';

export const addEmergencyContact = async (
  user_id,
  first_name,
  last_name,
  relation,
  phone,
  email,
  address
) => {
  return addDoc(collection(db, 'emergency_contacts'), {
    user_id: user_id,
    first_name: first_name,
    last_name: last_name,
    relation: relation,
    email: email,
    phone: phone,
    address: address
  });
}

export const getEmergencyContacts = async (uid) => {
  let result = [];
  const querySnapshot = await getDocs(query(
    collection(db, 'emergency_contacts'),
    where('user_id', '==', uid),
  ));
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}

export const setActions = async (
  user_id,
  severity,
  actions,
) => {
  severity = severity.toLowerCase();
  const querySnapshot = await getDocs(query(
    collection(db, 'actions'),
    where('user_id', '==', user_id),
    where('severity', '==', severity),
  ));
  let ids = [];
  querySnapshot.forEach((doc) => ids.push(doc.id));
  switch (ids.length) {
    case 0:
      return addDoc(collection(db, 'actions'), {
        'user_id': user_id,
        'severity': severity,
        'actions': actions,
      });
    case 1:
      return setDoc(doc(db, 'actions', ids[0]), {
        'user_id': user_id,
        'severity': severity,
        'actions': actions,
      });
    default:
      ids.forEach((id) => {
        deleteDoc(doc(db, 'actions', id));
      });
      return addDoc(collection(db, 'actions'), {
        'user_id': user_id,
        'severity': severity,
        'actions': actions,
      });
  }
}

export const getActions = async (
  user_id,
  severity='all',
) => {
  let result = [];
  let querySnapshot = null;
  severity = severity.toLowerCase();
  if (severity === 'all') {
    querySnapshot = await getDocs(query(
      collection(db, 'actions'),
      where('user_id', '==', user_id),
    ));
  }
  else {
    querySnapshot = await getDocs(query(
      collection(db, 'actions'),
      where('user_id', '==', user_id),
      where('severity', '==', severity),
    ));
  }
  querySnapshot.forEach((doc) => {
    const actions = doc.data()['actions'];
    actions.forEach((action) => {
      result.push(action);
    });
  });
  return result;
}

export const setSymptoms = async (
  user_id,
  severity,
  symptoms,
) => {
  severity = severity.toLowerCase();
  const querySnapshot = await getDocs(query(
    collection(db, 'symptoms'),
    where('user_id', '==', user_id),
    where('severity', '==', severity),
  ));
  let ids = [];
  querySnapshot.forEach((doc) => ids.push(doc.id));
  switch (ids.length) {
    case 0:
      return addDoc(collection(db, 'symptoms'), {
        'user_id': user_id,
        'severity': severity,
        'symptoms': symptoms,
      });
    case 1:
      return setDoc(doc(db, 'symptoms', ids[0]), {
        'user_id': user_id,
        'severity': severity,
        'symptoms': symptoms,
      });
    default:
      ids.forEach((id) => {
        deleteDoc(doc(db, 'symptoms', id));
      });
      return addDoc(collection(db, 'symptoms'), {
        'user_id': user_id,
        'severity': severity,
        'actions': symptoms,
      });
  }
}

export const getSymptoms = async (
  user_id,
  severity='all',
) => {
  let result = [];
  let querySnapshot = null;
  severity = severity.toLowerCase();
  if (severity === 'all') {
    querySnapshot = await getDocs(query(
      collection(db, 'symptoms'),
      where('user_id', '==', user_id),
    ));
  }
  else {
    querySnapshot = await getDocs(query(
      collection(db, 'symptoms'),
      where('user_id', '==', user_id),
      where('severity', '==', severity),
    ));
  }
  querySnapshot.forEach((doc) => {
    const symptoms = doc.data()['symptoms'];
    symptoms.forEach((symptom) => {
      result.push(symptom);
    });
  });
  return result;
}
