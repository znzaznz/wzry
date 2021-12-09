import styles from './index.less';
import React, { useEffect } from 'react';
import { request } from 'umi';

export default function Layouts(props: React.PropsWithChildren<any>) {
  useEffect(() => {
    request('/api/users', {
      method: 'get',
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className={styles.title}>你好，这个是布局</div>
      <div>{props.children}</div>
      这是我的代码
    </>
  );
}
