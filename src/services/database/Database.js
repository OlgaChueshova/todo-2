import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { API_KEY } from "../../constants/envValues";

export class Database {
  constructor() {
    const firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: "todo-2-6f8a5.firebaseapp.com",
      projectId: "todo-2-6f8a5",
      storageBucket: "todo-2-6f8a5.appspot.com",
      messagingSenderId: "871943033561",
      appId: "1:871943033561:web:5c2cc42b12df6413bf24c8",
      measurementId: "G-30GY0GGDZV"
    };

    const app = initializeApp(firebaseConfig);
    this._database = getFirestore(app);
  }

  create(collectionKey, body) {
    const collectionRef = collection(this._database, collectionKey);
    return addDoc(collectionRef, body);
  }

  read(collectionKey) {
    const collectionRef = collection(this._database, collectionKey);
    return getDocs(collectionRef).then((documents) => {
      return documents.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  }

  update(collectionKey, id, body) {
    const document = doc(this._database, collectionKey, id);
    return updateDoc(document, body);
  }

  delete(collectionKey, id) {
    const document = doc(this._database, collectionKey, id);
    return deleteDoc(document);
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}
