import MyLink from '../components/MyLink';

import Head from 'next/head';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords = {'freyzan next js' + keywords}></meta>
                <title>Главная страница</title>
            </Head>

            <nav className='navbar'>
                <MyLink text = "Главная страница" href={ '/' } />
                <MyLink text = "Пользователи" href={ '/users' } />
            </nav>
            <div>
                { children }
            </div>

            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style> 
        </>
    )
}

export default MainContainer;