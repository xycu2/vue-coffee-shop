<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <h1 class="title-big">For your pleasure</h1>
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
    
                <div class="line"></div>
    
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card classItem="shop__item" :text="cards[0].text" :icon="cards[0].icon" :price="cards[0].price"/>
                            <product-card classItem="shop__item" :text="cards[1].text" :icon="cards[1].icon" :price="cards[1].price"/>
                            <product-card classItem="shop__item" :text="cards[2].text" :icon="cards[2].icon" :price="cards[2].price"/>
                            <product-card classItem="shop__item" :text="cards[3].text" :icon="cards[3].icon" :price="cards[3].price"/>
                            <product-card classItem="shop__item" :text="cards[4].text" :icon="cards[4].icon" :price="cards[4].price"/>
                            <product-card classItem="shop__item" :text="cards[5].text" :icon="cards[5].icon" :price="cards[5].price"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<script>
import NavBarComponent from '../components/NavBarComponent.vue';
import ProductCard from '../components/ProductCard.vue';


export default {
    components: {NavBarComponent, ProductCard},
    data() {
        return {
            cards: [
    {
        id: 0,
        text: 'Solimo Coffee Beans 2kg',
        icon: 'coffee-1.jpg',
        price: 10.73,
    },
    {
        id: 1,
        text: 'Presto Coffee Beans 1kg',
        icon: 'coffee-2.jpg',
        price: 15.99,
    },
    {
        id: 2,
        text: 'AROMISTICO Coffee 1kg',
        icon: 'coffee-3.jpg',
        price: 6.99,
    },
    {
        id: 3,
        text: 'Lavazza Espresso 1kg',
        icon: 'coffee-1.jpg',
        price: 18.50,
    },
    {
        id: 4,
        text: 'Egoiste Noir Beans 1kg',
        icon: 'coffee-2.jpg',
        price: 12.40,
    },
    {
        id: 5,
        text: 'Jardin Crema Beans 1kg',
        icon: 'coffee-3.jpg',
        price: 8.95,
    }
]
        }
    }
    
}

</script>
