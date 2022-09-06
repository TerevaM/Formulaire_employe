// // var person = {
// //     firstname: "Tereva",
// //     age: [21, 32],
// //     Booleane: true,
// //     hobbies: {
// //         sport: [
// //             "football",
// //             "basketball"
// //         ]
// //     }
// //     ,sumsport: function() {
// //         var sumage= 0;
// //         for (let i = 0; i < this.age.length; i++) {
// //             sumage += this.age[i];
           
// //         }
// //         console.log(sumage);
// //     }
// // };

// // var obj = new Object();
// // obj.arme = ["fusil", "sniper"];
// // obj.aba = true;

// // console.log(obj)

// // let o = {
// //     a: 7,
// //     get b() {
// //       return this.a + 1;
// //     },
// //     set c(x) {
// //       this.a = x / 2;
// //     },
// //     commelec: function(x) {
// //         this.a = x / 2;
// //     }
    
// //   };
  
// //   console.log(o.a); // 7
// //   console.log(o.b); // 8 <-- À ce moment, la méthode get b() est invoquée
// //   o.c = 50;         //   <-- À ce moment, la méthode set c(x) est invoquée
// //   console.log(o.a); // 25
// //  o.x = 40;

 
// var etudiant = {
//     nom : "David Rayy",
//     class : "VI",
//     rollno : 12 };


// console.log("Propriétés de etudiant : ")

// etudiant.age = 32;

// console.log(Object.getOwnPropertyNames(etudiant));


// delete etudiant.rollno;

// console.log("Delete de rollno : ")
// console.log(etudiant);

// console.log("size de etudiant : " + Object.keys(etudiant).length);

// var vrai = true;
// var faux = false;
// var bibliothèque = [
//     {
//         auteur: 'Bill Gates',
//         titre: "Le chemin à parcourir",
//         statut_de_lecture : vrai
//     },
//     {
//         auteur: 'Steve Jobs',
//         titre : 'Walter Isaacson',
//         statut_de_lecture : vrai
//     },
//     {
//         auteur: 'Suzanne Collins',
//         titre : 'Mockingjay : Le dernier livre des Hunger Games',
//         statut_de_lecture : faux
//     }];
 
// console.log("Valeurs de bibliothèque :")

// var bibi2 = [];
// bibi2 = bibliothèque;

// for(let i = 0; i < bibi2.length; i++) {

//     console.log(bibi2[i].auteur+' / ' +bibi2[i].titre+' / '+ bibi2[i].statut_de_lecture)
// }

//  var bibliothèque2 = [
//     {
//         titre: "Le chemin à parcourir",
//         auteur: 'Bill Gates',
//         ID_bibliothèque: 1254
//     },
//     {
//         titre : 'Walter Isaacson',
//         auteur: 'Steve Jobs',
//         ID_bibliothèque: 4264
//     },
//     {
//         titre : 'Mockingjay : Le dernier livre des Hunger Games',
//         auteur: 'Suzanne Collins',
//         ID_bibliothèque: 3245
//     }];

//     console.log("Trier par ID ordre croissant : ")

// bibliothèque2.sort(function compare(a, b) {
//     if (a.ID_bibliothèque < b.ID_bibliothèque)
//        return -1;
//     if (a.ID_bibliothèque > b.ID_bibliothèque )
//        return 1;
//     return 0;
    
// })

// console.log(bibliothèque2);

// console.log("URL de la page :");
// console.log(window.location.href);

var obj = {
    a: 'somestring',
    b: 42,
    c: false
   };

// console.log(Object.keys(obj));

// Object.entries(obj);

// console.log(obj);

// function getChar(obj, prop) {
//     if (obj.hasOwnProperty(prop))
//         console.log(prop + " existe" )
//     else
//         console.log(prop + " existe pas ")
// }

// getChar(obj, "b")
// function majOrMin(str){
//     return ((str[0] >= 'a' && str[0] <= 'd') || (str[0] >='A' && str[0] <= 'D'));
// }
// console.log(majOrMin("badakor"))

// function aroBase(str){
//     var counter =0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '@')
//             counter++;
        
//     }
//     return (counter === 1);
// }

// console.log(aroBase("sasa@"))

// function numberFirst(str) {
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] >=0 && str[i]<= 9)
//             return true;
//     }
//     return false;
// }

// console.log(numberFirst("42"));
