import Link from 'next/link';
import MainContainer from '../components/MainContainer';


const Users = ({ users }) => {

    return (
        <MainContainer keywords={"users page"}>
            <h1>I'm Users</h1>
            <ul>
                {users.map(user => {
                    return (
                        <li>
                            <Link href={ '/users/' + user.id } key = { user.id }>{ user.name }</Link>
                        </li>
                    )
                })}
            </ul>
        </MainContainer>
    )
}

export default Users;


export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const users = await res.json();

    return {
        props: {users} 
    }
}
