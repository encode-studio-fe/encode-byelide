import type { BlockType } from '@/types/block'

export const blocks: {
  id: string
  type: BlockType
  label: string
  props: Record<string, string>
}[] = [
  {
    id: '1',
    type: 'quote',
    label: '斯蒂芬李会计',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    id: '2',
    type: 'notes',
    label: '笔记',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    id: '3',
    type: 'heroTitle',
    label: '标题',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    id: '4',
    type: 'image',
    label: '图片',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    id: '5',
    type: 'view',
    label: '视图',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    id: '6',
    type: 'chart',
    label: '图表',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    id: '7',
    type: 'button',
    label: '按钮',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    id: '8',
    type: 'form',
    label: '表单',
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  }
]
