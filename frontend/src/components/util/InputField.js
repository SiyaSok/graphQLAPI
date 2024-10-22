/** @format */

export const InputField = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => (
  <div className='mb-4'>
    <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={id}
        className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
        placeholder={placeholder}
        rows='4'
        maxLength='200'
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);
