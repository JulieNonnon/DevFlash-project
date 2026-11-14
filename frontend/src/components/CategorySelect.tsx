// input component for selecting a category

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

function CategorySelect({ value, onChange }: CategorySelectProps) {
  return (
    <div>
      <label htmlFor="category">Catégorie</label>

      <select id="category" value={value} onChange={(event) => onChange(event.target.value)}>
        {/* mocked categories for now, will be fetched from the backend later */}
        <option value="">Sélectionnez une catégorie</option>
        <option value="array">Méthodes de tableau</option>
        <option value="string">Méthodes de string</option>
      </select>
    </div>
  );
}

export default CategorySelect;
