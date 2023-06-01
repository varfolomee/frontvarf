import './HomePage.css'
import { Categoies } from '../../components/Categories/Categories'
import { orders, outerwear, underwear } from '../../orders'

/** Главная страница. */
export const HomePage = () => {
    return (
        <>
            <h5>Главная страница</h5>
            <Categoies categoryName={'Дрели'} ordersArray={orders} />
            <Categoies categoryName={'Перфораторы'} ordersArray={outerwear} />
            <Categoies categoryName={'Лобзики'} ordersArray={underwear} />
            <Categoies categoryName={'Прочее'} />
        </>
    )
}