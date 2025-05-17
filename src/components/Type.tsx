import Typewriter from "typewriter-effect";

export default function Type() {
    return(
        <Typewriter
        options={{
            strings: [
                'Chokbar par ce portfolio, je te veux dans ma team !',
                'C\'est  grave cool, viens faire une alternance chez nous',
                'La go est déter, il faut qu\'on se rencontre'
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 70,
            cursor: '|',
        }}/>
    )
}