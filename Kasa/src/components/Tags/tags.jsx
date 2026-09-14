import './tags.scss'

function Tags({ tags }) {
    return (
        <div className='tags'>
            {tags.map((tag) => (
                <span key={tag} className='tag'>
                    {tag}
                </span>
            ))}
        </div>
    )
}

export default Tags;