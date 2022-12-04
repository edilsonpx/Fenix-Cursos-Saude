var  firebaseConfig = {
        apiKey: "AIzaSyAlyKAt0Eg57cb8GZDalCaEwIALPWPAEds",
        authDomain: "painel-loguin.firebaseapp.com",
        projectId: "painel-loguin",
        storageBucket: "painel-loguin.appspot.com",
        messagingSenderId: "24549930727",
        appId: "1:24549930727:web:98a17c160e55172c4bd442"
      };
        firebase.initializeApp(firebaseConfig);

        const storage = firebase.storage();
        const db = firebase.firestore();
        const auth = firebase.auth();

        const provider = new firebase.auth.GoogleAuthProvider();


          //PUXAR PEDIDOS DO FIRESTORE
                db.collection('baner1').onSnapshot((data) => {
            let list = document.querySelector('.container-baner1');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID1" class="central1"></div>
                    <div id="container-pedidos-ID1" class="container">
                        <div id="card-ID1" class="card1">
                          <img   id="foto1" src ="${val.data().arquivoURL}"</div>
                            
                                </div>
                                        `;
                                           })
                                               })




                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('baner').onSnapshot((data) => {
            let list = document.querySelector('.container-baner2');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                            
                                </div>
                                        `;
                                           })
                                               })







