import {useState, useEffect} from 'react'
import products from '../products'
import FilterForm from './FilterForm'
import FilterStatus from './FilterStatus';
import ProductsList from './ProductsList'

export default function Finder() {
  const [saleOnly, setSaleOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchValue, setSearchValue] = useState(" ");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Titel-Effekt!');
    let title = 'React Filter';
    if (saleOnly) {
      title += ' - Sonderangebot 🤑';
    }
    document.title = title;
  }, [saleOnly]);

  useEffect(() => {
    // URL, die beim Laden der Seite aufgerufen wurde
    const url = new URL(window.location.href);

    // sale
    // Werte aus URLs werden immer als String ausgelesen
    const oldSale = url.searchParams.get('sale');
    if (oldSale) {
      // Boolean true statt String "true" verwenden
      setSaleOnly(true);
    }

    // category
    const oldCategory = url.searchParams.get('category');
    if (oldCategory) {
      setSelectedCategory(parseInt(selectedCategory));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    // Konstruiere ein neues URL-Objekt auf Grundlage der aktuellen Url
    const url = new URL(window.location.href);

    // sale
    url.searchParams.delete('sale');
    if (saleOnly) {
      url.searchParams.set('sale', saleOnly);
    }

    // category
    url.searchParams.delete('category');
    if (selectedCategory) {
      url.searchParams.set('category', selectedCategory);
    }

    /* Ersetze den aktuellen Eintrag im Browser-Verlauf mit der neu erzeugten URL, 
    ohne die Seite neu zu laden. Die ersten beiden
    Argumente sind hier nicht relevant. */
    window.history.replaceState({}, '', url);
  }, [saleOnly, selectedCategory]);

  const filteredProducts = getFilteredProducts(
    products,
    saleOnly,
    selectedCategory,
    searchValue
  );

  /* Stelle beim ersten Durchgang (bei dem der Filterzustand aus der URL
  noch nicht wiederhergestellt wurde) nichts dar, um zu verhindern, dass
  am Anfang für einen kurzen Moment alle Produkte dargestellt werden.
  */
  if (loading) {
    return null;
  }

  return (
    <div>
      <h2>shop</h2>
      <FilterForm
        saleOnly={saleOnly}
        setSelectedCategory={setSelectedCategory}
        setSaleOnly={setSaleOnly}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <FilterStatus product={filteredProducts.length} />

      {/* <ProductsList products={products} /> */}
      <ProductsList products={filteredProducts} />
    </div>
  );
}

function getFilteredProducts(
  products,
  saleOnly,
  selectedCategory,
  searchValue
) {
  const noSaleFilter = !saleOnly;
  const noCategoryFilter = selectedCategory === 0;
  const noTextFilter = searchValue === " ";

  return products
    .filter((product) => noSaleFilter || product.sale)
    .filter(
      (product) =>
        noCategoryFilter || product.category === parseInt(selectedCategory)
    )
    .filter(
      (product) =>
        noTextFilter ||
        // searchValue.toLowerCase() === product.title.toLowerCase()
        product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
}

