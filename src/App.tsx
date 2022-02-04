import React, {Component} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { HashRouter, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {LoginPage} from './components/Login/LoginPage'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import store, {AppStateType} from './redux/redux-store'
import {withSuspense} from './hoc/withSuspense'
import {UsersPage} from './components/Users/UsersContainer'

import { Layout, Menu} from 'antd'
import {CoffeeOutlined , UserOutlined, MessageOutlined, TeamOutlined} from '@ant-design/icons'
import { Header } from './components/Header/Header'
import { CountOfNewMessages } from './components/Dialogs/Dialogs'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import  { DialogListCOntainer } from './components/Dialogs/DialogListWithUser/DialogList'





const {Content, Footer, Sider} = Layout

const ChatPage = React.lazy(() => import('./components/Pages/Chat/ChatPage'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}


const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)





class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured')
    }

    

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        


        return (
            <Layout>
                <Header />
                <Content style={{padding: '0 50px'}}>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                /*  defaultSelectedKeys={['7']}*/
                                /*  defaultOpenKeys={['sub1']}*/
                                style={{height: '100%'}}
                            >
                                <Menu.Item key="1" icon={<UserOutlined/>}> <Link to="/profile">Profile</Link></Menu.Item>
                                <Menu.Item key="2" icon={<MessageOutlined/>}> <Link to="/dialogs">Messages<CountOfNewMessages/></Link></Menu.Item>
                                <Menu.Item key="3" icon={<TeamOutlined/>}> <Link to="/developers">Developers</Link></Menu.Item>
                                <Menu.Item key="4" icon={<CoffeeOutlined/>}><Link to="/chat">Publick Chat</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>

                            <Switch>
                                <Route path='/chat'
                                       render={() => <SuspendedChatPage/>}/>
                                <Route exact path='/'
                                       render={() => <Redirect to={'/dialogs'}/>}/>

                                <Route exact path='/dialogs'
                                       render={() => <DialogsContainer/>}/>

                                <Route exact path='/dialogs/:id?/messages'
                                       render={() => <DialogListCOntainer/>}/>

                                <Route path='/profile/:userId?'
                                       render={() => <SuspendedProfile/>}/>

                                <Route path='/developers'
                                       render={() => <UsersPage pageTitle={'Developers'}/>}/>

                                <Route path='/login'
                                       render={() => <LoginPage/>}/>

                                <Route path='*'
                                       render={() => <div>404 NOT FOUND</div>}/>


                            </Switch>

                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp: React.FC = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp
