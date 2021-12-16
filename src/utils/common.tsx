import { createFromIconfontCN } from '@ant-design/icons';
import { HeaderListData } from '@/assets/types/types';

//创建IconFont
// iconfont图标
export const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3022708_p23h9i8cfg.js',
});

//初始列表的List
export const headerList: HeaderListData[] = [
  { name: '学习园地', icon: 'xiaoznz-icon-gengduo', link: 'learn' },
  { name: '单词搜索', icon: 'xiaoznz-icon-sousuo', link: 'search' },
  { name: '已学列表', icon: 'xiaoznz-icon-liebiao', link: 'list' },
  { name: '每日测验', icon: 'xiaoznz-icon-ceshi', link: 'test' },
];
