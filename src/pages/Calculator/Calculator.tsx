import { Button, Flex, Form, Input, Typography } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

import styles from './calculator.module.css';

export const Calculator = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [result, setResult] = useState<
    { all: number; standalone: number } | undefined
  >();

  if (!authContext) throw new Error('App initialization went wrong');

  if (!authContext.auth.logged) {
    navigate('/');
  }

  const onSubmit = ({
    left,
    daysCount,
  }: {
    left: number;
    daysCount: number;
  }) => {
    setResult({
      all: Math.round(left / daysCount),
      standalone: Math.round(left / daysCount / 2),
    });
  };

  return (
    <Flex vertical className={styles.wrapper} align='center'>
      <Form
        layout='vertical'
        className={styles.form}
        form={form}
        onFinish={onSubmit}
      >
        <Form.Item
          name='left'
          label={<span className={styles.text}>Сколько у вас осталось?</span>}
          rules={[{ required: true, message: 'Заполни все поля' }]}
        >
          <Input.OTP length={5} />
        </Form.Item>
        <Form.Item
          name='daysCount'
          label={<span className={styles.text}>На сколько дней?</span>}
          rules={[{ required: true, message: 'Заполни все поля' }]}
        >
          <Input.OTP length={2} />
        </Form.Item>

        <Button htmlType='submit'>Подсчитать</Button>
      </Form>

      {result && (
        <>
          <Flex vertical>
            <Typography.Title className={styles.text}>
              Бюджет на сегодня: {result.all}
            </Typography.Title>
            <Typography.Title className={styles.text}>
              Каждому из вас полагается: {result.standalone}
            </Typography.Title>
          </Flex>
        </>
      )}
    </Flex>
  );
};
