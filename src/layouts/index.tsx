import styles from './index.less';
import React from 'react';

export default function Layouts(props:React.PropsWithChildren<any>) {

  console.log(props);

  return (
    <>
      <div className={styles.title}>你好，这个是布局</div>
      <div>
        {props.children}
      </div>
      这是我的代码
    </>
  );
}