<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <title-header-component text="For your pleasure"/>
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
                
                            <product-card 
                                v-for="card in cards"
                                :key="card.id"
                                classItem="shop__item" 
                                :text="card.text" 
                                :icon="card.icon" 
                                :price="card.price">
                            </product-card>
                
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
import TitleHeaderComponent from '../components/TitleHeaderComponent.vue';

export default {
    components: {NavBarComponent, ProductCard, TitleHeaderComponent},
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
