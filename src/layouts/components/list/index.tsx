import React from 'react';
import { IconFont } from '@/utils/common';
import { Link } from 'umi';
import { HeaderListData } from '@/assets/types/types';
import styles from './styles.module.less';

interface Props extends React.ComponentProps<any> {
  data: HeaderListData[];
}

const Index = (props: Props) => {
  const { data } = props;

  return (
    <ul className={styles.ul}>
      {data.map((item) => (
        <li>
          <Link to={item.link}>
            <IconFont type={item.icon} className={styles.icon} />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Index;
