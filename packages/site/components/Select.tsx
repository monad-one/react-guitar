export default function Select<T extends string>(props: {
  label: string
  value: T
  values: T[]
  onChange: (value: T) => void
}) {
  return (
    <label className="w-1/2 p-2 sm:w-40 text-center">
      <small className="text-center block font-bold text-gray-600 uppercase mb-2">
        {props.label}
      </small>
      <select
        className="w-full appearance-none placeholder-gray-500 placeholder-opacity-100 border rounded h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={props.value}
        onChange={e => {
          const value = props.values.find(value => value === e.target.value)
          value && props.onChange(value)
        }}
      >
        {props.values.map(value => (
          <option
            key={value}
            value={value}
            onSelect={() => props.onChange(value)}
          >
            {value}
          </option>
        ))}
      </select>
    </label>
  )
}