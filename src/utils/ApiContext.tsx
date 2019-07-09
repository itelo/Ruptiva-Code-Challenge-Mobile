import React from "react";
import { db } from "@utils/firebase";

type ApiType = {
  docs: DocType[];
  getDocs: () => void;
  addDoc: (doc: DocType) => Promise<firebase.firestore.DocumentReference>;
  loadingDocs: boolean;
}

export const ApiContext = React.createContext({} as ApiType);

type DocType = {
  name: string;
  document: string;
  type: "individual" | "business";
};

type ApiProviderProps = {
  children: React.ReactNode;
}

export const ApiProvider = (props: ApiProviderProps) => {
  const [docs, setDocs] = React.useState([] as DocType[]);
  const [loadingDocs, setLoadingDocs] = React.useState(false);

  const getDocs = () => {
    setLoadingDocs(true);
    db
      .collection("cities")
      .get()
      .then((querySnapshot) => {
        const _docs = [] as DocType[];
        querySnapshot.forEach((doc) => {
          _docs.push(doc.data() as DocType);
        });

        setDocs(_docs);
        setLoadingDocs(false);
      })
      .catch(() => setLoadingDocs(false));
  }

  const addDoc = (doc: DocType) => {
    return db.collection("cities").add(doc);
  }

  const values = {
    docs,
    getDocs,
    addDoc,
    loadingDocs
  };


  return (
    <ApiContext.Provider value={values}>
      {props.children}
    </ApiContext.Provider>
  );
}
