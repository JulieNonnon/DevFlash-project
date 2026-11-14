// input component for selecting a nomber of cards

interface CardCountSelectProps {
  value: number | '';
  onChange: (value: number | '') => void;
}

function CardCountSelect({ value, onChange }: CardCountSelectProps) {
  return (
    <div>
      <label htmlFor="card-count">Nombre de flashcards</label>

      <select
        id="card-count"
        value={value}
        onChange={(event) => {
          const selectedValue = event.target.value;

          onChange(selectedValue === '' ? '' : Number(selectedValue));
        }}
      >
        {/* mocked data for now, will be fetched from the backend later */}
        <option value="">Sélectionnez un nombre</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}

export default CardCountSelect;
