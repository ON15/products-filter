import { categories } from "../products"

/* 
1. Verknüpft das select-Menü mit einem Label "Kategorie"
2. Importiert die Kategorien aus products.js
3. Nutzt die Map-Methode, um nach der ersten option die weiteren option-Elemente zu erzeugen.
4. Erstellt in Finder.jsx den state selectedCategory und gebt ihn samt set-Funktion in FilterForm.
5. Verknüpft den state und die set-Funktion mit dem select-Element, ähnlich wie bei einem text-Input.
6. Ergänzt in Finder.js die getFilteredProducts-Funktion um den selectedCategory-Filter. 
Beachtet, dass der ausgelesene value des select-Elements immer ein String ist, und nutzt parseInt, 
um ihn in einen Integer umzuwandeln.
*/

export default function FilterForm({
  saleOnly,
  setSaleOnly,
  setSelectedCategory,
  // searchValue,
  setSearchValue,
}) {
  return (
    <form className="filter">
      <div className="filter__category">
        <label htmlFor="category">Kategorie</label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(parseInt(e.currentTarget.value))}
        >
          <option value="0">Alle kategorien</option>
          {categories.map(({ categoryId, name }) => (
            <option value={categoryId} key={categoryId}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          Sonderangebote
          <input
            type="checkbox"
            checked={saleOnly}
            onChange={(e) => setSaleOnly(e.currentTarget.checked)}
          />
        </label>
      </div>
      {/* Text filter */}
      <div>
        <input
          type="text"
          placeholder="type title for search..."
          // value={search}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
      </div>
    </form>
  );
}
