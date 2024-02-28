import { initializeApp } from "firebase/app";
import toast from 'react-hot-toast';
import{ getFirestore,addDoc, collection,onSnapshot, doc , deleteDoc, updateDoc ,where ,query, getDocs} from'firebase/firestore'
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut,onAuthStateChanged, updateProfile } from'firebase/auth'
import kitaps , { ArkadasSet, Okundu, setk } from "./store/kitaps";
import store from "./store";
import { loginol, logoutol } from "./store/auht";
import { getStorage } from "firebase/storage";
import kullanici, { Arama, Arkadas, Searchs, set } from "./store/kullanici";







const firebaseConfig = {
    apiKey: "AIzaSyA3i3QdBIIVaJHCapStoU1EalYJM1rVQN4",
    authDomain: "kutuphane-98b75.firebaseapp.com",
    projectId: "kutuphane-98b75",
    storageBucket: "kutuphane-98b75.appspot.com",
    messagingSenderId: "918002121709",
    appId: "1:918002121709:web:fa6ee737d6d29b928ac5e4"
  };
  console.log( firebaseConfig)
  const app = initializeApp(firebaseConfig);
  export const auht = getAuth();
  export const storage = getStorage(app);

export const Kayit = async(email,password) =>{
  try{
    const {user} = await createUserWithEmailAndPassword(auht,email,password)
    return user ;
  }catch(error){
    toast.error(error.message)
  }
}

export const searchKullanici = async (displayName) => {
  
   onSnapshot (query(collection(db,'kullanici'), where('displayName', '==', displayName)) , (doc) =>{
console.log('dfghj');
    console.log( store.dispatch(Arama(doc.docs.reduce((arananKullanicilar , kullans) =>[...arananKullanicilar ,{ ...kullans.data()} ], []))))
    console.log(doc.docs)
  }) 
  
}

export const updatesst = async (id,data) =>{
  try{
    await updateProfile(auht.currentUser , data ,id)
    return true ;
   
  }catch(error){
    toast.error(error.message)
  }
}
export const login = async(email,password) =>{
  try{
    const {user} = await signInWithEmailAndPassword(auht,email,password)
    return user ;
  }catch(error){
    toast.error(error.message)
  }
}
export const logout = async() =>{
  try{
   await signOut(auht)
    return true;
  }catch(error){
    toast.error(error.message)
  }
  
}

export const ArkadasProfil = async(uid) =>{

  onSnapshot (query(collection(db,'kullanici'),  where("uid", "==", uid)), (doc) =>{
    store.dispatch(Arkadas(doc.docs.reduce((arkadasProfil, arkadas) =>[...arkadasProfil ,{ ...arkadas.data()}], [])))
    
  })


}

export const ArkadasKitap = async(uid) => {
  onSnapshot (query(collection(db,'kitaps'), where('uid', '==', uid)) , (doc) =>{
   store.dispatch(ArkadasSet(doc.docs.reduce((AkadasKitap, kitapt) =>[...AkadasKitap ,{ ...kitapt.data()}], [])))
  }) 

}
onAuthStateChanged ( auht , (user) => {
  if(user) { 
  
  console.log(store.dispatch(loginol({
    email:user.email,
    displayName:user.displayName,
    emailVerified:user.emailVerified,
    photoURL:user.photoURL,
    
    uid: user.uid

  })))

   

 
  onSnapshot (query(collection(db,'kitaps'), where('uid', '==', auht.currentUser.uid)) , (doc) =>{
    console.log(doc.docs)
    store.dispatch(setk(doc.docs.reduce((kitaps, kitap) =>[...kitaps ,{ ...kitap.data(), id:kitap.id }], [])))
  }) 
  onSnapshot (query(collection(db,'kullanici'),  where("uid", "==", auht.currentUser.uid)), (doc) =>{
    console.log(doc.docs)
    store.dispatch(set(doc.docs.reduce((kullanici, kullan) =>[...kullanici ,{ ...kullan.data() , id:kullan.id , uid:kullan.uid }], [])))
    
  })

  


  
  } else{
  store.dispatch(logoutol())
  }
    })
   
      
  
  export const db = getFirestore(app);
  export const addkitap = async data =>{
   try{
        const result = await  addDoc(collection(db,'kitaps'),data)
      
        toast.success('Başarı ile eklendi ')
   }catch(error){
    toast.error(error.message)
   }

  
  
  }
 

  export const addresim = async ( data ) =>{
    try{
    
     
         const result = await  addDoc(collection(db,'kullanici'),data);
        
       
         toast.success('Başarılı bir şekilde değişti ')
    }catch(error){
     toast.error(error.message)
    }
   
   
   }

   
  
   
  


   
  export const updatess = async (id,data) =>{
  
 console.log(id)
    try{
     
      
  
         const refdata = doc(db,'kullanici',id)
         await updateDoc(refdata,data)
         

  
       
        
       
         toast.success('Başarı ile eklendi ')
         
    }catch(error){
  
     toast.error(error.message)
    }
    
   
   
   }

  
  
  
 

  
  export const updates = async (id,data) =>{
    try{
      
 
         const refdata = doc(db,'kitaps',id  )
         await updateDoc(refdata,data)
       
        
       
         toast.success('Başarı ile eklendi ')
    }catch(error){
      console.log("here");
     toast.error(error.message)
    }
   
   
   }

  export const Detele = async id =>{
    try{
    const resault = await deleteDoc(doc(db,'kitaps', id))
    toast.success('Silindi')
  }catch(error){
  toast.error(error.message)
  }
  }
  
  

  export default app;