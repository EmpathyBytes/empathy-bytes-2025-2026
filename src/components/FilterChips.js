import React from "react";
import "../styles/filterChips.css";

/**
 * A row of toggle buttons for filtering a list, e.g. the "Sort by" options
 * on the redesigned Projects page. Exactly one option is selected at a time.
 *
 * @component
 * @param {Object} props
 * @param {{ value: string, label: string }[]} props.options - The buttons to show, in order.
 * @param {string} props.selected - The `value` of the selected option.
 * @param {(value: string) => void} props.onSelect - Called with an option's `value` when it is clicked.
 * @param {string} [props.label] - Accessible name for the group, e.g. "Sort projects by".
 * @returns {JSX.Element}
 *
 * @example
 * <FilterChips options={[{ value: "all", label: "All" }]} selected="all" onSelect={setCategory} />
 */
export default function FilterChips({ options, selected, onSelect, label }) {
    return (
        <div className="filter-chips" role="group" aria-label={label}>
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className={`filter-chip${option.value === selected ? " filter-chip-selected" : ""}`}
                    aria-pressed={option.value === selected}
                    onClick={() => onSelect(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
