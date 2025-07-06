import { Button, Flex, Form, Input, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { getCalculations, setCalculations } from '../../queries/db/calculator';

import styles from './calculator.module.css';
import type { CalculationsResponse } from '../../queries/db/types';

export const Calculator = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [result, setResult] = useState<
    { all: number; standalone: number } | undefined
  >();
  const [history, setHistory] = useState<CalculationsResponse[]>([]);

  if (!authContext) throw new Error('App initialization went wrong');

  useEffect(() => {
    if (!authContext.auth.logged) {
      navigate('/');
    }

    const func = async () => {
      const response = await getCalculations();
      setHistory(response.reverse());
    };

    if (authContext.auth.logged) {
      func();
    }
  }, [authContext.auth.logged, navigate]);

  const onSubmit = ({
    left,
    daysCount,
  }: {
    left: number;
    daysCount: number;
  }) => {
    const result = {
      all: Math.round(left / daysCount),
      standalone: Math.round(left / daysCount / 2),
    };
    setResult(result);
    setCalculations({
      data: new Date(),
      days: daysCount,
      money: left,
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
          initialValue={history.length ? history[0]?.days - 1 : undefined}
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

      {history.length ? (
        <Flex vertical>
          <Typography.Title level={3} className={styles.text}>
            История:
          </Typography.Title>
          {history.map((item) => (
            <Typography.Text className={styles.text}>
              В общем: {item.money}. на каждого:{' '}
              {Math.round(item.money / item.days)}
            </Typography.Text>
          ))}
        </Flex>
      ) : null}
    </Flex>
  );
};
