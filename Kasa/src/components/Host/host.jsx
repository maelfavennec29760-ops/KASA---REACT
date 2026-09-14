import "./host.scss"

function Host({ host }) {
    return (
        <div className='host'>
            <div className='host-name'>
                {host.name
                    .split(" ")
                    .map((part, index) => (
                    <p key={index}>{part}</p>
                ))}
            </div>

            <img
                src={host.picture}
                alt={host.name}
            />
        </div>
    )
}

export default Host;