export type BasicBlockType = 'heroTitle' | 'view' | 'chart' | 'quote' | 'image'
export type ExternalBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExternalBlockType

export interface BaseBlockInfo {
  id: string
  type: BlockType
  label: string
}

// basic

export interface HeroTitleBlockInfo extends BaseBlockInfo {
  props: {
    content: string
  }
}

export interface ViewBlockInfo extends BaseBlockInfo {
  props: {
    fields: {
      id: string
      type: string
    }
    fieldProps: {
      width: number
      visible: boolean
    }[]
    data: { id: string; value: string }[]
  }
}

export interface QuoteBlockInfo extends BaseBlockInfo {
  props: {
    content: string
  }
}

export interface ImageBlockInfo extends BaseBlockInfo {
  props: {
    url: string
  }
}

// external
export interface ButtonBlockInfo extends BaseBlockInfo {
  props: {
    text: string
  }
}

export interface FormBlockInfo extends BaseBlockInfo {
  props: {
    fields: {
      type: string
      label: string
      placeholder?: string
      required?: boolean
    }[]
  }
}

export type BlockInfo =
  // basic
  | HeroTitleBlockInfo
  | ViewBlockInfo
  | QuoteBlockInfo
  | ImageBlockInfo
  // external
  | ButtonBlockInfo
  | FormBlockInfo
