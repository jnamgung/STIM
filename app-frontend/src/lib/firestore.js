import {
  addDoc,
  collection,
  getDocs,
} from 'firebase/firestore';

import { db } from '$lib/firebase';

export const addEmergencyContact = async (
  user_id,
  first_name,
  last_name,
  relation,
  email,
  phone,
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

export const addAction = async (
  user_id,
  action,
  severity
) => {
  return addDoc(collection(db, 'actions'), {
    user_id: user_id,
    action: action,
    severity: severity
  });
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



