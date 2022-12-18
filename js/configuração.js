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
                db.collection('logo').onSnapshot((data) => {
            let list = document.querySelector('.container-logo');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

               <div class="container-logo">
                  <div class="central-logo">
                        <div class="card-logo">
                          <img   class="foto-logo" src ="${val.data().arquivoURL}"</div>
                            </div>
                                </div>
                                </div>
                                        `;
                                           })
                                               })





                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('baner').onSnapshot((data) => {
            let list = document.querySelector('.container-BN');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `
            <section class="container-BN">
                <div class= " w50 left box-central-BN">
                        <div class="card-BN">
                          <img   class="foto-BN" src ="${val.data().arquivoURL}"</div>
                            
                            </div>
                            </div>
                            </div>



                        
                                        `;
                                           })
                                               })



                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso1').onSnapshot((data) => {
            let list = document.querySelector('.container1');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container1">
                <div class=" w50 left box-central">
                        <div class="card-curso1">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            
                            </div>
                            </div>
                            </div>

              
                                        `;
                                           })
                                               })


                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso2').onSnapshot((data) => {
            let list = document.querySelector('.container2');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container2">
                <div class=" w50 left box-central">
                        <div class="card-curso2">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            
                            </div>
                            </div>
                            </div>

              
                                        `;
                                           })
                                               })


                /*============================================================================*/


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso3').onSnapshot((data) => {
            let list = document.querySelector('.container3');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container3">
                <div class=" w50 left box-central">
                        <div class="card-curso3">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            
                            </div>
                            </div>
                            </div>

              
                                        `;
                                           })
                                               })


                /*============================================================================*/


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso4').onSnapshot((data) => {
            let list = document.querySelector('.container4');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container4">
                <div class=" w50 left box-central">
                        <div class="card-curso4">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            </div>
                            </div>
                            </div>
                            </section>

              
                                        `;
                                           })
                                               })


                /*============================================================================*/


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso5').onSnapshot((data) => {
            let list = document.querySelector('.container5');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container5">
                <div class=" w50 left box-central">
                        <div class="card-curso5">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            
                            </div>
                            </div>
                            </div>

              
                                        `;
                                           })
                                               })


                /*============================================================================*/

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso6').onSnapshot((data) => {
            let list = document.querySelector('.container6');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container6">
                <div class=" w50 left box-central">
                        <div class="card-curso6">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            
                            </div>
                            </div>
                            </div>

              
                                        `;
                                           })
                                               })


                /*============================================================================*/

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso7').onSnapshot((data) => {
            let list = document.querySelector('.container7');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container7">
                <div class=" w50 left box-central">
                        <div class="card-curso7">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            
                            </div>
                            </div>
                            </div>

              
                                        `;
                                           })
                                               })



                /*============================================================================*/

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('curso8').onSnapshot((data) => {
            let list = document.querySelector('.container8');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `



                <section class="container8">
                <div class=" w50 left box-central">
                        <div class="card-curso8">
                          <img  class="foto" src ="${val.data().arquivoURL}"</div>
                           <p class="descriçao">${val.data().descricao}</p>
                            
                            </div>
                            </div>
                            </div>

              
                                        `;
                                           })
                                               })


                /*============================================================================*/

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('descricao1').onSnapshot((data) => {
            let titulo1 = document.querySelector('.container-titulo1');
            titulo1.innerHTML = "";
            data.docs.map((val) => {
                titulo1.innerHTML += `

               
                    <section class="container-titulo1">
                    
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

            

            //PUXAR PEDIDOS DO FIRESTORE
                db.collection('descricao2').onSnapshot((data) => {
            let titulo2 = document.querySelector('.container-titulo2');
            titulo2.innerHTML = "";
            data.docs.map((val) => {
                titulo2.innerHTML += `

                    <div class="container-titulo2">
                    
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })



                                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('descricao3').onSnapshot((data) => {
            let titulo3 = document.querySelector('.container-titulo3');
            titulo3.innerHTML = "";
            data.docs.map((val) => {
                titulo3.innerHTML += `

               
                    <div class="container-titulo3">
                     
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                                                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo4').onSnapshot((data) => {
            let titulo4 = document.querySelector('.container-titulo4');
            titulo4.innerHTML = "";
            data.docs.map((val) => {
                titulo4.innerHTML += `

               
                    <div class="container-titulo4">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo5').onSnapshot((data) => {
            let titulo4 = document.querySelector('.container-titulo5');
            titulo4.innerHTML = "";
            data.docs.map((val) => {
                titulo4.innerHTML += `

               
                    <div class="container-titulo5">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo6').onSnapshot((data) => {
            let titulo4 = document.querySelector('.container-titulo6');
            titulo4.innerHTML = "";
            data.docs.map((val) => {
                titulo4.innerHTML += `

               
                    <div class="container-titulo6">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })










