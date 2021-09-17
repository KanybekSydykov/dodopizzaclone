import slide1 from "../components/assets/smallslider/1.jpg"
import slide2 from "../components/assets/smallslider/2.jpg"
import slide3 from "../components/assets/smallslider/3.webp"
import slide4 from "../components/assets/smallslider/4.webp"
import slide5 from "../components/assets/smallslider/5.jpeg"
import slide6 from "../components/assets/smallslider/6.jpeg"
import snack from "../components/assets/snacks/dodster.jpeg"


let store = {
    pizza : [
        {img : <img src={slide1} className="img-fluid"/>, title:"Пицца из половинок" ,text: "Соберите свою пиццу 35 см с двумя разными вкусами", price: "от 520 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Азиатская",text : "Моцарелла, сладкий перец, томаты, красный лук, фарш из говядины, сушеный перец чили, томатный соус", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Пицца от Кеши с игрушкой из коллекции",text : "Цыпленок, картофель из печи, томаты, моцарелла, томатный соус", price : "от 449 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Пицца от Тучки с игрушкой из коллекции",text : "Ветчина, картофель из печи, моцарелла, соус альфредо", price : "от 449 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Фристайло",text : "Говядина, перец сладкий, томаты, лук красный, сыр моцарелла, пицца-соус, соус песто", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Жгучая пепперони",text : "Сыр моцарелла, пицца-соус, пепперони, халапеньо, лук красный", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Пицца Колбаски Барбекю",text : "Чоризо халяль, соус барбекю для пиццы, лук красный, томаты, сыр моцарелла, пицца-соус", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Додо Микс",text : "Моцарелла, ветчина из цыпленка, цыпленок, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, красный лук, соус альфредо, чеснок, итальянские травы, томаты", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Деревенская",text : "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Двойной цыпленок",text : "Цыпленок, моцарелла, альфредо соус", price : "от 265 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Сырная",text : "Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо", price : "от 245 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Пепперони Фреш",text : "Пепперони из цыпленка, увеличенная порция моцареллы, томаты, томатный соус", price : "от 245 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Ветчина и сыр",text : "Ветчина из цыпленка, моцарелла, соус альфредо", price : "от 265 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Ветчина и грибы",text : "Ветчина из цыпленка, шампиньоны, моцарелла, томатный соус", price : "от 295 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Маргарита",text : "Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус", price : "от 295 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Пепперони",text : "Пепперони из цыпленка, моцарелла, томатный соус", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Чизбургер-пицца",text : "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Сырный цыпленок",text : "Цыпленок, сырный соус, моцарелла, томаты, соус альфредо, смесь сыров чеддер и пармезан, чеснок сухой", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Аррива!",text : "Соус бургер, цыпленок, соус ранч, чоризо из цыпленка, сладкий перец, красный лук, моцарелла, томаты, чеснок", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Песто",text : "Соус песто, соус альфредо, цыплёнок, кубики брынзы, моцарелла, томаты", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Карбонара",text : "Ветчина из цыпленка, сыры чеддер и пармезан, моцарелла, красный лук, чеснок, соус альфредо, итальянские травы, томаты", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Гавайская",text : "Ветчина, ананасы, моцарелла, томатный соус", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Мексиканская",text : "Томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса, цыпленок", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Четыре сезона",text : "Моцарелла, ветчина из цыпленка, пепперони из цыпленка, кубики брынзы, томаты, шампиньоны, томатный соус, итальянские травы", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Додо",text : "Ветчина из цыпленка, митболы из говядины, пепперони из цыпленка, моцарелла, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус, томаты", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Мясная",text : "Цыпленок, ветчина из цыпленка, пепперони из цыпленка, томатный соус, чоризо из цыпленка, моцарелла", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Четыре сыра",text : "Моцарелла, сыры чеддер и пармезан, сыр блю чиз, соус альфредо", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Цыпленок ранч",text : "Цыпленок, ветчина из цыпленка, соус ранч, моцарелла, томаты, чеснок", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Цыпленок барбекю",text : "Цыпленок, соус барбекю, томатный соус, красный лук, моцарелла, ветчина из цыпленка", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Двойная пепперони",text : "Пепперони из цыпленка, моцарелла, томатный соуc", price : "от 395 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Супермясная",text : "Цыпленок, митболы из говядины, пепперони из цыпленка, томатный соус, чоризо из цыпленка, моцарелла, ветчина из цыпленка", price : "от 445 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Овощи и грибы ",text : "Итальянские травы, томатный соус, кубики брынзы, шампиньоны, сладкий перец, красный лук, моцарелла, маслины, томаты", price : "от 365 сом"},
        {img : <img src={slide1} className="img-fluid"/>, title:"Пицца-пирог",text : "Ананасы, брусника, сгущенное молоко", price : "от 295 сом"},
    ],
    Combo : [
        {img : <img src={slide3} className="img-fluid"/>, title:"Комбо за 499 сом", text:"Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус. Выбор пицц ограничен",price:"499 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"2 пиццы и напиток",text:"2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек",price:"679 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"2 пиццы и закуска",text:"2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек",price:"729 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"Пицца и 2 закуски",text:"Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек",price:"729 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"2 пиццы",text:"Самое популярное комбо из 2 пицц 30 см. Большой выбор",price:"949 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"3 пиццы",text:"3 пиццы 30 см на любой вкус. Для компании из 5–10 человек",price:"1 349 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"5 пицц",text:"5 пицц 30 см на любой вкус. Для компании из 10–15 человек",price:"2 149 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"7 пицц",text:"7 пицц 30 см на любой вкус. Для компании из 15–20 человек",price:"2 999 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"10 средних пицц",text:"10 пицц 30 см на любой вкус. Для компании из 20–30 человек",price:"4 199 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"4 Додстера",text:"4 любых Додстера на выбор: Острый или Классический",price:"499 сом"},
        {img : <img src={slide3} className="img-fluid"/>, title:"Комбо за 999 сом",text:"3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен",price:"999 сом"}
    ],
    Snacks : [
        {img : <img src={snack} className="img-fluid"/>, title:"Додстер",text:"Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",price:"149 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Острый Додстер",text:"Горячая закуска с цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке",price:"149 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Грибной Стартер",text:"Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке",price:"139 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Острый Стартер",text:"Горячая закуска с острыми колбасками чоризо, острым цыпленком, перцем халапеньо, моцареллой и соусом сальса в тонкой пшеничной лепешке",price:"139 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Мясной Стартер",text:"Горячая закуска с митболами из говядины, томатами, моцареллой и пикантным соусом бургер в тонкой пшеничной лепешке",price:"139 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Ланчбокс с крыльями барбекю",text:"Горячий сытный обед из куриных крыльев со специями и ароматом копчения, картофеля из печи с итальянскими травами и соуса барбекю",price:"279 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Ланчбокс с куриными кусочками",text:"Горячий сытный обед из нежных куриных кусочков, картофеля из печи с итальянскими травами и сырного соуса",price:"279 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Картофель из печи, большой",text:"Ароматный запеченный картофель с итальянскими травами. Большая порция",price:"159 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Крылья барбекю",text:"Куриные крылья со специями и ароматом копчения, большая порция",price:"329 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Куриные кусочки, 300 гр",text:"Кусочки куриного филе в хрустящей панировке",price:"329 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Паста Карбонара",text:"Паста, ветчина, сыры чеддер, пармезан и моцарелла, томаты, соус альфредо, итальянские травы, чеснок.",price:"249 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Паста Цыпленок и грибы",text:"Паста, цыпленок, шампиньоны, соус ранч, моцарелла, итальянские травы",price:"249 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Рулетики с пепперони + Рулетики с сыром",text:"Микс горячих рулетиков с сырным соусом: 8 штук с пепперони и моцареллой, 8 штук с моцареллой",price:"199 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Картофельные оладьи, 8 шт",text:"Картофельные оладьи в панировке. Готовятся в печи.",price:"179 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Греческий салат с соусом бальзамик",text:"Салат айсберг, томаты черри, маслины, свежий огурец, кубики брынзы, соус бальзамик",price:"149 сом"},
        {img : <img src={snack} className="img-fluid"/>, title:"Салат Цезарь",text:"Цыпленок, свежие листья салата айсберг, томаты черри, сыры чеддер и пармезан, соус цезарь, пшеничные гренки, итальянские травы",price:"179 сом"}
    ],
    scrollableItems: [
        {
            title: "Пеперони",
            text : "от 365 сом",
            img : <img src={slide1} className="img-fluid"/>
        },
        {
            title: "2 пиццы",
            text : "от 949 сом",
            img : <img src={slide2} className="img-fluid"/>
        },
        {
            title: "Мексиканская",
            text : "от 395 сом",
            img : <img src={slide3} className="img-fluid"/>
        },
        {
            title: "Комбо за 999",
            text : "999 сом",
            img : <img src={slide4} className="img-fluid"/>
        },
        {
            title: "Додстер",
            text : "от 149 сом",
            img : <img src={slide5} className="img-fluid"/>
        },
        {
            title: "Рулетики с брусникой",
            text : "от 149 сом",
            img : <img src={slide6} className="img-fluid"/>
        },
    ]
}



export default store;