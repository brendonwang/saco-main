import PersonCard, {Person} from "~/components/PersonCard"

const people: Person[] = [
    {
        name: "Brendon Wang",
        img: "/profiles/brendon.jpeg",
        title: "Co-Founder",
        bio: "Lorem Ipusum"
    },
    {
        name: "Brendon Wang",
        img: "/profiles/brendon.jpeg",
        title: "Co-Founder",
        bio: "Lorem Ipusum"
    },
    {
        name: "Brendon Wang",
        img: "/profiles/brendon.jpeg",
        title: "Co-Founder",
        bio: "Lorem Ipusum"
    }
]
export default function About() {
    return (
        <main>
            <section className="">
                <h1 className="text-center text-4xl p-4 font-bold">Our Team</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
                    {people.map((person) => <PersonCard key={person.name} person={person}></PersonCard>)}
                </div>
            </section>
        </main>
    )
}