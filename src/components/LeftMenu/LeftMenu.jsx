import { Nav } from 'react-bootstrap'

/** Компонент с отображением левого меню */
export const LeftMenu = () => {
    return (
        <>
            <h5>Товары</h5>
            <Nav className="flex-column">
                <Nav.Link href="/products#cross">Дрели</Nav.Link>
                <Nav.Link href="/products#outerwear">Перфораторы</Nav.Link>
                <Nav.Link href="/products#underwear">Лобзики</Nav.Link>
            </Nav>
        </>
    )
}