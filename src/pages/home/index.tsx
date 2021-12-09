import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <Link to={'/login'}>点我跳转login</Link>
    </div>
  );
}
