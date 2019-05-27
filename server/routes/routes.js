module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "title":"Forside",
         "colorClass":"red"
      });
   });


   app.get('/product', (req, res, next) => {
      res.render('product', {
         "title":"Produkt",
         "colorClass":"blue",
         "products":[
            {
               "name":"produkt1",
               "price":400
            },
            {
               "name":"produkt2",
               "price":700
            }
         ]
      });
   });


   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "title":"Kontakt",
         "colorClass":"purple"
      });
   });



   app.get('/test',(req, res, next) => {
       res.send(); // res kan KUN sendes en gang, det er en form for brev der bliver sendt til serveren og den kan kun modtage den en gang
      console.log("hej"); //Denne console.log kan kun ses i terminalen
   })


};

