import { orders, outerwear } from '../../orders'
import { useLocation } from 'react-router-dom'
import { Categoies } from '../../components/Categories/Categories'

/** Страница со списком товаров. */
export const ProductsPage = () => {
    const { hash } = useLocation()

    return (
        <>
            <h5>Товары</h5>
            <p>Выбирайте только надежные инструменты и качественный сервис!</p>
            {hash !== '' ? (
                <>
                    {hash === '#cross' && <Categoies categoryName={'Дрели'} ordersArray={orders} />}
                    {hash === '#outerwear' && <Categoies categoryName={'Перфораторы'} ordersArray={outerwear} />}
                    {hash === '#underwear' && <Categoies categoryName={'Лобзики'} ordersArray={orders} />}
                </>
            ) : (
                <>
                    <Categoies categoryName={'Дрели'} ordersArray={orders} />
                    <Categoies categoryName={'Перфораторы'} ordersArray={outerwear} />
                    <Categoies categoryName={'Лобзики'} ordersArray={orders} />
                    <Categoies categoryName={'Прочее'} />
                </>
            )}
        </>
    )
}