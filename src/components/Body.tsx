import TextButton from "./TextButton";

export default function Body() {
    const content = [
        {
            id: 1,
            title: 'Twitter Link',
            link: 'https://twitter.com/badiru_',
        },
        {
            id: 2,
            title: 'Zuri Team',
            link: 'https://twitter.com/badiru_',
        },
        {
            id: 3,
            title: 'Zuri Books',
            link: 'https://twitter.com/badiru_',
        },
        {
            id: 4,
            title: 'Python Books',
            link: 'https://twitter.com/badiru_',
        },
        {
            id: 5,
            title: 'Background Check for Coders',
            link: 'https://twitter.com/badiru_',
        },
        {
            id: 6,
            title: 'Design Books',
            link: 'https://twitter.com/badiru_',
        },
    ];

     function onClick(link:string){
            console.log(link)
     }

    return(
        <div>
            {content.map((item) => (
                <TextButton key={item.id} text={item.title} onClick={()=>{
                    onClick(item.link)
                }} />
            ))}
        </div>
    )
}