import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const respose = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await respose.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  });

  return <div>This is the result</div>;
}
