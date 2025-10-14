import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card"
import Image from "next/image";

export type Person = {
    name: string
    img: string
    title: string
    bio: string
}

export default function PersonCard({person}: { person: Person }) {
    return (
        <Card
            className="text-center">
            <CardHeader className="pt-12">
                <CardTitle className="flex flex-col items-center gap-2">
                    <Image src={person.img} alt="Profile Picture" width="200" height="200"
                           className="rounded-full"></Image>
                    {person.name}
                    <p className="text-2xl text-neutral-400">{person.title}</p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {person.bio}
                </CardDescription>
            </CardContent>
        </Card>
    )
}