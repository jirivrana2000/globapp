import pizzaprosciutto from "./img/pizza-prosciutto.jpg"
import pizzabacon from "./img/pizza-bacon.jpg"
import pizzadiavola from "./img/pizza-diavola.jpg"
import pizzafunghi from "./img/pizza-funghi.jpg"
import pizzahawaii from "./img/pizza-hawaii.jpg"
import pizzamargherita from "./img/pizza-margherita.jpg"
import pizzaquattroformaggi from "./img/pizza-quattro-formaggi.jpg"
import pizzasalami from "./img/pizza-salami.jpg"
import pizzatycinkymozzarella from "./img/pizza-tycinky-mozzarella.jpg"
import pizzatycinkyniva from "./img/pizza-tycinky-niva.jpg"
import pizzavegetariana from "./img/pizza-vegetariana.jpg"

import burgerbacon from "./img/burger-bacon.jpg"
import burgerdeluxe from "./img/burger-deluxe.jpg"
import burgeregg from "./img/burger-egg.jpg"
import burgercheese from "./img/burger-cheese.jpg"
import burgervege from "./img/burger-vege.jpg"
import smazakbulka from "./img/smazak-bulka.jpg"

import nugetyhranolky from "./img/nugety-hranolky.jpg"
import nugetytortila from "./img/nugety-tortila.jpg"
import nugety8 from "./img/nugety8.jpg"
import nugety12 from "./img/nugety12.jpg"

import kostkyhranolky from "./img/kostky-hranolky.jpg"
import kostkyryze from "./img/kostky-ryze.jpg"
import krkovickahranolky from "./img/krkovicka-hranolky.jpg"
import kurecihranolkyvejce from "./img/kureci-hranolky-vejce.jpg"
import kurecihranolky from "./img/kureci-hranolky.jpg"
import smazakhranolky from "./img/smazak-hranolky.jpg"
import smeshranolky from "./img/smes-hranolky.jpg"

import cibulovekrouzky from "./img/cibulove-krouzky.jpg"
import hranolky from "./img/hranolky.jpg"
import hranolky2 from "./img/hranolky2.jpg"

import fusillipolo from "./img/fusilli-pollo.jpg"
import fusillivesuvio from "./img/fusilli-vesuvio.jpg"
import spaghettiaglioolio from "./img/spaghetti-aglio-olio.jpg"
import spaghetticarbonara from "./img/spaghetti-carbonara.jpg"
import tagliatellebroccoli from "./img/tagliatelle-broccoli.jpg"
import tagliatelleparma from "./img/tagliatelle-parma.jpg"
import tagliatelleverona from "./img/tagliatelle-verona.jpg"

import bbqomacka from "./img/bbq-omacka.jpg"
import kecup from "./img/kecup.jpg"
import tatarka from "./img/tatarka.jpg"
import jalapenoomacka from "./img/jalapeno-omacka.jpg"

