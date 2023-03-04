const Rew = ({cxz}) => {
    const ewq = [78, 23, 56, 45, 34, 67, 12]
    const rew = ewq.filter(dsa => dsa > cxz)
    return(
        <>
            <ul>
                {
                    rew.map(vcx => <li>{vcx}</li>)
                }
            </ul>
        </>
    )
}
export default Rew