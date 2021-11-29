// import { useHistory } from "react-router-dom";  Not for reactRouter 6..
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  // const history = useHistory();
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetups-5516d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST", //GET is the default
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //   // history.push('/') agrega y te lleva a una nueva pagina en el navegador, pero ir atras te vuelve a donde estabas, no queremos eso.
      //   history.replace("/"); //te LLeva a la nueva pagina sin poder dar atras a ningun lado.
      navigate({ pathname: "./some/path" }, { replace: true }); // navigate.replace
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
