export default function List({items}) {
  return (
    items.map((item) => {
        // Add a key prop to the list item as it is required to uniquely identify the list item and helps in updating the DOM efficiently.
        /** * dont generate the key during the rendering otherwise it will render the component slow may create bugs
            * Dont use index as key as well. */
        return (
            <li key={item.id}>{item.name}</li>
        )
    })
  )
}