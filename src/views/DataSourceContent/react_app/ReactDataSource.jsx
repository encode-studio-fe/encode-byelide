import '@glideapps/glide-data-grid/dist/index.css'

import { DataEditor, GridCellKind, GridColumnIcon } from '@glideapps/glide-data-grid'
import { useEffect, useRef, useState } from 'react'

const tempDataList = new Array(100_0000).fill(0)

const tempDataPool = [
  {
    id: '001',
    name: '合一',
    age: '15',
    isOpen: true,
    hobby: ['football', 'swimming'],
    avatar: ['https://i.pravatar.cc/300?img=3'],
    notes: '**This is a markdown cell**'
  },
  {
    id: '002',
    name: '合二',
    age: '18',
    isOpen: true,
    hobby: ['basketball', 'swimming'],
    avatar: ['https://i.pravatar.cc/300?img=1'],
    notes: 'true'
  },
  {
    id: '003',
    name: '合三',
    age: '23',
    isOpen: false,
    hobby: ['basketball'],
    avatar: ['https://i.pravatar.cc/300?img=4'],
    notes: 'true'
  },
  {
    id: '004',
    name: '合四',
    age: '25',
    isOpen: true,
    hobby: ['football', 'swimming'],
    avatar: ['https://i.pravatar.cc/300?img=5'],
    notes: 'true'
  }
]

const data = tempDataList.map((item, index) => {
  const randomIndex = Math.floor(Math.random() * 4)
  const randomItem = tempDataPool[randomIndex]
  return {
    ...randomItem,
    id: `00${index}`,
    avatar: randomItem.avatar
  }
})

// Grid columns may also provide icon, overlayIcon, menu, style, and theme overrides
const columns = [
  { title: 'ID', width: 100, icon: GridColumnIcon.RowID },
  { title: '姓名', width: 100, icon: GridColumnIcon.Text },
  { title: '年龄', width: 100 },
  { title: '状态', width: 50 },
  { title: '爱好', width: 200 },
  { title: '头像', width: 200 },
  { title: '笔记', width: 200 }
]

// If fetching data is slow you can use the DataEditor ref to send updates for cells
// once data is loaded.
function getData([col, row]) {
  const person = data[row]

  switch (col) {
    case 0: {
      return {
        kind: GridCellKind.RowID,
        data: person.id,
        allowOverlay: false,
        displayData: person.id
      }
    }

    case 1: {
      return {
        kind: GridCellKind.Text,
        data: person.name,
        allowOverlay: true,
        displayData: person.name,
        hasMenu: true
      }
    }

    case 2: {
      return {
        kind: GridCellKind.Number,
        data: person.age,
        allowOverlay: true,
        displayData: person.age
      }
    }

    case 3: {
      return {
        kind: GridCellKind.Boolean,
        data: person.isOpen,
        allowOverlay: true,
        displayData: person.isOpen
      }
    }

    case 4: {
      return {
        kind: GridCellKind.Bubble,
        data: person.hobby,
        allowOverlay: true,
        displayData: person.hobby
      }
    }

    case 5: {
      return {
        kind: GridCellKind.Image,
        data: person.avatar,
        allowOverlay: true,
        displayData: person.avatar
      }
    }

    case 6: {
      return {
        kind: GridCellKind.Markdown,
        data: person.notes,
        allowOverlay: true,
        displayData: person.Markdown
      }
    }

    default: {
      return {}
    }
  }
}

export default function ReactDataSource() {
  const ref = useRef(null)
  const [editorRect, setEditorRect] = useState({ width: 500, height: 300 })
  const { width, height } = editorRect

  useEffect(() => {
    const calcRect = () => {
      const outerContainerDom = ref.current.parentElement.parentElement
      if (outerContainerDom) {
        const { width, height } = outerContainerDom.getBoundingClientRect()
        setEditorRect({ width: width - 12, height: height - 12 })
      }
    }

    calcRect()

    window.addEventListener('resize', calcRect, false)

    return () => {
      window.removeEventListener('resize', calcRect, false)
    }
  }, [])

  return (
    <div ref={ref}>
      <DataEditor
        width={width}
        height={height}
        columns={columns}
        getCellContent={getData}
        rows={data.length}
        onCellEdited={(p, q) => console.log(p, q)}
      />
      <div id="portal" style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999 }} />
    </div>
  )
}
