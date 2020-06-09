import React from 'react';
import { Layout, Button, Typography } from 'antd';
import './Subjects.scss'
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';

const { Text } = Typography;
const { Footer, Content } = Layout;

const Subjects = () => (
    <div>
        <Layout className='layoutSubject' style={{background: 'white', align: 'center'}}>
            
            <MobileHeader title="Disciplinas" />
            <BrowserHeader title="Disciplinas" />

            <Content className='content' style={{flex: 1}}>
                <div className='button' style={{width: 330, margin: 'auto', height: 1000}}>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'white', marginBottom: '7px', border: '1px'}}>
                        <Text strong style={{color: 'black'}}>Disciplina 1</Text>
                        <i className="icon fas fa-chevron-right" />
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'black', marginBottom: '7px', border: '1px'}}>
                        <Text strong style={{color: 'black'}}>Disciplina 2</Text>
                        <i className="icon fas fa-chevron-right" />
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'black', marginBottom: '7px', border: '1px'}}>
                        <Text strong style={{color: 'black'}}>Disciplina 3</Text>
                        <i className="icon fas fa-chevron-right" />
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'black', marginBottom: '7px', border: '1px'}}>
                        <Text strong style={{color: 'black'}}>Disciplina 4</Text>
                        <i className="icon fas fa-chevron-right" />
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'black', marginBottom: '7px', border: '1px'}}>
                        <Text strong style={{color: 'black'}}>Disciplina 5</Text>
                        <i className="icon fas fa-chevron-right" />
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'black', marginBottom: '7px', border: '1px'}}>
                        <Text strong style={{color: 'black'}}>Disciplina 6</Text>
                        <i className="icon fas fa-chevron-right" />
                    </Button>
                    <Button style = {{background: '#1094ab', color: '#1094ab', marginTop: '15px', border: '1px'}}>
                        <Text strong style={{color: 'white'}}>Criar disciplina</Text>
                    </Button>
                </div>
            </Content>

            <Footer style ={{background:'#0A6777'}}>
                
            </Footer>
        </Layout>      
    </div>
);
 
export default Subjects;