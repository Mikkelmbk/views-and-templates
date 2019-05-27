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


};

