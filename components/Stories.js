import faker from "faker"
import { useEffect, useState } from "react"
import Story from "./Story";
function Stories() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=>{
        const suggestions = [...Array(20)].map((_, i) =>({
            ...faker.helpers.contextualCard(),
            id: i,
        })
        );
        setSuggestions(suggestions);
    }, [])

    return (
        <div className = "flex space-x-2 p-6 bg-white mt-8 gorder-gray-200 border rounded-sm overflow-x-scroll scrollbar-hide">
            {
                suggestions.map(profile => (
                    <Story 
                        key = {profile.id} 
                        img = {profile.avatar} 
                        username = {profile.username} 
                    />
                ))
            }
            {/*Story*/}
        </div>
    )
}

export default Stories
