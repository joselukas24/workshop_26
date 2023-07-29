import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

const dummyContact = {
  id: 1,
  name: "R2-D2",
  phone: "222-222-2222",
  email: "r2d2@droids.com",
};

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(dummyContact);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const respose = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await respose.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {<ContactRow key={contact.id} contact={contact} />}
        </tbody>
      </table>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </div>
  );
}
