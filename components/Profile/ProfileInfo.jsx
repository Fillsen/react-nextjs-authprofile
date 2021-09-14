import React from 'react';
import {Card, Typography} from "antd";
import A from "../A";

const ProfileInfo = ({firstName, secondName, birthDay}) => {
  return (
    <Card
      type="inner"
      title="Личная информация"
      extra={<A href="/" text='Редактировать'/>}
    >
      <div>
        <Typography.Text>
          Имя: {firstName}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text>
          Фамилия: {secondName}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text>
          Дата рождения: {birthDay}
        </Typography.Text>
      </div>
    </Card>
  );
};

export default ProfileInfo;