const allFood = [
    {
        id: 1,
        image: pizzaprosciutto,
        title: "Pizza Prosciutto",
        price: 179,
        tags: "tomato, mozzarella, šunka"
    },
    {
        id: 2,
        image: pizzabacon,
        title: "Pizza Bacon",
        price: 179,
        tags: "tomato, mozzarella, červená cibule, slanina"
    },
    {
        id: 3,
        image: pizzadiavola,
        title: "Pizza Diavola",
        price: 189,
        tags: "tomato, mozzarella, pikantní salám, jalapeño papričky"
    },
    {
        id: 4,
        image: pizzafunghi,
        title: "Pizza Funghi",
        price: 179,
        tags: "tomato, mozzarella, žampiony"
    },
    {
        id: 5,
        image: pizzahawaii,
        title: "Pizza Hawaii",
        price: 189,
        tags: "tomato, mozzarella, šunka, ananas"
    },
    {
        id: 6,
        image: pizzamargherita,
        title: "Pizza Margherita",
        price: 169,
        tags: "tomato, mozzarella, bazalka"
    },
    {
        id: 7,
        image: pizzaquattroformaggi,
        title: "Pizza Quattro formaggi",
        price: 189,
        tags: "tomato, mozzarella, hermelín, niva, parmazán"
    },
    {
        id: 8,
        image: pizzasalami,
        title: "Pizza Salami",
        price: 179,
        tags: "tomato, mozzarella, pikantní salám"
    },
    {
        id: 9,
        image: pizzatycinkymozzarella,
        title: "Pizza tycinky mozzarella",
        price: 159,
        tags: "olivový olej, česnek, mozzarella"
    },
    {
        id: 10,
        image: pizzatycinkyniva,
        title: "Pizza tycinky niva",
        price: 169,
        tags: "olivový olej, česnek, mozzarella, niva"
    },
    {
        id: 11,
        image: pizzavegetariana,
        title: "Pizza Vegetariana",
        price: 189,
        tags: "tomato, mozzarella, čerstvá rajčata, paprika, červená cibule"
    },
    {
        id: 12,
        image: burgerbacon,
        title: "Bacon Burger",
        price: 199,
        tags: "domácí bulka, salát, rajče, okurka, červená cibulka, hovězí maso 150g, grilovaná slanina, pepřový dresink"
    },
    {
        id: 13,
        image: burgerdeluxe,
        title: "Burger Deluxe",
        price: 259,
        tags: "domácí bulka, bbq omáčka, salát, rajče, okurka, hovězí maso 150g, smažený sýr, domácí tatarka"
    },
    {
        id: 14,
        image: burgeregg,
        title: "Egg Burger",
        price: 199,
        tags: "domácí bulka, salát, rajče, červená cibulka, hovězí maso 150g, vejce, grilovaná slanina, pepřový dresink"
    },
    {
        id: 15,
        image: burgercheese,
        title: "Cheese Burger",
        price: 189,
        tags: "domácí bulka, salát, rajče, okurka, hovězí maso 150g, cheddar, francouzský dresink"
    },
    {
        id: 16,
        image: burgervege,
        title: "Vege Burger",
        price: 189,
        tags: "domácí bulka, rukola, grilovaný hermelín, bbq omáčka"
    },
    {
        id: 17,
        image: smazakbulka,
        title: "Sýr v bulce",
        price: 179,
        tags: "domácí bulka, domácí tatarka, salát, rajče, okurka, smažený sýr"
    },
    {
        id: 18,
        image: nugetyhranolky,
        title: "4ks Nuggets s hranolkama",
        price: 179,
        tags: "1 ks Chicken Nugget cca 50g"
    },
    {
        id: 19,
        image: nugetytortila,
        title: "2ks Nuggets v tortile",
        price: 149,
        tags: "tortilla, česnekovo bylinkový dresink, salát, rajče, okurka, smažené kuřecí nugety"
    },
    {
        id: 20,
        image: nugety8,
        title: "8ks Nuggets",
        price: 189,
        tags: "1 ks Chicken Nugget cca 50g"
    },
    {
        id: 21,
        image: nugety12,
        title: "12ks Nuggets",
        price: 279,
        tags: "1 ks Chicken Nugget cca 50g"
    },
    {
        id: 22,
        image: kostkyhranolky,
        title: "Kuřecí s omáčkou a hranolkama",
        price: 199,
        tags: ""
    },
    {
        id: 23,
        image: kostkyryze,
        title: "Kuřecí s omáčkou a rýží",
        price: 219,
        tags: ""
    },
    {
        id: 24,
        image: krkovickahranolky,
        title: "Krkovička s hranolkama",
        price: 189,
        tags: ""
    },
    {
        id: 25,
        image: kurecihranolkyvejce,
        title: "Steak speciál s hranolkama",
        price: 219,
        tags: ""
    },
    {
        id: 26,
        image: kurecihranolky,
        title: "Kuřecí steak s hranolkama",
        price: 189,
        tags: ""
    },
    {
        id: 27,
        image: smazakhranolky,
        title: "Smažený sýr s hranolkama",
        price: 169,
        tags: ""
    },
    {
        id: 28,
        image: smeshranolky,
        title: "Kuřecí směs s hranolkama",
        price: 189,
        tags: ""
    },
    {
        id: 29,
        image: cibulovekrouzky,
        title: "Příloha Cibulové kroužky",
        price: 79,
        tags: ""
    },
    {
        id: 30,
        image: hranolky,
        title: "Příloha Domácí hranolky",
        price: 69,
        tags: ""
    },
    {
        id: 31,
        image: hranolky2,
        title: "Příloha Hranolky Julienne",
        price: 69,
        tags: ""
    },
    {
        id: 32,
        image: fusillipolo,
        title: "Fusilli Pollo",
        price: 239,
        tags: "smetanová omáčka, kuřecí maso, žampiony, parmiggiano reggiano, 300g"
    },
    {
        id: 33,
        image: fusillivesuvio,
        title: "Fusilli Vesuvio",
        price: 219,
        tags: "smetanová omáčka, šunka, žampiony, 300g"
    },
    {
        id: 34,
        image: spaghettiaglioolio,
        title: "Spaghetti Aglio Olio",
        price: 209,
        tags: "olivový olej, česnek, sušené chilli, parmezán, rajče, sůl, petržel, 300g"
    },
    {
        id: 35,
        image: spaghetticarbonara,
        title: "Spaghetti Alla Carbonara",
        price: 219,
        tags: "smetana, anglická slanina, vejce, parmiggiano reggiano, 300g"
    },
    {
        id: 36,
        image: tagliatellebroccoli,
        title: "Tagliatelle Broccoli",
        price: 219,
        tags: "smetanová omáčka, brokolice, 300g"
    },
    {
        id: 37,
        image: tagliatelleparma,
        title: "Tagliatelle Parma",
        price: 199,
        tags: "smetanová omáčka, parmiggiano reggiano, 300g"
    },
    {
        id: 38,
        image: tagliatelleverona,
        title: "Tagliatelle Verona",
        price: 239,
        tags: "smetanová omáčka, kuřecí maso, niva, 300g"
    },
    {
        id: 39,
        image: bbqomacka,
        title: "Naše Barbeque omáčka",
        price: 35,
        tags: "",
    },
    {
        id: 40,
        image: kecup,
        title: "Náš Kečup",
        price: 35,
        tags: "",
    },
    {
        id: 41,
        image: tatarka,
        title: "Naše Domácí tatarka",
        price: 35,
        tags: "",
    },
    {
        id: 42,
        image: jalapenoomacka,
        title: "Náš Jalapeno dresink",
        price: 35,
        tags: "",
    },
]

export default allFood