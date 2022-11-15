import {getFormattedPrice} from '../helpers'

export default function Product({title,image,price,sale}) {
    const cssClass = `product ${sale? "product--sale" : ""}`
    return (
        <article className={cssClass}>
            <div className="product__image">{image}</div>
            <h3 className="product__heading">{title}</h3>
            <p className="product__price">{getFormattedPrice(price)}</p>
        </article>
    )
}

/*
Nutzt die Funktion getFormattedPrice aus helpers.js, um den Preis formatiert darzustellen.
Bonus: Produkte, die im Sonderangebot sind (sale) sollen zusätzlich die Klasse
product--sale erhalten.
*/
