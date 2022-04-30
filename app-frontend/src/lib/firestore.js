import {
  addDoc,
  collection,
  getDocs,
  query,
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

export const addAction = async (
  user_id,
  action,
  severity
) => {
  return addDoc(collection(db, 'actions'), {
    user_id: user_id,
    action: action,
    severity: severity.toLowerCase(),
  });
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
      where('user_id', '==', uid),
    ));
  }
  else {
    querySnapshot = await getDocs(query(
      collection(db, 'actions'),
      where('user_id', '==', uid),
      where('severity', '==', severity),
    ));
  }
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}

export const addSymptom = async (
  user_id,
  symptom,
  severity
) => {
  return addDoc(collection(db, 'symptoms'), {
    user_id: user_id,
    symptom: symptom,
    severity: severity
  });
}



