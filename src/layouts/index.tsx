import styles from './index.less';
import React from 'react';
import logo from '@/assets/logo.svg';
import { headerList, IconFont } from '@/utils/common';
import List from '@/layouts/components/list/index';
import { Button } from 'antd';

export default function Layouts(props: React.PropsWithChildren<any>) {
  return (
    <>
      <header className={styles.logo}>
        <img src={logo} alt="" />
        <List data={headerList} />
        <Button type={'primary'} className={styles.login}>
          登录
        </Button>
        <Button type={'primary'} className={styles.register}>
          注册
        </Button>
        <IconFont type={'xiaoznz-icon-menu2'} className={styles.memu} />
      </header>
    </>
  );
}
