import {
  ChartLine,
  Form,
  HamburgerButton,
  ImageFiles,
  Notes,
  Quote,
  Table,
  TitleLevel} from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'

import type { BlockType } from '@/types/block'

export const blocksBaseMetaList: { type: BlockType; name: string; icon: Icon }[] = [
  {
    type: 'quote',
    name: '引述',
    icon: Quote
  },
  {
    type: 'notes',
    name: '笔记',
    icon: Notes
  },
  {
    type: 'heroTitle',
    name: '超级标题',
    icon: TitleLevel
  },
  { type: 'image', name: '图片', icon: ImageFiles },
  {
    type: 'view',
    name: '视图',
    icon: Table
  },
  {
    type: 'chart',
    name: '图表',
    icon: ChartLine
  },
  {
    type: 'button',
    name: '按钮',
    icon: HamburgerButton
  },
  {
    type: 'form',
    name: '表单',
    icon: Form
  }
]

export const blocksBaseMeta = Object.fromEntries(
  blocksBaseMetaList.map((item) => [item.type, item])
)
