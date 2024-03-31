import profileImage from '../assets/images/avatar-jessica.jpeg'

const SocialProfile = () => {
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/',
        },
        {
            name: 'Frontend Mentor',
            url: 'https://www.frontendmentor.io/',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/',
        },
    ]

    const person = {
        img: profileImage,
        name: 'Jessica Randall',
        location: 'London, United Kingdom',
        bio: 'Front-end developer and avid reader.',
    }

    return (
        <div className="rounded-2xl bg-grey-dark p-4 w-[90%] max-w-[350px] pt-6 sm:p-8 sm:max-w-[375px] sm:pt-9 ">
            <div className="flex flex-col items-center gap-6 text-center mb-6">
                <img
                    src={person.img}
                    alt="profile picture"
                    className="rounded-full size-28"
                />
                <div>
                    <h1 className="text-2xl font-semibold mb-1">
                        {person.name}
                    </h1>
                    <h2 className="text-green font-semibold">
                        {person.location}
                    </h2>
                </div>
                <p className="text font-normal">"{person.bio}"</p>
            </div>
            <div>
                {links.map((link, index) => {
                    return (
                        <a
                            href={link.url}
                            className={`w-full block text-center bg-grey my-3 p-3 rounded-md font-semibold ${
                                index === links.length - 1 ? 'mb-0' : null
                            } hover:bg-green hover:text-grey-dark duration-100 ease-linear`}
                        >
                            {link.name}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default SocialProfile
