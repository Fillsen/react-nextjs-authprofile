import React from 'react';
import {Card, List} from 'antd';
import A from "../A";

const ProfileSessions = () => {
  const sessions = [
    {
      title: 'Windows Санкт-Петербург, Россия',
      description: 'сегодня в 23:10 Браузер Google Chrome',
    },
    {
      title: 'iOS Санкт-Петербург, Россия',
      description: 'сегодня в 18:14 Браузер Firefox',
    },
    {
      title: 'Linux Санкт-Петербург, Россия',
      description: 'сегодня в 10:33 Приложение NextJS',
    },
    {
      title: 'macOS Санкт-Петербург, Россия',
      description: 'вчера в 14:07 Браузер Safari',
    },
    {
      title: 'Android Санкт-Петербург, Россия',
      description: '9 сентября в 10:01 Сервис nextjs.com',
    },
  ];
  return (
    <Card type="inner" title="Последние сессии" extra={<A href="/" text='Отключить все'/>}>
      <List
        size='small'
        dataSource={sessions}
        itemLayout="horizontal"
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<p>{item.title}</p>}
              description={<p>{item.description}</p>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ProfileSessions;
