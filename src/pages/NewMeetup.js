import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetUps = () => {
    const addMeetupHandler = (meetupData) => {
        fetch('https://udemycourse-56ad9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type':'application/json'
                }
            })
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetUps