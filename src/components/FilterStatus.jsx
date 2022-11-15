import React from 'react'

export default function FilterStatus({product}) {
    const cssClass = `filter-status ${product === 0? 'filter-status--no-results' : ''
    }`;
    return (
      //   <div className={cssClass}>
      //     {product.length >= 0 ? `${product.length >= 0 ? 'Produkt gefunden' : 'Produkte gefunden'}`
      //       : 'Kein Produkt'}
      //     </div>

        <div className={cssClass}>
            {getStatusText(product)}
        {/* {product.length >= 0
          ? `${product.length} Produkte gefunden`
          : 'Kein Produkt'} */}
      </div>
    );
}

function getStatusText(count) {
    switch (count) {
        case 0:
            return 'Kein Produkt gefunnden';
        case 1:
            return 'Ein Produkt gefunnden';
        default:
            return count + ' Produkte gefunnden';
    }
    // if (count === 0) {
    //     return 'kein Produkt gefunden';
    // } else if(count >= 1) {
    //      return  count + ' Produkte gefunden';
    // } else {
    //     return count + ' Ein Produkt gefunden';
    // }
}

/*
1. Erstellt eine Komponente FilterStatus, die die Anzahl der gefilterten Produkte darstellt. 
Also "x Produkte gefunden". Die Komponente soll zwischen Filter und Produktliste dargestellt werden.
Die Anzeige soll in einem div mit der Klasse "filter-status" erscheinen.
2. Die Komponente soll Kein Produkt / Ein Produkt / x Produkte gefunden... ausgeben.
3. Wenn KEIN Produkt gefunden wurde, soll das div soll zusätzlich
die Klasse "filter-status--no-results" haben.
*/