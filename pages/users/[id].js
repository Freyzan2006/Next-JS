import { useRouter } from "next/router";

import css from '../../css/users.module.scss';
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
    const router = useRouter();
    
   
    return <MainContainer keywords = {user.name} className= {css.user}><h1>Пользователь with id: { router.query.id }</h1><p>Name: { user.name }</p></MainContainer>
}


export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: {user} 
    }
}