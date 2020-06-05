import React from 'react';
import { Layout, Button, Typography } from 'antd';
import './Subjects.css'
import { RightOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const { Header, Footer, Content } = Layout;

const Subjects = () => (
    <div>
        <Layout className='layoutSubject' style={{background: '#0A6777', align: 'center'}}>
            
            <Header className='header' style={{background: '#0A6777', color: '#FFFFFF', fontSize: '25px'}}>
                Disciplinas   
            </Header>

            <Content className='content' style={{flex: 1}}>
                <div className='button' style={{width: 330, margin: 'auto', height: 1000}}>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'white', marginBottom: '7px', border: '1px'}} /*icon={<RightOutlined />*/>
                        <Text strong style={{color: 'white'}}>Disciplina 1</Text>
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'white', marginBottom: '7px', border: '1px'}} /*icon={<RightOutlined />*/>
                        <Text strong style={{color: 'white'}}>Disciplina 2</Text>
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'white', marginBottom: '7px', border: '1px'}} /*icon={<RightOutlined />*/>
                        <Text strong style={{color: 'white'}}>Disciplina 3</Text>
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'white', marginBottom: '7px', border: '1px'}} /*icon={<RightOutlined />*/>
                        <Text strong style={{color: 'white'}}>Disciplina 4</Text>
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'white', marginBottom: '7px', border: '1px'}} /*icon={<RightOutlined />*/>
                        <Text strong style={{color: 'white'}}>Disciplina 5</Text>
                    </Button>
                    <Button style = {{background: 'rgba(150, 159, 170, 0.38)', color: 'white', marginBottom: '7px', border: '1px'}} /*icon={<RightOutlined />*/>
                        <Text strong style={{color: 'white'}}>Disciplina 6</Text>
                    </Button>
                    <Button style = {{background: '#1094AB', color: 'white', marginTop: '15px', border: '1px'}}>
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