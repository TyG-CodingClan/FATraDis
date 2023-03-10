import { Form } from "../components"


const arr__form = [
  {id:1, title:'Nombre Completo', placeholder: 'Juan Roman', type: 'text'},
  {id:2, title:'Nombre Completo', placeholder: 'Juan Roman', type: 'text'},
  {id:3, title:'Nombre Completo', placeholder: 'Juan Roman', type: 'text'}

]


export const Contacto = () => {
  return (
    <>
      <h1>Asociate</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ea quisquam unde saepe suscipit quae, dolore autem quod voluptas 
        recusandae veniam itaque temporibus quas! Rerum saepe, obcaecati tempora 
        totam est natus?
      </p>
      <form action="">
      {
        arr__form.map( ( x ) => 
        <Form key={x.id}  type={x.type} placeholder={x.placeholder} title={x.title} /> 
        )
      }
      </form>
    </>
  )
}

