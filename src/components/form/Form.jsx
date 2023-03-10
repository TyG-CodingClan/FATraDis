


export const Form = ({ title, placeholder, type }) => {
  return (
    <>
        <p>{title}</p>
        <input type={type} placeholder={placeholder} />
    </>
  )
}

