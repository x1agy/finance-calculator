import { Flex, Form, Input, Typography } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { AKHMED_CODE, NEKA_CODE } from '../../constants';
import { useNavigate } from 'react-router';

import styles from './app.module.css';

function App() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error('App initialization went wrong');
  }

  const { auth, setAuth } = authContext;

  if (auth.logged) {
    navigate('/calculator');
  }

  return (
    <Flex className={styles.wrapper} justify='center' vertical align='center'>
      <Form layout='vertical' className={styles.form}>
        <Form.Item
          name='code'
          label={<Typography.Title>Введите код</Typography.Title>}
          rules={[
            {
              validator: (_, value) => {
                if (value === NEKA_CODE || value === AKHMED_CODE) {
                  setAuth({ logged: true, whoLogged: value });
                } else {
                  return Promise.reject(new Error('Неверный код'));
                }
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default App;
